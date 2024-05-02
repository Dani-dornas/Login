import { useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";
import { useApi } from "../../hooks/useApi";
import { UsersProps } from "../../types";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UsersProps | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateUser = async () => {
      const email = localStorage.getItem("authEmail");
      if (email) {
        const data = await api.validateUser(email);
        if (data && data.isLogged) {
          setUser(data);
        }
      }
    };

    validateUser();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    
    if (data && data.isLogged) {
      setUser(data);
      setLocalStorage(data);
      return true;
    }
    return false;
  };
  
  const signout = async () => {
    let email = user?.mail ? user?.mail : "";
    await api.logout(email);
    setUser(null);
    localStorage.clear();
  };

  const setLocalStorage = (user: UsersProps) => {
    localStorage.setItem("authEmail", user.mail);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};