import { theme } from '@shared/styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const heading = style({
  fontSize: theme.fontSizes.xxLarge,
  color: theme.color.purpleHaze,
  textAlign: 'center',
  margin: `${theme.spacing.small} 0`,
});

export const nav = style({
  fontSize: theme.fontSizes.medium,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.small,
  margin: `${theme.spacing.medium} 0`,
});
