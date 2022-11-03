import axios from "axios"
import {React, Component, useState} from "react"
import "./css/Conversation.css"
import "./css/ChatSideBar.css"
import { useNavigate } from "react-router-dom"

class ChatSideBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            setOppositeUser: props.setOppositeUser,
            cookies: props.cookies,
            setCookies: props.setCookies,
            friend_list: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/friends', {headers: {Authorization: `Token ${this.state.cookies.token}`}})
        .then(res=>{
            console.log(res.data)
            this.setState({friend_list: res.data})
        }).catch(e=>{
            console.log(e)
        });
    }

    render() { 
        return (
        <div className="chat-side-bar">
            <header className="side-header">Header</header>
            <div className="friends-list">
                {this.state.friend_list.map(friend=><Friend setOppositeUser={this.state.setOppositeUser}  key={friend.id} friend={friend} />)}
            </div>
        </div>
        );
    }
}
 
export default ChatSideBar;

// function ChatSideBar(props) {
//     return ( 
//     );
// }

// export default ChatSideBar;


function Friend(props){
    const navigate = useNavigate()
    console.log(props)
    const clickHandler = ()=>{
        props.setOppositeUser({id: props.friend.friend.id, name: props.friend.friend.username})
        console.log('---------clicked---------', props.friend)
        navigate(`/chat/${props.friend.friend.id}/${props.friend.friend.username}`)
    }
    return (
        <div onClick={clickHandler} className="friend-box">
           {props.friend.friend.username}
        </div>
    );
}