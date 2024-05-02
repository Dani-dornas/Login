import { Route, Routes } from "react-router-dom";
import { User, Home, Login, Private, AddEmployer, EmployerManagement } from "../pages";
import { RequireAuth } from "../context";

export default function RoutesApp() {
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
      <Route
        path="/user/:id"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
      <Route path="/employermanagement" element={<EmployerManagement />} />
      <Route path="/addemployer" element={<AddEmployer />} />
    </Routes>
  );
}
