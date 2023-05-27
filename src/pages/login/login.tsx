import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks";
import { Button, Input, Main } from "../../components";
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

  const { login, loading } = useAuth();

  return (
    <Main>
      <h1>HubLinkup</h1>

      <form onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
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
        <Button color="pink" type="submit" loading={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <p>
          Ainda não tem conta? <Link to={"/register"}>Clique aqui</Link>
        </p>
      </form>
    </Main>
  );
}
