import React from "react";
import { useState } from "react";


function UpdatedComponent(OriginalComponent) {

    function NewComponent() {

        const [count, setcount] = useState(0);

        const increantCounter = ()=>{
            setcount(count + 1)
        }

        return ( 
            <>
                <OriginalComponent name='Darshan' count={count} increantCounter={increantCounter} />
            </>
         );
    }

    return NewComponent;
}

export default UpdatedComponent;