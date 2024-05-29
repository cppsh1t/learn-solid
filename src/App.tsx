import { type Component, ErrorBoundary, Setter } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Counter from "./components/Counter";
import Test from "./components/Test";
import TodoList from "./components/TodoList";
import Sleep from "./components/Sleep";
import { Dynamic } from "solid-js/web";
import { createEffect, createMemo, createSignal, For, Show, type Accessor } from "solid-js";
import { createStore } from "solid-js/store";
import Graph from "./components/Graph";

const Greet = (props: { name: string }) => {
  return <div>Hello {props.name}</div>;
};

const Broken = () => {
  throw new Error("What the fuck");
  return <div>never</div>;
};

const todoData = [
  { text: "hahah", weight: 400 },
  { text: "i am second", weight: 400 },
  { text: "important", weight: 700 },
];

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Graph></Graph>
    </div>
  );
};

export default App;
