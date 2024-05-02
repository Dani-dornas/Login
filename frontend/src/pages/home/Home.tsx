import { Link } from "react-router-dom";
import { useContext } from "react";
import { logout, user } from "../../assets";
import "../css/centerbox.css";
import { AuthContext } from "../../context";

function Home() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.reload();
  };

  return (
    <nav>
      {auth.user ? (
        <div className="centerbox">
          <button>
            <Link to={`/user/${auth.user?.id}`}>
              <img src={user} alt="Pagina de usuário" />
            </Link>
          </button>
          <button onClick={handleLogout}>
            <img id="logoutbutton" src={logout} alt="Logout Button" />
          </button>
        </div>
      ) : (
        <div>
          <button>
            <Link to="/user">
              <img src={user} alt="Pagina de usuário" />
            </Link>
          </button>
          <span>User Page</span>
          <div>
            <button>
              <Link to="/employermanagement">
                <img src={user} alt="Pagina de funcionario" />
              </Link>
            </button>
            <span>Employer Page</span>
          </div>
          <div>
            <button>
              <Link to="/addemployer">
                <img src={user} alt="Pagina de funcionario" />
              </Link>
            </button>
            <span>Add employer</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Home;
