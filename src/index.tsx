import { render } from "solid-js/web";
import "modern-normalize";
import { App } from "./App";
import { Router } from "solid-app-router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")!
);
