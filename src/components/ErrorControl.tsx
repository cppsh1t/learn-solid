import { ErrorBoundary } from "solid-js";

/*
using: ErrorBoundary
*/

const Broken = () => {
  throw new Error("What the fuck");
  return <div>never</div>;
};

function ErrorControl() {
  return (
    <div>
      <ErrorBoundary fallback={(err: Error) => <p>error msg: {err.message}</p>}>
        <Broken></Broken>
      </ErrorBoundary>
    </div>
  );
}

export default ErrorControl;
