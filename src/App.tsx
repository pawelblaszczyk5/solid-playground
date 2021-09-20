import type { Component } from "solid-js";

import "modern-normalize";
import { header } from "./App.css";

export const App: Component = () => {
  return <h1 class={header}>Hello world</h1>;
};
