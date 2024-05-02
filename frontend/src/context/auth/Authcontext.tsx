import { createContext } from 'react';
import { UsersProps } from '../../types';

export type AuthContextType = {
    user: UsersProps | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);