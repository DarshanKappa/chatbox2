import { useState } from "react";
import {Component, React, useRef} from "react"
import "./css/Conversation.css"
import Message from "./Message";


function ShowChatsBar(props) {
    // console.log('######################')
    // // console.log(key)
    // // console.log(props.chat_list)
    // let v = window.document.getElementById("names");
    // // console.log(v)
    // // console.log(v)
    // const element = document.getElementById("names");
 
    // // console.log('999999999999999999999')
    // // console.log(element)
    
    const bottomRef = useRef(null);
    bottomRef.current?.scrollIntoView({});
    // console.log('======MAP========')
    // // console.log(typeof(props.chat_list))
    // console.log(props.chat_list)
    // // console.log(chats)
    return (
        <div id="names" className="show-chats">
            {props.chat_list.map(m=><Message key={m.id} message={m}/>)}
            {/* {props.chat_list.length!==0?props.chat_list[props.chat_list.length-1].id:null} <br /> */}
            {/* {props.chat_list.length!==0?chats[chats.length-1].id:null}  */}
            {<div id="bottomRef" ref={bottomRef} />}

        </div>
     );
}

export default ShowChatsBar;


// class ShowChatsBar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             chat_list: this.props.chat_list
//         }

//     }

//     // componentDidMount(){
//     //     // console.log('componentDidMount function called.')
//     // }

//     render() { 
//         return (
//         );
//     }
// }