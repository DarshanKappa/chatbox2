'use strict';

import { Component, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {useCookies} from "react-cookie"


function TestingComponent() {
    const [data, setData] = useState({'display': 'none'})
    const[button, setButton] = useState(false)

    const [cookies, setCookies] = useCookies();

    useEffect(()=>{
        console.log('----client--------', cookies)
        setCookies('client_data', '0000000000000000000000000')
        const script = document.createElement("script");

        script.src = "http://localhost:3000/static/js/bundle.js";
        script.async = true;
    
        document.body.appendChild(script);
    },[])

    const clickHandler = ()=>{
        if(!button){
            setButton(true)
            setData({'display': 'block'})
        }else{
            setButton(false)
            setData({'display': 'none'})
        }
    }
    return ( 
        <>
            <div>This is a testing Project.</div>
            <div  id="box"></div>
            {}
            <div><button onClick={clickHandler}>{button?'On':'Off'}</button></div>
        </>
     );
}

 
export default TestingComponent;


