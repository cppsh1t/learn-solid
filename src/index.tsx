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

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/learn-solid" component={() => <p>welcome to solid</p>} />
      <Route path="/learn-solid/counter" component={Counter} />
      <Route path="/learn-solid/error" component={ErrorControl} />
      <Route path="/learn-solid/graph" component={Graph} />
      <Route path="/learn-solid/todo" component={() => TodoList({data: []})} />
      <Route path="/learn-solid/sleep" component={Sleep} />
    </Router>
  ),
  root!
);
