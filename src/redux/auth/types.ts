export type User = {
  name: string | null;
  email: string | null;
};

export type AuthSlice = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isError: string | null;
};
