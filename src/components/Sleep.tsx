import { sleep } from "radash";
import { Suspense, createResource } from "solid-js";

/*
using: Suspense, resource
*/

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