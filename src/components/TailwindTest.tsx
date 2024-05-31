import logo from "../logo.svg";

function TailwindTest() {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div class="shrink-0">
        <img class="h-12 w-12" src={logo} />
      </div>
      <div>
        <div class="text-xl font-medium text-black">Solid</div>
        <div class="text-slate-500">A new web framework!</div>
      </div>
    </div>
  );
}

export default TailwindTest;
