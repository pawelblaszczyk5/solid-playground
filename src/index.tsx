import { render } from "solid-js/web";
import { App } from "./App";
import { Router } from "solid-app-router";

import "./index.css";
import "modern-normalize";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")!
);
