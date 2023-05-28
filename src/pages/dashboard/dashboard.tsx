import { Button, Logo } from "../../components";
import { ContactCard, StyledHeader, StyledMain, ContactsList, UserInfo } from "./style";

export function Dashboard() {
  return (
    <>
      <StyledHeader>
        <div>
          <Logo>HubLinkup</Logo>
          <Button type="button">Sair</Button>
        </div>
      </StyledHeader>
      <StyledMain>
        <UserInfo>
          <div>
            <h2>Bom dia, Fulano!</h2>
            <p>Que bom ver você aqui outra vez!</p>
          </div>
          <div>
            <Button color="pink">Adicionar contato</Button>
            <Button color="indigo">Editar perfil</Button>
          </div>
        </UserInfo>
        <ContactsList>
          {/* <h2>Sem contatos? =(</h2> */}
          {/* <ContactCard>
            <h2>Contact Named One</h2>
            <p>contactone@mail.com</p>
            <p>(XX) XXXXX-XXXX</p>
            <Button color="pink">Editar contato</Button>
          </ContactCard> */}
        </ContactsList>
      </StyledMain>
    </>
  );
}
