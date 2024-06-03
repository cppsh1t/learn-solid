import { Accessor, createContext, createSignal, useContext } from "solid-js";
import { Props } from "../types";

type CounterContextType = [Accessor<number>, {
  increment(): void;
  decrement(): void;
}];

const CounterContext = createContext<CounterContextType>();

export function CounterProvider(props: { count?: number} & Props) {
  const [count, setCount] = createSignal(props.count || 0);
  const store = [
    count,
    {
      increment() {
        setCount((c) => c + 1);
      },
      decrement() {
        setCount((c) => c - 1);
      },
    },
  ] as CounterContextType;
  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  )
}

//这个本来是应该导出，在别的文件中使用的，我省略了
const userCounter = () => useContext(CounterContext)

function ContextTest() {
  const [count, {increment, decrement}] = userCounter()!
  return <div>
    <div>{count()}</div>
    <button class="py-0.5 px-3" onClick={increment}>+</button>
    <button class="py-0.5 px-3" onClick={decrement}>-</button>
  </div>
}

export default ContextTest;
