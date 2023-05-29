import { StyledButton } from "./style";

interface ButtonProps {
  children?: string;
  type?: "button" | "reset" | "submit";
  color?: "indigo" | "pink";
  loading?: boolean;
  onClick?: () => void
}

export function Button({ children, type, color, loading, onClick }: ButtonProps) {
  return (
    <StyledButton color={color} type={type} disabled={loading} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
