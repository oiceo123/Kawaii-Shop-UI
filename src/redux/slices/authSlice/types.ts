export type User = {
  id: string;
  email: string;
  username: string;
  role_id: number;
};

export type Token = {
  id: string;
  access_token: string;
  refresh_token: string;
} | null;
