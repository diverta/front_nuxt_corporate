const useUser = () => {
  return useState<any | null>('user', () => null);
};

export const useAuth = () => {
  const userRef = useUser();
  const config = useRuntimeConfig();
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
    await $fetch(endpoint.login, {
      method: 'POST',
      body: {
        email,
        password,
      },
    });
    await nextTick(profile);
  };

  const logout = async () => {
    await $fetch(endpoint.logout, {
      method: 'POST',
    });
    setUser(null);
  };

  const register = async (arg: any) => {
    await $fetch(endpoint.register, {
      method: 'POST',
      body: arg,
    });

    await nextTick(profile);
  };

  const updateProfile = async (arg: any) => {
    await $fetch(endpoint.updateProfile, {
      method: 'POST',
      body: arg,
    });

    await nextTick(profile);
  };

  const deleteProfile = async (arg: any) => {
    await $fetch(endpoint.deleteProfile, {
      method: 'POST',
      body: arg,
    });

    await nextTick(logout);
  };

  const profile = async () => {
    const data = await $fetch(endpoint.profile);
    setUser(data);
  };

  const isLoggedIn = computed(() => !!userRef.value?.member_id);

  const authUser = computed(() => {
    const u = userRef.value;
    const groupIds = Object.keys(u?.group_ids || {});
    const isPremiumUser = groupIds.includes('105');
    const isRegularUser = groupIds.includes('104');
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
    updateProfile,
    deleteProfile,
    profile,
  };
};
