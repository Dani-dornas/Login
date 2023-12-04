export interface UsersProps {
  id: number;
  alias: string;
  mail: string;
  phone: string;
  token: string;
}

export interface Error {
  error: string;
  props: string;
}