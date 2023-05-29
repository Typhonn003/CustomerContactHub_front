import { styled } from "../../style/stitches.config";

export const StyledHeader = styled("header", {
  width: "100%",
  minHeight: "60px",
  borderBottom: "1px solid $indigo5",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  "& div": {
    width: "90%",
    maxWidth: "900px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& h1": {
    marginBottom: 0,
  },
});

export const StyledMain = styled("main", {
  boxSizing: "border-box",
  padding: "2rem",
  width: "90%",
  maxWidth: "900px",
  margin: "0 auto",
  marginBottom: 100,
  borderWidth: "0 1px 1px 1px",
  borderStyle: "solid",
  borderColor: "$indigo5",
  borderRadius: "0 0 $2 $2",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const UserInfo = styled("div", {
  width: "100%",
  backgroundColor: "$indigo2",
  borderRadius: "$1",
  border: "1px solid $indigo5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1.6rem",
  padding: "2rem",
  "& div": {
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
  "@media1": {
    flexDirection: "row",
    "& div:first-child": {
      flexDirection: "column",
    },
    "& div": {
      flexDirection: "row",
    },
  },
});

export const NoContacts = styled("div", {
  width: "100%",
  backgroundColor: "$indigo2",
  borderRadius: "$1",
  border: "1px solid $indigo5",
  padding: "2rem",
  textAlign: "center",
});

export const ContactsList = styled("ul", {
  padding: "2rem",
  width: "100%",
  backgroundColor: "$indigo2",
  borderRadius: "$1",
  border: "1px solid $indigo5",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gridAutoRows: "min(100px, auto)",
  gap: "1.6rem",
  minWidth: "50vw",
  maxHeight: "60vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "1.2rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$indigo7",
    borderRadius: "0 $1 $1 0",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "$indigo4",
  },
});

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
