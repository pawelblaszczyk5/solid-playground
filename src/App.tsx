import { Link, RouteDefinition, useRoutes } from "solid-app-router";
import { Component, lazy } from "solid-js";

import { header } from "./App.css";

export const App: Component = () => {
  const routes: Array<RouteDefinition> = [
    {
      path: "/",
      component: lazy(() => import("./domain/home/Home")),
    },
    {
      path: "/testA",
      component: lazy(() => import("./domain/testA/TestA")),
    },
    {
      path: "/testB",
      component: lazy(() => import("./domain/testB/TestB")),
    },
  ];
  const Routes = useRoutes(routes);

  return (
    <>
      <h1 class={header}>Hello world</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/testA">Test A</Link>
        <Link href="/testB">Test B</Link>
      </div>
      <Routes />
    </>
  );
};
