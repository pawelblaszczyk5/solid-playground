import { RouteDefinition, useRoutes } from "solid-app-router";
import { Component, lazy } from "solid-js";

import { heading, nav } from "./App.css";
import { Link } from "@shared/components/Link/Link";

export const App: Component = () => {
  const routes: Array<RouteDefinition> = [
    {
      path: "/",
      component: lazy(() => import("./modules/home/Home")),
    },
    {
      path: "/testA",
      component: lazy(() => import("./modules/testA/TestA")),
    },
    {
      path: "/testB",
      component: lazy(() => import("./modules/testB/TestB")),
    },
  ];
  const Routes = useRoutes(routes);

  return (
    <>
      <header>
        <h1 class={heading}>Hello world</h1>
      </header>
      <nav class={nav}>
        <Link href="/">Home</Link>
        <Link href="/testA">Test A</Link>
        <Link href="/testB">Test B</Link>
      </nav>
      <main>
        <Routes />
      </main>
    </>
  );
};
