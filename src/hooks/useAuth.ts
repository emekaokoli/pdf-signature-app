import { Auth } from '@/utils/Auth';

export default function useAuth() {
  const isLoggedIn = Auth.isAuthenticated();
  const logOut = Auth.removeToken;

  return {
    logOut,
    isLoggedIn,
  };
}
