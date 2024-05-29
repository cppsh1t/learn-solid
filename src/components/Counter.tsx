import { createEffect, createMemo, createSignal, Show } from "solid-js";

function Counter() {
    const [count, setCount] = createSignal(0)
    const handleClick = () => {
        setCount(count() + 1)
    }
    createEffect(() => {
        if (count() % 30 === 0 && count() !== 0) {
            alert(`30 multiple: ${count()}`)
        }
    })
    const str = createMemo(() => `now click: ${count()} times`)
    return (
        <div>
            <p>{ str() }</p>
            <Show when={count() % 3 === 0} fallback={<p>not three multiple</p>}>
                <p>three multiple</p>
            </Show>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Counter