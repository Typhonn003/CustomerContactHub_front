import { Routes, Route, Navigate } from "react-router-dom";
import { Register, Login, Dashboard } from "../pages";
import { RegisterProvider } from "../contexts/RegisterProvider";

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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
