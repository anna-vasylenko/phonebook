export type User = {
  name: string | null;
  email: string | null;
};

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type AuthSlice = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isError: string | null;
};

export type Credentials = {
  user: User;
  token: string;
};

export type LoginUser = {
  name: string;
  password: string;
};
