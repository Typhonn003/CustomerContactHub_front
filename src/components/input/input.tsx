import { ReactNode } from "react";
import { StyledInput } from "./style";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: object;
  defaultValue?: string;
  loading?: boolean;
  error?: ReactNode;
}

export function Input({
  id,
  label,
  type,
  placeholder,
  register,
  defaultValue,
  loading,
  error,
}: InputProps) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        {...register}
        defaultValue={defaultValue}
        disabled={loading}
      />
      {error}
    </StyledInput>
  );
}
