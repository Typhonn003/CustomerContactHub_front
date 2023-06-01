import { styled } from "../../style/stitches.config";

export const ContactCard = styled("li", {
  listStyle: "none",
  backgroundColor: "$indigo3",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  borderRadius: "$2",
  border: "1px solid $indigo5",
  "& p": {
    color: "$indigo11",
  },
  "&:hover": {
    border: "1px solid $indigo7",
  },
});
