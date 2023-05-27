import { StyledButton } from "./style";

interface ButtonProps {
  children?: string;
  type?: "button" | "reset" | "submit";
  color?: "indigo" | "pink";
}

export function Button({ children, type, color }: ButtonProps) {
  return (
    <StyledButton color={color} type={type}>
      {children}
    </StyledButton>
  );
}
