import {
  type Component,
  ErrorBoundary,
  Setter,
  JSX,
  createSignal,
} from "solid-js";

import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Sleep from "./components/Sleep";
import ErrControl from "./components/ErrorControl";
import { Dynamic } from "solid-js/web";
import { getRouterConfig } from "./router";

const todoData = [
  { text: "hahah", weight: 400 },
  { text: "i am second", weight: 400 },
  { text: "important", weight: 700 },
];

const App = () => {
  let inputEle: HTMLInputElement | undefined;
  const map = new Map<string, () => JSX.Element>();
  getRouterConfig().forEach((item) => {
    map.set(item.url, item.component);
  });
  const [current, setCurrent] = createSignal(Counter);
  const switchComponent = () => {
    const result = map.get(inputEle?.value ?? "")!;
    setCurrent(() => result);
  };

  return (
    <div>
      <p>welcome to solidjs</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <input type="text" ref={inputEle} />
        <button onClick={switchComponent}>switch</button>
      </div>
      <div style={{background: '#ccc'}}>
        <p>Dynamic Part</p>
        <Dynamic component={current()} />
      </div>
    </div>
  );
};

export default App;
