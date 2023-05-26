import { createStitches } from "@stitches/react";
import { crimsonDark } from "@radix-ui/colors";

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
      ...crimsonDark,
    },
  },
});
