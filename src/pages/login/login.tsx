import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks";
import { Button, Input } from "../../components";
import { StyledMain } from "./style";
import { Link } from "react-router-dom";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { login } = useAuth();

  return (
    <StyledMain>
      <h1>HubLinkup</h1>

      <form onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          register={register("email")}
          error={errors.email?.message && <span>{errors.email.message}</span>}
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register("password")}
          error={errors.password?.message && <span>{errors.password.message}</span>}
        />
        <Button color="pink" type="submit">Entrar</Button>
        <p>
          Ainda não tem conta? <Link to={"/register"}>Clique aqui</Link>
        </p>
      </form>
    </StyledMain>
  );
}
