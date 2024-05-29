import { createSignal, onCleanup } from "solid-js";

function Test() {
    const [count, setCount] = createSignal(0)
    const timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));

  return <div>{count()}</div>;
};

export default Test