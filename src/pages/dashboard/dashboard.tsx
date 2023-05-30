import { Button, Logo, AddContactModal } from "../../components";
import {
  ContactCard,
  StyledHeader,
  StyledMain,
  ContactsList,
  UserInfo,
  NoContacts,
} from "./style";
import { useAuth } from "../../hooks";
import { useContact } from "../../hooks/useContact";

export function Dashboard() {
  const { userData, userContacts, logout } = useAuth();
  const { addNewContactModal, setAddNewContactModal } = useContact();

  return (
    <>
      <StyledHeader>
        <div>
          <Logo>HubLinkup</Logo>
          <Button type="button" onClick={logout}>
            Sair
          </Button>
        </div>
      </StyledHeader>
      <StyledMain>
        <UserInfo>
          <div>
            <h2>Bom dia, {userData?.fullName.split(" ")[0]}!</h2>
            <p>Que bom ver você aqui outra vez!</p>
          </div>
          <div>
            <Button color="pink" onClick={() => setAddNewContactModal(true)}>
              Adicionar contato
            </Button>
            <Button color="indigo">Editar perfil</Button>
          </div>
        </UserInfo>
        {userContacts.length > 0 ? (
          <ContactsList>
            {userContacts.map((contact) => (
              <ContactCard key={contact.id}>
                <h2>{contact.fullName}</h2>
                <p>{contact.email}</p>
                <p>{contact.phoneNumber}</p>
                <Button color="pink">Editar contato</Button>
              </ContactCard>
            ))}
          </ContactsList>
        ) : (
          <NoContacts>
            <h2>Você ainda não tem contatos? =(</h2>
          </NoContacts>
        )}
      </StyledMain>
      {addNewContactModal ? <AddContactModal /> : null}
    </>
  );
}
