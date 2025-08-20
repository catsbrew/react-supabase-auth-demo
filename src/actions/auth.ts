'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/server';

type LogInState = {
  success: boolean;
  message: string | null;
  data?: User | null;
};

export async function logIn(
  initialState: LogInState,
  formData: FormData,
): Promise<LogInState> {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  if (!data.email || !data.password) {
    return {
      success: false,
      message: '아이디나 비밀번호를 확인해주세요.',
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      success: false,
      message: error.message || '회원가입에 실패했습니다.',
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');

  return {
    success: true,
    message: '로그인에 성공했습니다.',
  };
}

type SignUpState = {
  success: boolean;
  message: string | null;
  data?: User | null;
};

export async function signUp(
  initialState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const passwordConfirm = formData.get('password-confirm') as string;

  if (!email || !password) {
    return {
      success: false,
      message: '아이디나 비밀번호를 확인해주세요.',
    };
  }

  if (password !== passwordConfirm) {
    return {
      success: false,
      message: '비밀번호가 일치하지 않습니다.',
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message || '회원가입에 실패했습니다.',
    };
  }

  return {
    success: true,
    message: '회원가입에 성공했습니다! 이메일을 확인해주세요.',
  };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath('/', 'layout');
  redirect('/');
}
