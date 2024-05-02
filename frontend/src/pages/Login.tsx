import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await login(email, password);
  }

  async function login(email: string, password: string) {
    await auth.signin(email, password);
    navigate("/");
  }

  return (
    <div className="centerbox">
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
