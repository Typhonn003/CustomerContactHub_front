import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "..";
import { useContact } from "../../hooks";
import { StyledModal } from "./style";
import { ContactData, contactSchema } from "./validators";
import { useForm } from "react-hook-form";

export function AddContactModal() {
  const { setAddNewContactModal, contactRegister, loading } = useContact();

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
      <form onSubmit={handleSubmit(contactRegister)}>
        <div>
          <h2>Adicionar contato</h2>
          <Button type="button" onClick={() => setAddNewContactModal(false)}>
            Fechar
          </Button>
        </div>
        <Input
          id="fullName"
          type="text"
          label="Nome completo"
          placeholder="Nome do contato"
          register={register("fullName")}
          loading={loading}
          error={
            errors.fullName?.message && <span>{errors.fullName.message}</span>
          }
        />
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Email do contato"
          register={register("email")}
          loading={loading}
          error={errors.email?.message && <span>{errors.email.message}</span>}
        />
        <Input
          id="phone"
          type="tel"
          label="Telefone"
          placeholder="Telefone do contato"
          register={register("phoneNumber")}
          loading={loading}
          error={
            errors.phoneNumber?.message && (
              <span>{errors.phoneNumber.message}</span>
            )
          }
        />
        <Button type="submit" color="pink">
          Adicionar
        </Button>
      </form>
    </StyledModal>
  );
}
