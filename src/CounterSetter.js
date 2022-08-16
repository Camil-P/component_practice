const CounterSetter = ({ clickHandler, counterValue }) => {
  return (
    <div>
      <button onClick={() => clickHandler(++counterValue)}>+</button>
      <button onClick={() => clickHandler(--counterValue)}>-</button>
    </div>
  );
};

export default CounterSetter;
