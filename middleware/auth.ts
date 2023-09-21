import { useAuthUser } from '@/composables/useAuthUser';

export interface AuthMeta {
  redirect?: string; // set redirect route if the route is denied. default: '/'
  callback?: () => void; // callback function if the route is denied
}

export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthRoute = to?.meta?.middleware === 'auth';
  if (isAuthRoute) {
    const authMeta: AuthMeta = (to as any).meta?.meta?.auth;

    const loggedIn = useAuthUser().value !== null;
    if (loggedIn) {
      return;
    }

    authMeta.callback?.();
    return navigateTo(authMeta.redirect || '/');
  }
});
