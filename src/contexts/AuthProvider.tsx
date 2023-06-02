import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginData } from "../validations/login";
import { FullUserData } from "../validations/user";
import { FullContactData } from "../validations/contact";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  login: (data: LoginData) => void;
  loading: boolean;
  tokenLoading: boolean;
  userData: FullUserData;
  setUserData: (value: FullUserData) => void;
  setUserContacts: (value: FullContactData[]) => void;
  userContacts: FullContactData[];
  userExists: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [userData, setUserData] = useState({} as FullUserData);
  const [userContacts, setUserContacts] = useState<FullContactData[]>([]);
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
          setUserContacts(data.contacts);
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
      setUserContacts(profile.contacts);
      setUserExists(true);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha incorreto");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        tokenLoading,
        userData,
        setUserData,
        setUserContacts,
        userContacts,
        userExists,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
