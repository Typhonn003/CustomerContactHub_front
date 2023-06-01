import { Routes, Route, Navigate } from "react-router-dom";
import { Register, Login, Dashboard } from "../pages";
import { RegisterProvider } from "../contexts/RegisterProvider";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ContactProvider } from "../contexts";

export function RoutesMain() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <RegisterProvider>
            <Register />
          </RegisterProvider>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <ContactProvider>
              <Dashboard />
            </ContactProvider>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
