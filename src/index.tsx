/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

import Counter from "./components/Counter";
import { Router, Route } from "@solidjs/router";
import ErrorControl from "./components/ErrorControl";
import Graph from "./components/Graph";
import TodoList from "./components/TodoList";
import Sleep from "./components/Sleep";
import { doRouting } from "./router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <div>
      {
        doRouting()
      }
    </div>
  ),
  root!
);
