import {React, useState} from "react";
import "./css/SignUp.css"
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";


const SignUp = function () {
    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies('token');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [style, setStyle] = useState({});

    const signin_handler = function (e){
            if (username != '' &  password != ''){
                axios.post("http://127.0.0.1:8000/signin",
                           {"username": username,"password": password})
                .then((res)=>{
                    console.log(res.data)
                     setCookies('token', res.data.token, '/')
                    setCookies('user_id', res.data.user_id, '/')
                    navigate('/chat/')
                })
                .catch((e)=>{
                    console.log(e)
                });
            }
    }

    const enterEvent = (e)=>{
        console.log(e.key)
        if(e.key === 'Enter'){
            if(e.currentTarget.id == '2'){
                setStyle({"border": "2px solid black"})
                window.document.getElementById('temp1').focus()
            }else{
                var id = Number(e.currentTarget.id) + 1
                window.document.getElementById(String(id)).focus()
            }
        }
    }
    const tempevent = (e)=>{
        if(e.key === 'Enter'){
            window.document.getElementById('button').click()
        }
    }
    const tempblur = (e)=>{
        setStyle({})
    }
    

    return (
        <div className="SignUp">
            <div className="inner-Signup">
                <div className="main-signin">
                    <div id="signin-username" className="text-input"><input id="1" onKeyDown={enterEvent} onChange={(e)=>{setUsername(e.target.value)}} className="text-input" type="text" placeholder="Username" /></div>
                    <div id="signin-pwd" className="text-input"><input id="2" onKeyDown={enterEvent} onChange={(e)=>{setPassword(e.target.value)}} className="text-input" type="password" placeholder="Password" /></div>
                    <input id="temp1" onBlur={tempblur} onKeyDown={tempevent} type="text" />
                    <br />
                    <input style={style} id="button" onBlur={tempblur} type="button" onClick={signin_handler} value="Sign In" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;