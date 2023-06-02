import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "..";
import { useContact } from "../../hooks";
import { StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { ContactData, FullContactData, contactSchema } from "../../validations/contact";

interface EditContactProps {
  contact: FullContactData;
}

export function EditContactModal({ contact }: EditContactProps) {
  const { contactEdit, setEditContactModal, deleteContact } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(contactEdit)}>
        <div>
          <h2>Editar contato</h2>
          <Button type="button" onClick={() => setEditContactModal(false)}>
            Fechar
          </Button>
        </div>
        <Input
          id="fullName"
          type="text"
          label="Nome completo"
          defaultValue={contact.fullName}
          register={register("fullName")}
          error={
            errors.fullName?.message && <span>{errors.fullName.message}</span>
          }
        />
        <Input
          id="email"
          type="email"
          label="Email"
          defaultValue={contact.email}
          register={register("email")}
          error={errors.email?.message && <span>{errors.email.message}</span>}
        />
        <Input
          id="phone"
          type="tel"
          label="Telefone"
          defaultValue={contact.phoneNumber}
          register={register("phoneNumber")}
          error={
            errors.phoneNumber?.message && (
              <span>{errors.phoneNumber.message}</span>
            )
          }
        />
        <div>
          <Button color="pink" type="button" onClick={() => deleteContact()}>
            Excluir contato
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </StyledModal>
  );
}
