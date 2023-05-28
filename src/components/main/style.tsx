import { styled } from "../../style/stitches.config";

export const StyledMain = styled("main", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "& h2": {
    textAlign: "center",
    color: "$indigo12",
    fontSize: "1.8rem",
    cursor: "default",
  },
  "& form": {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "$indigo2",
    padding: "34px 18px",
    borderRadius: "$2",
    marginBottom: "2rem",
    border: "1px solid $indigo5",
  },
  "& p": {
    textAlign: "center",
    fontSize: "1.6rem",
    color: "$indigo12",
  },
  "& a": {
    color: "$pink10",
    "&:hover": {
      color: "$pink8",
    },
  },
});
