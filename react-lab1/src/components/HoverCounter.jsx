import { useState } from "react";
import UpdatedComponent from "./WithCounter";


function HovorCounter({name, increantCounter, count}) {

    return ( 
        <>
            <button onMouseOver={increantCounter} >{name} Hovored {count} time</button>
        </>
     );
}

export default UpdatedComponent(HovorCounter);