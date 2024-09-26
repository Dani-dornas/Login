import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/use.Api";

export default function AuthProvider({ children }: { children: JSX.Element }) {
  // salva o usuário logado. Quando não há usuário, salva nulo (igual quando começa)
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  
  //faz reaquisição para o BACKEND para ver se a autenticação funciona ou não
  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    //se temos um usuário e um token, salva o usuário
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  //zera o usuário
  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
