import {React, useState} from "react"
import "./css/Conversation.css"
import ChatSideBar from "./ChatSideBar";
import ChatBar from "./ChatBar";
import {useCookies} from "react-cookie"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import useWebSocket, { ReadyState } from 'react-use-websocket';



function Conversation() {
    const [cookies, setCookies] = useCookies()
    let {user_id, user_name} = useParams()
    const [opposite_user, setOppositeUser] = useState({id: user_id, name: user_name})
    const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:8000/ws/chat/1-2/');
    // let opposite_user = {id: user_id, name: user_name}
    // console.log('-------------Params--------------')
    // console.log(user_id, user_name)
    return ( 
        <div className="Conversation">
            <ChatSideBar setOppositeUser={setOppositeUser} cookies={cookies} setCookies={setCookies}/>
            <ChatBar key={opposite_user.id} opposite_user={opposite_user} cookies={cookies} setCookies={setCookies} />
        </div>
    );
}

export default Conversation;