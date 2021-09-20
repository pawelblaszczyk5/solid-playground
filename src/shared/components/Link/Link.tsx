import type { Component } from "solid-js";

import { Link as RouterLink } from "solid-app-router";
import { link } from "./Link.css";

interface LinkProps {
  href: string;
}

export const Link: Component<LinkProps> = (props) => {
  return (
    <RouterLink class={link} href={props.href}>
      {props.children ?? "Link"}
    </RouterLink>
  );
};
