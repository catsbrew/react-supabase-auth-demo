import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-5">
      <Link
        href="/login"
        className="hover:text-3xl px-5 py-1 rounded-xs transition-all"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="hover:text-3xl px-5 py-1 rounded-xs transition-all"
      >
        Sign Up
      </Link>
    </div>
  );
}
