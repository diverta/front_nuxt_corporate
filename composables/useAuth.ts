import { useAuthUser } from './useAuthUser';

// TODO restore profile on initial access with calling profile()
export const useAuth = () => {
  const authUser = useAuthUser();
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;
  const endpoint = config.public.endpoint as { [key: string]: string };

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await $fetch(endpoint.login, {
      baseURL,
      method: 'POST',
      body: {
        email,
        password,
      },
    });
    await nextTick(profile);

    return authUser;
  };

  const logout = async () => {
    const data = await $fetch(endpoint.logout, {
      baseURL,
      method: 'POST',
    });

    setUser(data);
  };

  // TODO register
  const register = async (arg: any) => {
    if (!authUser.value) {
      const data = await $fetch(endpoint.register, {
        baseURL,
        method: 'POST',
        body: arg,
      });
    }
  };

  const profile = async () => {
    try {
      const data = await $fetch(endpoint.profile, {
        baseURL,
        headers: useRequestHeaders(['cookie']) as HeadersInit,
      });
      setUser(data);
    } catch (error) {
      setCookie(null);
    }

    return authUser;
  };

  return {
    login,
    logout,
    register,
    profile,
  };
};
