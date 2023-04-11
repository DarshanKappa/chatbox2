import { useState } from "react";
import UpdatedComponent from "./WithCounter";


function ClickCounter({name, increantCounter, count}) {

    return ( 
        <>
            <button onClick={increantCounter}>{name} Clicked {count} time</button>
        </>
     );
}

export default UpdatedComponent(ClickCounter);