import CompB from "./CompB";
import { FirstName } from "../../App";
import { useContext } from "react";


function CompA() {

    const d = useContext(FirstName);

    return ( 
        <>
            <span>======{d}============</span>
            <h3>Component A</h3>
            <CompB />
        </>
     );
}

export default CompA;