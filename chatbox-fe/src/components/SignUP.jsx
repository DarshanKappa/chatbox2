import {React, useState} from "react";
import "./css/SignUp.css"
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const SignUp = function () {

    const navitage = useNavigate()
    const [cookies, setCookies] = useCookies('token');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [style, setStyle] = useState({});

    const signup_handler = function (e){
        if (username != '' & email != '' & first_name != '' & last_name != '' &  password != '' & confirm_password != ''){
            axios.post("http://127.0.0.1:8000/signup",
                       {"username": username,
                            "email": email,
                            "first_name": first_name,
                            "last_name": last_name,
                            "password": password})
            .then((res)=>{
                console.log(res.data)
                console.log(res.data.token)
                setCookies('token', res.data.token, '/')
                setCookies('user_id', res.data.user_id, '/')
                navitage('/search')
            })
            .catch((e)=>{
                console.log(e)
            });
        }
    }

    const enterEvent = (e)=>{
        console.log(e.key)
        if(e.key === 'Enter'){
            if(e.currentTarget.id == '6'){
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
                    <div className="text-input"><input id="1" onKeyDown={enterEvent} onChange={(e)=>{setUsername(e.target.value)}} className="text-input" type="text" placeholder="Username" /></div>
                    <div className="text-input"><input id="2" onKeyDown={enterEvent} onChange={(e)=>{setEmail(e.target.value)}} className="text-input" type="text" placeholder="Email" /></div>
                    <div className="text-input"><input id="3" onKeyDown={enterEvent} onChange={(e)=>{setFirstName(e.target.value)}} className="text-input" type="text" placeholder="First Name" /></div>
                    <div className="text-input"><input id="4" onKeyDown={enterEvent} onChange={(e)=>{setLastName(e.target.value)}} className="text-input" type="text" placeholder="Last Name" /></div>
                    <div className="text-input"><input id="5" onKeyDown={enterEvent} onChange={(e)=>{setPassword(e.target.value)}} className="text-input" type="password" placeholder="Password" /></div>
                    <div className="text-input"><input id="6" onKeyDown={enterEvent} onChange={(e)=>{setConfirmPassword(e.target.value)}} className="text-input" type="password" placeholder="Confirm Password"/></div>
                    <input id="temp1" onBlur={tempblur} onKeyDown={tempevent} type="text" />
                    <br />
                    <input type="button" id="button" style={style} onClick={signup_handler} value="Sign Up" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;