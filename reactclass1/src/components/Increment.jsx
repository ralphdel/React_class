import { useState } from "react";

const Increment = () => {
  const [value, setValue] = useState(40);
  const add = () => {
    return setValue(value + 1);
  };
  const sub = () => {
    if (value > 0) {
      return setValue(value - 1);
    } else setValue(0);
  };
  //<h1>{value}</h1>

  return (
    <>
      <input type="value" value={value} readOnly={true} />
      <h1>{value}</h1>

      <button onClick={add}>increase</button>
      <button onClick={sub}>decrease</button>
    </>
  );
};

export default Increment;
