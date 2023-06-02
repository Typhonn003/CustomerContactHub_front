import { ReactNode } from "react";
import { StyledMain } from "./style";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
