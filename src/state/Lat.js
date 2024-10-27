import React, { useState } from "react";
import Style from "./style.module.css";

function Lat() {
  const [operator, setOperator] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const tambahButton = () => {
    setOperator(operator + 1);
    if (operator >= 8) {
      setIsDone(true);
    }
  };

  const kurangButton = () => {
    setOperator(operator - 1);
    if (operator <= 0) {
      setIsDone(true);
    }
  };

  const resetButton = () => {
    setOperator(0);
    setIsDone(false);
  };

  return (
    <>
      <button onClick={kurangButton} disabled={isDone} className={Style.displayInblok}>-</button>
      <h4 className={Style.displayInblok}>
        {isDone ? "Done" : operator}
      </h4>
      <button onClick={tambahButton} disabled={isDone} className={Style.displayInblok}>+</button>
      <button onClick={resetButton} disabled={!isDone} className={Style.displayInblok}>Reset</button>
    </>
  );
}

export default Lat;