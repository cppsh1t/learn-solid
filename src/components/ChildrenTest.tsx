import { createSignal, children, createEffect, Accessor, JSX } from "solid-js";

function Holder(props: { color: string; children: any }) {
  const childrenGetter = children(() => props.children) as Accessor<
    JSX.Element[]
  >;
  createEffect(() =>
    childrenGetter().forEach((_item) => {
      const item = _item as unknown as { style: { color: string } };
      item.style.color = props.color;
    })
  );
  return <div>{childrenGetter()}</div>;
}

function ChildrenTest() {
  const [color, setColor] = createSignal("red");
  const callback = () => {
    setColor(color() === "red" ? "blue" : "red");
  };

  return (
    <div>
      <Holder color={color()}>
        <div>a test</div>
        <div>b test</div>
      </Holder>
      <button onClick={callback}>change color</button>
    </div>
  );
}

export default ChildrenTest;
