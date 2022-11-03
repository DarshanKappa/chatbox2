import {React, Component} from "react"
import "./css/Conversation.css"
import ShowChatsBar from "./ShowChatsBar";
import axios from "axios"
import { withCookies } from 'react-cookie';
import SendMessage from "./SendMesage";
import { useParams } from "react-router-dom";

class ChatBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            cookies: props.cookies,
            setCookies: props.setCookies,
            auth_user: {id: props.cookies.user_id, name: "auth user"},
            opposite_user: {id: props.opposite_user.id, name: props.opposite_user.name},
            chat_list: []
        }
        this.refresh_value = null
        this.refresh_chat = this.componentDidMount.bind(this)


    }

    refresh(){
        console.log('---------Refreshing----------')
        const headers = {
            Authorization: `Token ${this.state.cookies.token}`
            }
        const params = {
            opposite_user: this.state.opposite_user.id
            }
        const configs = {
            headers: headers,
            params: params
            }
        axios.get('http://localhost:8000/chat/conversation', configs)
        .then((res)=>{
            // console.log(res)
            this.setState({chat_list: res.data})
            // if(this.state.opposite_user.id == undefined | this.state.opposite_user.name == undefined){
                // if(res.data[0]){
                //     const auth_user_id = this.state.cookies.user_id
                //     if(auth_user_id == res.data[0].sender.id){
                //         this.setState({opposite_user: res.data[0].receiver})
                //     }else{
                //         this.setState({opposite_user: res.data[0].sender})
                //     }
                // }
            // }
        })
        .catch(e=>{
            console.log(e)
        })
        this.refresh_value = setTimeout(()=>{this.refresh()}, 10000)
        // if(this.refresh_value == null){
        //     // clearInterval(refresh_value)
        // }
    }

    componentDidMount(){
        console.log('-------in componentDidMount---------s')
        console.log(this.state.opposite_user)
        console.log(this.params)
        // console.log(this.state.cookies)
        const headers = {
            Authorization: `Token ${this.state.cookies.token}`
            }
        const params = {
            opposite_user: this.state.opposite_user.id
            }
        const configs = {
            headers: headers,
            params: params
            }
        axios.get('http://localhost:8000/chat/conversation', configs)
        .then((res)=>{
            // console.log(res)
            this.setState({chat_list: res.data})
        })
        .catch(e=>{
            console.log(e)
        })

        // this.setState({refresh_chat: true})

        // const timer = setTimeout(()=>{
        //     this.componentDidMount()
        // }, 10000)
        // this.setState({timer: timer})
        console.log('-------------NULL------------')
        console.log(this.refresh_value)
        if(this.refresh_value == null){
            // this.refresh_value = setTimeout(()=>{this.refresh()}, 30000)
            // clearInterval(refresh_value)
        }
        // if(this.refresh_value != null){
        // }
    }

    componentWillUnmount(){
        if(this.refresh_value != null){
            clearTimeout(this.refresh_value)
            this.refresh_value = null
        }
    }

    render() { 
        return (
            <div className="chat-bar">
                <header className="chats-header">
                    <div>
                    {this.state.opposite_user.name}
                    </div>
                </header>

                <ShowChatsBar refresh_chat={this.refresh_chat} chat_list={this.state.chat_list} />

                <SendMessage refresh_chat={this.refresh_chat} opposite_user={this.state.opposite_user} cookies={this.state.cookies} />
            </div>
        );
    }
}
 
export default ChatBar;


// function ChatBar() {
//     return ( 
//      );
// }

// export default ChatBar;