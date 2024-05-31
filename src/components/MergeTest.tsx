import { mergeProps, For } from "solid-js";

function Holder(props: { first: string }) {
  const merged = mergeProps({last: 'foo'}, props)
  return (
    <div>
      <p>{merged.first}&{merged.last}</p>
    </div>
  );
}

function MergeTest() {
  return <div>
    <Holder first="dick"></Holder>
  </div>;
}

export default MergeTest;
