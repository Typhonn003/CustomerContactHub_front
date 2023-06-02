import { useContext } from "react";
import { ContactContext } from "../contexts/ContactProvider";

export function useContact() {
  const contactContext = useContext(ContactContext);
  return contactContext;
}
