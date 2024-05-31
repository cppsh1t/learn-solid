import { sleep } from "radash"
import { Show, createSignal, onMount } from "solid-js"

function LifeTest() {
    const [text, setText] = createSignal('')

    onMount(async () => {
        await sleep(2000)
        setText('loading over')
    })
    return <div>
        <Show when={text() !== ''} fallback={<p>loading...</p>}>
            <p>{text()}</p>
        </Show>
    </div>
}

export default LifeTest