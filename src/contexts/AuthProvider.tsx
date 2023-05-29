import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface Contact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registrationDate: string;
  customerId: string;
}

interface Customer {
  id: string;
  registrationDate: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  contacts: Contact[];
}

interface AuthContextValues {
  login: (data: LoginData) => void;
  loading: boolean;
  tokenLoading: boolean;
  userData: Customer;
  userExists: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [userData, setUserData] = useState({} as Customer);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("customer-hub:token");
      if (!token) {
        setTokenLoading(false);
        return;
      }
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data, status } = await api.get("customers/profile");
        if (status === 200) {
          setUserData(data);
          setUserExists(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTokenLoading(false);
      }
    })();
  }, []);

  async function login(data: LoginData) {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("customer-hub:token", token);

      const { data: profile } = await api.get("customers/profile");
      setUserData(profile);
      setUserExists(true);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha incorreto");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ login, loading, tokenLoading, userData, userExists }}
    >
      {children}
    </AuthContext.Provider>
  );
}
