import { signOut } from '@/actions/auth';

function LogoutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="hover:text-3xl px-5 py-1 rounded-xs transition-all cursor-pointer"
      >
        Logout
      </button>
    </form>
  );
}

export default LogoutButton;
