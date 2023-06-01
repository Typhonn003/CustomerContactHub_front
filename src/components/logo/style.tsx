import { keyframes, styled } from "../../style/stitches.config";

const glitchTitle = keyframes({
  "0%": {
    textShadow: "2px 2px 0px #e30c9f, -2px -2px 0px #164b9b",
  },
  "100%": {
    textShadow: "2px 2px 0px #164b9b, -2px -2px 0px #e30c9f",
  },
});

export const StyledLogo = styled("h1", {
  textAlign: "center",
  color: "White",
  marginBottom: "20px",
  cursor: "default",
  animation: `${glitchTitle} .2s infinite`,
  variants: {
    fontSize: {
      small: {
        fontSize: "2.5rem",
      },
      large: {
        fontSize: "4rem",
      },
    },
  },
  defaultVariants: {
    fontSize: "small",
  },
});
