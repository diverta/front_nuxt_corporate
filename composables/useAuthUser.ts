export const useAuthUser = () => {
  return useState<any | null>('user', () => null);
};
