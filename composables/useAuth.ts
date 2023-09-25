import { useKurocoApi } from './useKurocoApi';

const useAuthUser = () => {
  return useState<any | null>('user', () => null);
};

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
    await useKurocoApi(
      endpoint.login,
      {
        baseURL,
        method: 'POST',
        body: {
          email,
          password,
        },
      },
      { server: false }
    );
    await nextTick(profile);

    return authUser;
  };

  const logout = async () => {
    const data = await useKurocoApi(
      endpoint.logout,
      {
        baseURL,
        method: 'POST',
      },
      { server: false }
    );

    setUser(null);
  };

  const register = async (arg: any) => {
    console.log(arg);
    const data = await useKurocoApi(
      endpoint.register,
      {
        baseURL,
        method: 'POST',
        body: arg,
      },
      { server: false }
    );

    await nextTick(profile);
    return authUser;
  };

  const inquiry = async (arg: any) => {
    console.log(arg);
    const data = await useKurocoApi(
      endpoint.inquiry,
      {
        baseURL,
        method: 'POST',
        body: arg,
      },
      { server: false }
    );

    await nextTick(profile);
    return authUser;
  };

  const initialized = ref(false);
  const profile = async () => {
    try {
      const { data } = await useKurocoApi(
        endpoint.profile,
        {
          baseURL,
        },
        { server: false }
      );
      setUser(data);
    } catch (error) {
      setCookie(null);
    }

    initialized.value = true;
    return authUser;
  };

  const isLoggedIn = computed(() => !!authUser.value?.member_id);

  return {
    initialized,
    authUser,
    isLoggedIn,
    login,
    logout,
    register,
    profile,
    inquiry,
  };
};
