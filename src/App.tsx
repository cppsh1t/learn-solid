import { type Component, ErrorBoundary } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Counter from "./components/Counter";
import Test from "./components/Test";
import TodoList from "./components/TodoList";
import { Dynamic } from "solid-js/web";

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
    <div class={styles.App}>
      {/* <Greet name='shit'></Greet> */}
      <TodoList data={todoData}></TodoList>
    </div>
  );
};

export default App;
