import { createSignal, Match, Switch } from "solid-js";
import { random } from 'radash'

function SwitchTest() {
  const [num, setNum] = createSignal(0);
  const randomNum = () => {
    setNum(random(-5, 16))
  }

  return (
    <div>
      <div style={{ display: "flex", "align-items": 'center', gap: '10px' }}>
        <p>current value: {num()}</p>
        <button style={{height: '30px'}} onClick={randomNum}>random</button>
      </div>
      <Switch fallback={<p>this value is bigger than 12</p>}>
        <Match when={num() <0}>
            <p>this value is smaller than 0</p>
        </Match>
        <Match when={0 <= num() && num() <= 10}>
          <p>this value is in [0,10]</p>
        </Match>
        <Match when={num() > 10 && num() <= 12}>
          <p>this value is in (10, 12]</p>
        </Match>
      </Switch>
    </div>
  );
}

export default SwitchTest;
