import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link } from "react-router-dom";
import user from "../../service/userService";

export default function Register() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (email && name && password) {
      await user.post({
        name: name.trim(),
        email: email,
        isLogged: false,
        password: password,
      });
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div>
      <h2>Página de cadastro</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={handleRegister}>Registrar</button>

      <Link to="/private">Já possui um cadastro? Entre!</Link>
    </div>
  );
}
