import { styled } from "../../style/stitches.config";

export const StyledButton = styled("button", {
  cursor: "pointer",
  color: "$crimson12",
  height: "40px",
  minWidth: "40px",
  padding: "0 22px",
  borderRadius: "6px",
  border: "none",
  transition: ".5s",
  variants: {
    color: {
      indigo: {
        backgroundColor: "$indigo5",
        "&:hover": {
          backgroundColor: "$indigo6",
        },
        "&:focus": {
          backgroundColor: "$indigo7",
        },
      },
      pink: {
        backgroundColor: "$pink9",
        "&:hover": {
          backgroundColor: "$pink8",
        },
        "&:focus": {
          backgroundColor: "$pink7",
        },
      },
    },
  },
  defaultVariants: {
    color: "indigo",
  },
});
