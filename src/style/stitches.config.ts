import { createStitches } from "@stitches/react";
import { indigoDark, pinkDark } from "@radix-ui/colors";

export const {
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...indigoDark,
      ...pinkDark,
    },
    radii: {
      1: "4px",
      2: "6px",
    },
  },
});
