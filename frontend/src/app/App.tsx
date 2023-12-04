import User from "../pages/User/User";
import { Route, Routes } from "react-router-dom";
import { Private } from "../pages/private/Private";
import { RequireAuth } from "../context/auth/RequireAuth";
import { Login } from "../pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route
        path="/user"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
     
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/private"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
