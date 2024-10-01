import { useContext, useEffect, useState } from "react";
import userService from "../../service/userService";
import type { User } from "../../types/User";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function User() {
    const [users, setUsers] = useState({} as User);
    const { id } = useParams();

    const auth = useContext(AuthContext);

    useEffect(() => {
        if (id) {
          userService
            .listById(id)
            .then((r) => {
              setUsers(r);
              // Se a lista de usuários estiver vazia, avisa
              if (r.length === 0) {
                alert("NÃO HÁ USUÁRIOS");
              }
            })
            .catch((error) => {
              console.error("Erro ao buscar informações de usuário:", error);
            });
        }
      }, [id]);

    return (
        <div>
            <h1>Olá, {auth.user?.name} </h1>  
            <p> Seus dados são: <br />
                nome: {auth.user?.name}; <br />
                email: {auth.user?.email}; <br />
                senha: {auth.user?.password}; <br />
                id: {auth.user?.id}; <br />
                status: {auth.user?.isLogged}
            </p>
        </div>
    );
}