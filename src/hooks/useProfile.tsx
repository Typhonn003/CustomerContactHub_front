import { useContext } from "react";
import { ProfileContext } from "../contexts/Profileprovider";

export function useProfile() {
  const profileContext = useContext(ProfileContext);
  return profileContext;
}
