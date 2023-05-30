import { ReactNode, createContext, useState } from "react";
import { ContactData } from "../components/modal/validators";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../hooks";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactProviderValues {
  contactRegister: (data: ContactData) => void;
  addNewContactModal: boolean;
  setAddNewContactModal: (value: boolean) => void;
  loading: boolean;
}

export const ContactContext = createContext<ContactProviderValues>(
  {} as ContactProviderValues
);

export function ContactProvider({ children }: ContactProviderProps) {
  const { userContacts, setUserContacts } = useAuth();
  const [addNewContactModal, setAddNewContactModal] = useState(false);
  const [loading, setLoading] = useState(false);

  async function contactRegister(data: ContactData) {
    try {
      setLoading(true);
      const response = await api.post("/contacts", data);
      toast.success("Contato registrado com sucesso");

      setUserContacts([...userContacts, response.data]);
      setAddNewContactModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Email de contato já cadastrado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContactContext.Provider
      value={{
        contactRegister,
        addNewContactModal,
        setAddNewContactModal,
        loading,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
