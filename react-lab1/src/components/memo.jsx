import React from "react";


function Memo({name}) {
    console.log("Rendering memo conmponent.")
    return ( <>
     <h3>this is a memo component.</h3>
        {name}
    </> );
}

export default React.memo(Memo);
// export default Memo;