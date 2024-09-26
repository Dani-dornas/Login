import { Link, Route, Routes } from "react-router-dom";
import { Home, Private } from "./pages";
import "./app.css";
import RequireAuth from "./contexts/Auth/RequireAuth";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
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
      </Routes>
    </div>
  );
}

export default App;
