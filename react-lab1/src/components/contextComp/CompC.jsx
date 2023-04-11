import { Context, FirstName } from "../../App";

function CompC() {
    return ( 
        <>
            <h3>Component C</h3>

            <FirstName.Consumer>
                {
                    (fname) => {
                        return <h1>My name is {fname}</h1>
                    }
                }
            </FirstName.Consumer>




            {/* <Context.Consumer>
                {
                    user => {
                        return <div>User Context value {user}</div>
                    }
                }
            </Context.Consumer> */}
        </>
     );
}

export default CompC;