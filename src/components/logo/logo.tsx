import { StyledLogo } from "./style";

interface LogoProps {
  children: string;
  size?: "small" | "large";
}

export function Logo({ children, size }: LogoProps) {
  return <StyledLogo fontSize={size}>{children}</StyledLogo>;
}
