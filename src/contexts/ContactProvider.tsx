import { ReactNode, createContext, useState } from "react";
import { ContactData, FullContactData } from "../pages/dashboard/validators";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../hooks";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactProviderValues {
  registerContact: (data: ContactData) => void;
  contactEdit: (data: ContactData) => void;
  addNewContactModal: boolean;
  setAddNewContactModal: (value: boolean) => void;
  editContactModal: boolean;
  setEditContactModal: (value: boolean) => void;
  currentContact: FullContactData;
  setCurrentContact: (value: FullContactData) => void;
  loading: boolean;
}

export const ContactContext = createContext<ContactProviderValues>(
  {} as ContactProviderValues
);

export function ContactProvider({ children }: ContactProviderProps) {
  const { userContacts, setUserContacts } = useAuth();
  const [addNewContactModal, setAddNewContactModal] = useState(false);
  const [editContactModal, setEditContactModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentContact, setCurrentContact] = useState({} as FullContactData);

  async function registerContact(data: ContactData) {
    try {
      setLoading(true);
      const response = await api.post("/contacts", data);

      setUserContacts([...userContacts, response.data]);
      setAddNewContactModal(false);

      toast.success("Contato registrado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Email de contato já cadastrado");
    } finally {
      setLoading(false);
    }
  }

  async function contactEdit(data: ContactData) {
    try {
      setLoading(true);
      const response = await api.patch(`/contacts/${currentContact.id}`, data);

      const filteredContacts = userContacts.map((contact) => {
        return contact.id === currentContact.id
          ? { ...contact, ...response.data }
          : contact;
      });

      setUserContacts(filteredContacts);
      setEditContactModal(false);

      toast.success("Contato editado com sucesso");
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
        registerContact,
        contactEdit,
        addNewContactModal,
        setAddNewContactModal,
        editContactModal,
        setEditContactModal,
        currentContact,
        setCurrentContact,
        loading,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
