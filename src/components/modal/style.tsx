import { styled } from "../../style/stitches.config";

export const StyledModal = styled("div", {
  backgroundColor: "#00000080",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
});
