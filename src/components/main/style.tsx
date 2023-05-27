import { keyframes, styled } from "../../style/stitches.config";

const glitchTitle = keyframes({
  "0%": {
    textShadow: "2px 2px 0px #e30c9f, -2px -2px 0px #164b9b",
  },
  "100%": {
    textShadow: "2px 2px 0px #164b9b, -2px -2px 0px #e30c9f",
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
    color: "White",
    marginBottom: "2rem",
    cursor: "default",
    animation: `${glitchTitle} .1s infinite`,
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
