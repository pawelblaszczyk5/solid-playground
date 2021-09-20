import { theme } from "@shared/styles/Theme.css";
import { style } from "@vanilla-extract/css";

export const buttonClass = style({
  display: "flex",
  backgroundColor: theme.color.purpleHaze,
  color: theme.color.charcoal,
  border: "none",
  fontSize: theme.fontSizes.medium,
  padding: `${theme.spacing.xSmall} ${theme.spacing.medium}`,
  borderRadius: "0.5rem",
  ":active": {
    background: theme.color.violet,
  },
});
