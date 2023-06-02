import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "..";
import { useProfile } from "../../hooks";
import { StyledModal } from "./style";
import {
  FullUserData,
  UserData,
  userSchema,
} from "../../pages/dashboard/validators";
import { useForm } from "react-hook-form";

interface EditProfileProps {
  customer: FullUserData;
}

export function EditProfileModal({ customer }: EditProfileProps) {
  const { setEditProfileModal, profileEdit, deleteProfile } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(profileEdit)}>
        <div>
          <h2>Editar perfil</h2>
          <Button type="button" onClick={() => setEditProfileModal(false)}>
            Fechar
          </Button>
        </div>
        <Input
          id="fullName"
          type="text"
          label="Nome completo"
          placeholder="Digite seu nome"
          defaultValue={customer.fullName}
          register={register("fullName")}
          error={
            errors.fullName?.message && <span>{errors.fullName.message}</span>
          }
        />
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          defaultValue={customer.email}
          register={register("email")}
          error={errors.email?.message && <span>{errors.email.message}</span>}
        />
        <Input
          id="phone"
          type="tel"
          label="Telefone"
          placeholder="Digite seu telefone"
          defaultValue={customer.phoneNumber}
          register={register("phoneNumber")}
          error={
            errors.phoneNumber?.message && (
              <span>{errors.phoneNumber.message}</span>
            )
          }
        />
        <div>
          <Button color="pink" type="button" onClick={() => deleteProfile()}>
            Excluir perfil
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </StyledModal>
  );
}
