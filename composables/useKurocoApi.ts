import type { AsyncDataOptions } from 'nuxt/app';
import { defu } from 'defu';

export const useKurocoApi = (
  url: string,
  options: Parameters<typeof $fetch>[1]
) => {
  const config = useRuntimeConfig();

  const defaults: Parameters<typeof $fetch>[1] = {
    baseURL: (config.public.baseURL as string) || '/',
    credentials: 'include',
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options || {}, defaults);

  return useAsyncData(url, () => $fetch(url, params));
};
