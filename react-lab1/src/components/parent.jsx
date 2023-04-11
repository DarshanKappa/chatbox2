import { useRef } from "react";
import { useEffect, useState } from "react";
import Memo from "./memo";
import RefsComp from "./refs";
import ClickCounter from "./ClickCounter";
import HovorCounter from "./HoverCounter";

function Parent({}) {

    const [value, setValue] = useState(0);
    const [name, setName] = useState('Darshan');

    const ref = useRef()

    useEffect(()=>{
        // ref.current.style.color = 'red'
    })


    console.log('=====================================')
    console.log(value)
    console.log('Refrecing parent component.')
    // useEffect(()=>{
    //     console.log('----------------------')
    //     console.log(value)
    //     // setTimeout(()=>{
    //     //     console.log('run settimeout func')
    //     //     setValue((v)=>{console.log(v); return ++v;}, 10000);
    //     // });
    // }, [])

    return ( <>
    {/* <h3>This is a parent component</h3>
    <button onClick={()=>{setValue(v=>++v)}}>Button</button><br />
    {value}
    <hr /> */}
    {/* <Memo name={name}/> */}
    {/* <RefsComp ref={ref} />
    <button onClick={()=>{ref.current.style.color = 'red'; console.log('clicked!')}}>Parent Button</button> */}
    {/* <hr /> */}

    <ClickCounter />
    <br /><br />
    <HovorCounter />

    </> );
}

export default Parent;