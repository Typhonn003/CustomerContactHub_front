import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  ":root": {
    fontSize: "60%",
  },
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },
  "body, html": {
    width: "100vw",
    height: "100vh",
  },
  body: {
    backgroundColor: "$indigo1",
    color: "$indigo12",
    overflowX: "hidden",
  },
  "body, input, button, textarea": {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.6rem",
  },
  "h1, h2, h3, h4, h5, h6, strong": {
    fontWeight: 700,
  },
  "@media (min-width: 700px)": {
    ":root": {
      fontSize: "62.5%",
    },
  },
});
