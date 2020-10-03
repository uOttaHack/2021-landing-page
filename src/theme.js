import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "71em", "80em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      primary: "#00A878",
      primary_variant: "#00805B",
      primary_on: "#F8FEFC",
      secondary: "#03DAC5",
      secondary_variant: "#018786",
      secondary_on: "#003225",
      background: "#F8FEFC",
      background_on: "#003225",
      error: "#B00020",
      error_variant: "#8E001A",
      error_on: "#F8FEFC",
      actionable: "#1890FF",
      warning: "#FAAD14",
    },
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;
