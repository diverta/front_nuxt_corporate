import { useKurocoApi } from './useKurocoApi';

const useUser = () => {
  return useState<any | null>('user', () => null);
};

export const useAuth = () => {
  const userRef = useUser();
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;
  const endpoint = config.public.endpoint as { [key: string]: string };

  const setUser = (user: any) => {
    userRef.value = user;
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
  };

  const logout = async () => {
    await useKurocoApi(
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
  };

  const contact = async (arg: any) => {
    console.log(arg);
    const data = await useKurocoApi(
      endpoint.contact,
      {
        baseURL,
        method: 'POST',
        body: arg,
      },
      { server: false }
    );

    return data;
  };   

  const profile = async () => {
    const { data } = await useKurocoApi(
      endpoint.profile,
      {
        baseURL,
      },
      { server: false }
    );
    setUser(data);
  };

  const isLoggedIn = computed(() => !!userRef.value?.member_id);

  const authUser = computed(() => {
    const u = userRef.value;
    const groupId = Object.keys(u?.group_ids || {})?.[0];
    const isPremiumUser = groupId === '105';
    const isRegularUser = groupId === '104';
    return {
      ...u,
      groupId: Object.keys(u?.group_ids || {})?.[0],
      isPremiumUser,
      isRegularUser,
    };
  });

  return {
    authUser,
    isLoggedIn,
    login,
    logout,
    register,
    profile,
    inquiry,
    contact
  };
};
