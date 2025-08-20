import Link from 'next/link';

import LogoutButton from '@/components/LogoutButton';

import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-10">
      {user?.aud !== 'authenticated' ? (
        <div className="flex flex-col justify-center items-center space-y-5">
          <Link
            href="/login"
            className="hover:text-3xl px-5 py-1 rounded-xs transition-all"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="hover:text-3xl px-5 py-1 rounded-xs transition-all"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
}
