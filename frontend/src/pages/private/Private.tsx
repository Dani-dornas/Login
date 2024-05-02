import { useContext } from "react";
import { AuthContext } from "../../context";


export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Página privada</h2>

            Olá {auth.user?.alias} 
        </div>
    );
}