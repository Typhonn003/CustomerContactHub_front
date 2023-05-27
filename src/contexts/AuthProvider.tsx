import { ReactNode, createContext, useState } from "react";
import { LoginData } from "../pages/login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  login: (data: LoginData) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function login(data: LoginData) {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem("customer-hub:token", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha incorreto");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ login, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
