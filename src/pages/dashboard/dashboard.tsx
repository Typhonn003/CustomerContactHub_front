import {
  Button,
  Logo,
  AddContactModal,
  EditContactModal,
  Card,
} from "../../components";
import {
  StyledHeader,
  StyledMain,
  ContactsList,
  UserInfo,
  NoContacts,
} from "./style";
import { useAuth } from "../../hooks";
import { useContact } from "../../hooks/useContact";

function timeMessage(): string {
  const time = new Date();
  const hour = time.getHours();

  if (6 <= hour && hour < 12) {
    return "Bom dia";
  } else if (12 <= hour && hour < 18) {
    return "Boa tarde";
  } else if (18 <= hour && hour < 24) {
    return "Boa noite";
  } else {
    return "Boa madrugada";
  }
}

export function Dashboard() {
  const { userData, userContacts, logout } = useAuth();
  const {
    addNewContactModal,
    setAddNewContactModal,
    editContactModal,
    currentContact,
  } = useContact();

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
            <h2>
              {timeMessage()}, {userData?.fullName.split(" ")[0]}!
            </h2>
            <p>Que bom ver você aqui outra vez!</p>
          </div>
          <div>
            <Button color="pink" onClick={() => setAddNewContactModal(true)}>
              Adicionar contato
            </Button>
          </div>
        </UserInfo>
        {userContacts.length > 0 ? (
          <ContactsList>
            {userContacts.map((contact) => (
              <Card contact={contact} key={contact.id} />
            ))}
          </ContactsList>
        ) : (
          <NoContacts>
            <h2>Você ainda não tem contatos? =(</h2>
          </NoContacts>
        )}
      </StyledMain>
      {addNewContactModal ? <AddContactModal /> : null}
      {editContactModal ? <EditContactModal contact={currentContact} /> : null}
    </>
  );
}
