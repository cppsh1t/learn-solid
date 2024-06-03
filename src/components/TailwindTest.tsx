import { Index } from "solid-js";
import logo from "../logo.svg";

function TailwindTest() {
  return (
    <div>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-8">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Solid</div>
          <div class="text-slate-500">A new web framework!</div>
        </div>
      </div>

      <div class="w-60 m-h-20 p-4 bg-sky-100 rounded-lg mx-auto ">
        <Index each={[0,1,2,3]}>
          {() => <p class="first:text-red-500 last:text-blue-400">first</p>}
        </Index>
      </div>
    </div>

  );
}

export default TailwindTest;
