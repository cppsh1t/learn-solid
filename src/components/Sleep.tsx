import { sleep } from "radash";
import { Suspense, lazy, createResource } from "solid-js";

function Sleep() {

const [delayedPart] = createResource(async() => {
  await sleep(2000)
  return <p>I am wake up now</p>
});

  return (
    <div>
      <div>{delayedPart.loading && 'loading'}</div>
      <Suspense fallback={<p>I am sleeping...</p>}>
        {
          delayedPart()
        }
      </Suspense>
    </div>
  );
}

export default Sleep