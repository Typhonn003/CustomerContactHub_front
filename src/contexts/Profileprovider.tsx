import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "../hooks";
import { toast } from "react-toastify";
import { UserData } from "../validations/user";

interface ProfileProviderProps {
  children: ReactNode;
}

interface ProfileProviderValues {
  editProfileModal: boolean;
  setEditProfileModal: (value: boolean) => void;
  profileEdit: (data: UserData) => void;
  deleteProfile: () => void;
}

export const ProfileContext = createContext<ProfileProviderValues>(
  {} as ProfileProviderValues
);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { userData, setUserData, logout } = useAuth();

  async function profileEdit(data: UserData) {
    try {
      const response = await api.patch(`/customers/${userData.id}`, data);
      setUserData(response.data);
      setEditProfileModal(false);
      toast.success("Perfil editado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Email já cadastrado");
    }
  }

  async function deleteProfile() {
    try {
      await api.delete(`/customers/${userData.id}`);

      setEditProfileModal(false);
      toast.success("Perfil deletado com sucesso");
      logout();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível deletar o perfil");
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        editProfileModal,
        setEditProfileModal,
        profileEdit,
        deleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
