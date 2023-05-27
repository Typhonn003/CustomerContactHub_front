import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../../hooks";
import { Button, Input, Main } from "../../components";
import { Link } from "react-router-dom";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { userRegister, loading } = useRegister();

  return (
    <Main>
      <h1>HubLinkup</h1>

      <form onSubmit={handleSubmit(userRegister)}>
        <h2>Cadastro</h2>
        <Input
          id="fullName"
          type="text"
          label="Nome completo"
          placeholder="Digite seu nome"
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
          placeholder="Digite seu email"
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
          placeholder="Digite seu telefone"
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
