import React, { useState } from "react";
import Latihan from "./Latihan";

function AppState () {
    const [like, setLike] = useState(0);

    function Handleclikc () {
        setLike(like + 1);
    };

    return(
        <>
        <button onClick={Handleclikc}>like {like}</button>
        <br />
        <Latihan />
        </>
    )
}

export default AppState;