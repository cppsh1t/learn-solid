import { Index } from "solid-js";
import logo from "../logo.svg";

function TailwindTest() {
  const switchDark = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <div class="w-full min-h-8 mx-auto flex">
        <button
          onClick={switchDark}
          class="p-3 rounded-lg border-none bg-white hover:bg-slate-200 active:bg-slate-400 mx-auto mb-4"
        >
          switch to dark
        </button>
      </div>

      <div class="p-6 max-w-sm mx-auto bg-white dark:bg-slate-600 rounded-xl shadow-lg flex items-center space-x-4 mb-8">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} />
        </div>
        <div>
          <div class="text-xl font-medium text-black dark:text-white">
            Solid
          </div>
          <div class="text-slate-500 dark:text-slate-300">
            A new web framework!
          </div>
        </div>
      </div>

      <div class="w-60 m-h-20 p-4 bg-sky-100 rounded-lg mx-auto ">
        <Index each={[0, 1, 2, 3]}>
          {() => <p class="first:text-red-500 last:text-blue-400">first</p>}
        </Index>
      </div>
    </div>
  );
}

export default TailwindTest;
