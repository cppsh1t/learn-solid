import { createSignal, For } from "solid-js";

import { Dynamic } from "solid-js/web";
import { getRouterConfig } from "./router";
import TailwindTest from "./components/TailwindTest";

const App = () => {
  const items = getRouterConfig();
  items.splice(0, 1)
  const [current, setCurrent] = createSignal(TailwindTest);

  return (
    <div>
      <p>welcome to solidjs</p>
      <div style={{ display: "flex", gap: "10px", "flex-wrap": 'wrap' }}>
        <For each={items}>
          {(item) => (
            <button class="h-10 p-1 bg-sky-200 border-none rounded-xl shadow-lg focus:bg-sky-300" onClick={() => setCurrent(() => item.component)}>
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
