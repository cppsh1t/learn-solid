import { sleep } from "radash";
import { onMount } from "solid-js";

function Child(props: {ref: any}) {
    return <div>
        <p ref={props.ref}> i am child</p>
    </div>
}

function Nest() {
    let childRef: HTMLElement | undefined;

    onMount(async() => {
        await sleep(500)
        alert(childRef)
    })

    return <div>
        <Child ref={childRef}></Child>
    </div>
}

export default Nest