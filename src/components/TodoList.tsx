import { createEffect, createMemo, createSignal, For, Show } from "solid-js";
import { random } from 'radash'

function Item(props: { index: number; text: string; weight: number; onDel: (index: number) => void }) {
  return (
    <div>
    <div style={{ "font-weight": props.weight, "font-size": "25px" }}>
      {props.index}: {props.text}
    </div>
    <button onClick={() => props.onDel(props.index)}>delete</button>
    </div>
  );
}

function TodoList(props: { data: { text: string; weight: number }[] }) {
  let inputElement: HTMLInputElement | undefined
  const [todoData, setTodoData] = createSignal(props.data)
  const onClick = (e: Event) => {
    setTodoData((origin) => [...origin, { text: inputElement!.value, weight: random(400, 700) }])
    inputElement!.value = ''
  }
  const handleDel = (index: number) => {
    const oldData = [...todoData()]
    oldData.splice(index - 1, 1)
    setTodoData(oldData)
  }

  return (
    <div>
        <div>
            <input type="text" ref={inputElement} style={{width: '300px'}} /> 
            <button onClick={onClick}>add</button>
        </div>
      <For each={todoData()}>
        {(item, index) => (
          <Item
            index={index() + 1}
            {...item}
            onDel={handleDel}
          ></Item>
        )}
      </For>
    </div>
  );
}

export default TodoList;
