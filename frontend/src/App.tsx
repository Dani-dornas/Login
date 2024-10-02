import { Link, Route, Routes } from "react-router-dom";
import { Home, Private, Register, User } from "./pages";
import "./app.css";
import RequireAuth from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.reload();
  };

  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>

          {auth.user ? (
            <div>
              <button>
                <Link to={`/user/${auth.user?.id}`}>
                  <img src="" alt="Pagina de usuário" />
                </Link>
              </button>

              <button onClick={handleLogout}>
                <img src="" alt="Logout Button" />
              </button>
            </div>
          ) : (
            <button>
              <Link to="/Private">
                <img src="" alt="Pagina de usuário" />
              </Link>
            </button>
          )}
        </nav>
      </header>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
        <Route
          path="/user/:id"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
