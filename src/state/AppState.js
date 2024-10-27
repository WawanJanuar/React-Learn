import React, { useState } from "react";
import Lat from "./Lat";

function AppState () {
    const [like, setLike] = useState(0);

    function Handleclikc () {
        setLike(like + 1);
    };

    return(
        <>
        <button onClick={Handleclikc}>like {like}</button>
        <br />
        <Lat />
        </>
    )
}

export default AppState;