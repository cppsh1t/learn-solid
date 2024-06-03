import { createSignal, For } from "solid-js";

import { Dynamic } from "solid-js/web";
import { getRouterConfig } from "./router";
import TailwindTest from "./components/TailwindTest";
import { random } from "radash";

const App = () => {
  const items = getRouterConfig();
  items.splice(0, 1)
  const [current, setCurrent] = createSignal(items[random(0, items.length - 1)].component);

  const getLast = (str: string) => {
    const arr = str.split('/')
    return arr[arr.length - 1]
  }

  return (
    <div>
      <p>welcome to solidjs</p>
      <div style={{ display: "flex", gap: "10px", "flex-wrap": 'wrap' }}>
        <For each={items}>
          {(item) => (
            <button class="h-10 px-3 bg-sky-200 hover:bg-sky-300 active:bg-sky-500 border-none rounded-lg shadow-lg hover:shadow-xl" onClick={() => setCurrent(() => item.component)}>
              {getLast(item.url)}
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
