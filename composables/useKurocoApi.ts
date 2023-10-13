import { AsyncDataOptions, useAsyncData } from 'nuxt/app';
import { defu } from 'defu';

export const useKurocoApi = (
  url: string,
  options: Parameters<typeof $fetch>[1] = {},
  asyncDataOptions: AsyncDataOptions<any> = {}
) => {
  const config = useRuntimeConfig();

  const defaults: Parameters<typeof $fetch>[1] = {
    baseURL: (config.public.kurocoApiDomain as string) || '/',
    credentials: 'include',
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options || {}, defaults);

  return useAsyncData(
    `${url}${JSON.stringify(params)}`,
    () => $fetch(url, { ...params }),
    asyncDataOptions
  );
};
