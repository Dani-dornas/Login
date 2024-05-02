export interface UsersProps {
  id: number;
  alias: string;
  mail: string;
  password: string;
  isLogged: boolean;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface Error {
  error: string;
  props: string;
}