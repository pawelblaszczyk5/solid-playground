import type { Component } from 'solid-js';

import { Link as RouterLink } from 'solid-app-router';
import { linkClass } from './Link.css';

interface LinkProps {
  href: string;
}

export const Link: Component<LinkProps> = (props) => (
  <RouterLink class={linkClass} href={props.href}>
    {props.children ?? 'Link'}
  </RouterLink>
);
