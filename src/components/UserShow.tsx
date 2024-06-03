import { For } from "solid-js";
import { createStore, produce } from "solid-js/store";

type User = { name: string; state: boolean };

const btnStyle =
  "py-1 px-3 rounded-md border-none shadow-md bg-sky-100 hover:bg-sky-200 active:bg-sky-300";

function InputBox(props: { submit: (user: User) => void }) {
  let nameInputEle: HTMLInputElement | undefined;
  return (
    <div class="flex gap-2 px-2">
      <div>增加用户</div>
      <input type="text" ref={nameInputEle}></input>
      <button
        class={btnStyle}
        onClick={() => {
          props.submit({
            name: nameInputEle!.value,
            state: false,
          });
          nameInputEle!.value = "";
        }}
      >
        确定
      </button>
    </div>
  );
}

function UserShow() {
  let switchInputEle: HTMLInputElement | undefined;
  const [store, setStore] = createStore<{ users: User[] }>({ users: [] });

  const oldHandleAdd = (user: User) => {
    setStore("users", (users) => [...users, user])
  }

  const oldHandleLogin = () => {
    const name = switchInputEle!.value
    setStore(
      "users",
      (user) => user.name === name,
      "state",
      (state) => !state
    );
    switchInputEle!.value = ""
  }

  const handleAdd = (user: User) => {
    setStore("users", produce(users => {users.push(user)}))
  }

  const handleLogin = () => {
    const name = switchInputEle!.value
    setStore(
      "users",
      user => user.name === name,
      produce(user => user.state = !user.state)
    )
  }

  return (
    <div class="pb-3 px-3">
      <InputBox submit={handleAdd}></InputBox>
      <div class="flex gap-2 px-2 mt-2">
        查询用户并切换状态
        <input type="text" ref={switchInputEle} />
        <button class={btnStyle} onClick={handleLogin}>
          确定
        </button>
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <For each={store.users}>
          {(user) => (
            <div>
              用户名: {user.name} 状态: {user.state ? "已登录" : "未登录"}
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default UserShow;
