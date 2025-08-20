'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { logIn } from '@/actions/auth';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? '로그인 중...' : '로그인'}
    </Button>
  );
}

function LoginPage() {
  const [state, formAction] = useActionState(logIn, {
    success: false,
    message: null,
  });

  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" action={formAction}>
            <div className="space-y-2">
              <Label>이메일</Label>
              <Input type="text" name="email" required />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>비밀번호</Label>
              <Input type="password" name="password" required />
            </div>

            {state.message && (
              <p className={state.success ? 'text-green-500' : 'text-red-500'}>
                {state.message}
              </p>
            )}

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export default LoginPage;
