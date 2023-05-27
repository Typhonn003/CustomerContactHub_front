import { StyledButton } from "./style";

interface ButtonProps {
  children?: string;
  type?: "button" | "reset" | "submit";
  color?: "indigo" | "pink";
  loading?: boolean;
}

export function Button({ children, type, color, loading }: ButtonProps) {
  return (
    <StyledButton color={color} type={type} disabled={loading}>
      {children}
    </StyledButton>
  );
}
