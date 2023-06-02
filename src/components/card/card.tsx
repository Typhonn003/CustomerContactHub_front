import { Button } from "..";
import { useContact } from "../../hooks";
import { FullContactData } from "../../validations/contact";
import { ContactCard } from "./style";

interface CardProps {
  contact: FullContactData;
}

export function Card({ contact }: CardProps) {
  const { setEditContactModal, setCurrentContact } = useContact();

  return (
    <ContactCard>
      <h2>{contact.fullName}</h2>
      <p>{contact.email}</p>
      <p>{contact.phoneNumber}</p>
      <Button
        color="pink"
        onClick={() => {
          setCurrentContact(contact);
          setEditContactModal(true);
        }}
      >
        Editar contato
      </Button>
    </ContactCard>
  );
}
