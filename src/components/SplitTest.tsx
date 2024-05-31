import { splitProps } from "solid-js";

function Holder(props: { first: string, last: string }) {
  const [firstPart, other] = splitProps(props, ["first"])
  return (
    <div>
      <p>{firstPart.first}&{other.last}</p>
    </div>
  );
}

function SplitTest() {
  return <div>
    <Holder first="dick" last="foo"></Holder>
  </div>;
}

export default SplitTest;
