import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../../hooks";
import { Button, Input, Logo, Main } from "../../components";
import { Link } from "react-router-dom";
import { RegisterData, registerSchema } from "../../validations/register";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { userRegister, loading } = useRegister();

  return (
    <Main>
      <Logo size="large">HubLinkup</Logo>

      <form onSubmit={handleSubmit(userRegister)}>
        <h2>Cadastro</h2>
        <Input
          id="fullName"
          type="text"
          label="Nome completo"
          placeholder="Ex: Diego de Lima"
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
          placeholder="Ex: diegolima@mail.com"
          register={register("email")}
          loading={loading}
          error={errors.email?.message && <span>{errors.email.message}</span>}
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register("password")}
          loading={loading}
          error={
            errors.password?.message && <span>{errors.password.message}</span>
          }
        />
        <Input
          id="phone"
          type="tel"
          label="Telefone"
          placeholder="(12) 91234-5678"
          register={register("phoneNumber")}
          loading={loading}
          error={
            errors.phoneNumber?.message && (
              <span>{errors.phoneNumber.message}</span>
            )
          }
        />
        <Button color="pink" type="submit" loading={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
        <p>
          Já tem uma conta? <Link to={"/login"}>Clique aqui</Link>
        </p>
      </form>
    </Main>
  );
}
