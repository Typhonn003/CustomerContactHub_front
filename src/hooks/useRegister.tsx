import { useContext } from "react";
import { RegisterContext } from "../contexts/RegisterProvider";

export function useRegister() {
  const registerContext = useContext(RegisterContext);
  return registerContext;
}
