import { style } from "@vanilla-extract/css";
import { theme } from "./index.css";

export const header = style({
  fontSize: theme.fontSizes.xxLarge,
  color: theme.color.purpleHaze,
  textAlign: "center",
  margin: `${theme.spacing.small} 0`,
});
