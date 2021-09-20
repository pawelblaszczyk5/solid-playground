import type { Component } from "solid-js";

import { buttonClass } from "./Button.css";

interface ButtonProps {
  onClick: (e: MouseEvent) => unknown;
}

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} class={buttonClass}>
      {props.children ?? "Click me"}
    </button>
  );
};
