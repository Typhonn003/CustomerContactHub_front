import { styled } from "../../style/stitches.config";

export const StyledInput = styled("fieldset", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  position: "relative",
  border: "none",
  "& span": {
    position: "absolute",
    bottom: "-16px",
    right: "0",
    fontSize: "1.2rem",
    color: "$pink10",
  },
  "& input": {
    boxSizing: "border-box",
    height: "40px",
    width: "100%",
    outline: "none",
    backgroundColor: "$indigo12",
    color: "$indigo1",
    borderRadius: "$1",
    border: "2px solid $indigo12",
    padding: "0 16px",
    "&::placeholder": {
      color: "$indigo7",
    },
    "&:focus": {
      border: "2px solid $indigo12",
    },
  },
});
