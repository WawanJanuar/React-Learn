import React, { useState } from "react";
import Style from "./style.module.css"


function Latihan() {
    const [operator, setOperator] = useState(0);

    const tambahButton = () => {
        setOperator(operator + 1);
    }

    const kurangButton = () => {
        setOperator(operator - 1);
    }

    const resetButton = () => {
        setOperator(0);
    }

    return (
        <>
        <button onClick={kurangButton} className={Style.displayInblok}>-</button>
        <h4 className={Style.displayInblok}>{operator}</h4>
        <button onClick={tambahButton} className={Style.displayInblok}>+</button>
        <button onClick={resetButton} className={Style.displayInblok}>Reset</button>
        </>
    )
}

export default Latihan;