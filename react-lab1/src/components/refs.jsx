import React from "react";
import { useEffect, useRef } from "react";


const RefsComp = React.forwardRef((props, ref) => {
    // const ref = useRef()
    useEffect(()=>{
        console.log(ref.current)
        // console.log(ref)
        // ref.current.focus()
        // ref.current.style = {color : 'blue'}
        // ref.current.style.color = 'white'
        
    })
    return ( 
        <>
            <input ref={ref} type="text" placeholder="Enter" />
            <button onClick={()=>{ref.current.style.color = 'blue'; console.log(ref.current)}}>Child Button</button>
        </>

     );
})

export default RefsComp;