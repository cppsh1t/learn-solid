import { type Component, ErrorBoundary, Setter } from "solid-js";

import styles from "./App.module.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Sleep from "./components/Sleep";
import ErrControl from "./components/ErrorControl"

const todoData = [
  { text: "hahah", weight: 400 },
  { text: "i am second", weight: 400 },
  { text: "important", weight: 700 },
];

const App: Component = () => {
  return (
    <div class={styles.app}>
      {/* <Graph></Graph> */}
      {/* <Counter></Counter> */}
      <ErrControl></ErrControl>
    </div>
  );
};

export default App;
