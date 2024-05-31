import { createSignal, For } from "solid-js";

import Counter from "./components/Counter";
import { Dynamic } from "solid-js/web";
import { getRouterConfig } from "./router";

const todoData = [
  { text: "hahah", weight: 400 },
  { text: "i am second", weight: 400 },
  { text: "important", weight: 700 },
];

const App = () => {
  const items = getRouterConfig();
  const [current, setCurrent] = createSignal(Counter);

  return (
    <div>
      <p>welcome to solidjs</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <For each={items}>
          {(item) => (
            <button onClick={() => setCurrent(() => item.component)}>
              {item.url}
            </button>
          )}
        </For>
      </div>
      <div style={{ background: "#ccc" }}>
        <p>Dynamic Part</p>
        <Dynamic component={current()} />
      </div>
    </div>
  );
};

export default App;
