import CounterDisplay from "./CounterDisplay";
import CounterSetter from "./CounterSetter";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(3);

  return (
    <div>
      <CounterDisplay counterValue={counter} />
      <CounterSetter counterValue={counter} clickHandler={setCounter} />
    </div>
  );
};

export default Counter;
