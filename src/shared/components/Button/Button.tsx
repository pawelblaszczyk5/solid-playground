import type { Component } from "solid-js";

import { button } from "./Button.css";

interface ButtonProps {
  onClick: (e: MouseEvent) => unknown;
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} class={button}>
      {props.children ?? "Click me"}
    </button>
  );
};
