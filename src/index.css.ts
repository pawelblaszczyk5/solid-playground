import { theme } from '@shared/styles/Theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('*:focus', {
  outlineColor: theme.color.violet,
  outlineStyle: 'dashed',
  outlineWidth: '2px',
});

globalStyle('body', {
  backgroundColor: theme.color.charcoal,
  padding: theme.spacing.medium,
});
