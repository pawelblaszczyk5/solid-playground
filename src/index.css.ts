import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    violet: "#7954A1",
    charcoal: "#323E42",
    purpleHaze: "#EFDCF9",
    purple: "#C55FFC",
  },
  spacing: {
    xxSmall: "0.25rem",
    xSmall: "0.5em",
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    xLarge: "2rem",
    xxLarge: "4rem",
  },
  fontSizes: {
    xSmall: "0.875rem",
    small: "0.9375rem",
    medium: "1.125rem",
    large: "1.5rem",
    xLarge: "1.75rem",
    xxLarge: "2rem",
  },
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body", {
  backgroundColor: theme.color.charcoal,
  padding: theme.spacing.medium,
});
