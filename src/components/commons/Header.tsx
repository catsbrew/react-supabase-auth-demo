import Link from 'next/link';

import { createClient } from '@/utils/supabase/server';

async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 left-0 w-full py-5 border-b">
      <div className="flex justify-between px-52">
        <Link href="/" className="text-xl">
          Home
        </Link>
        <div className="flex justify-center items-center space-x-10">
          <p>{user?.email}</p>
          <p>{user?.role}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
