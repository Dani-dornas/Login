import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/centerbox.css";
import UsersService from "../../services/UsersService";
import { UsersProps } from "../../types";
import { AuthContext } from "../../context";

function User() {
  const auth = useContext(AuthContext);
  const { id } = useParams();
  const [users, setUsers] = useState({} as UsersProps);

  useEffect(() => {
    if (id) {
      UsersService.listById(id)
        .then((r) => {
          setUsers(r);
        })
        .catch((error) => {
          console.error("Erro ao buscar informações de Usuário:", error);
        });
    }
  }, [id]);

  return (
    <div className="centerbox">
      <div className="flexcollum">
        <span>Olá {auth.user?.alias}</span>
        <span>Email:{auth.user?.mail}</span>
        <span>Id:{auth.user?.id}</span>
        <span>Nome:{auth.user?.alias}</span>
      </div>
    </div>
  );
}

export default User;
