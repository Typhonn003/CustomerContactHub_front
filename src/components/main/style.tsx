import { keyframes, styled } from "../../style/stitches.config";

const neonUpTitle = keyframes({
  "0%": {
    textShadow: "0 0 0 rgba(255, 105, 180, 0.8)",
  },
  "50%": {
    textShadow: "0 0 10px rgba(255, 20, 147, 0.9)",
  },
  "100%": {
    textShadow: "0 0 0 rgba(255, 105, 180, 0.8)",
  },
});

export const StyledMain = styled("main", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "& h1": {
    textAlign: "center",
    color: "$pink10",
    marginBottom: "2rem",
    cursor: "default",
    animation: `${neonUpTitle} 2s infinite`,
  },
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
