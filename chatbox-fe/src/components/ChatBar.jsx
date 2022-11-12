import { React, Component, useState, useEffect } from "react"
import "./css/Conversation.css"
import ShowChatsBar from "./ShowChatsBar";
import axios from "axios"
import { withCookies, useCookies } from 'react-cookie';
import SendMessage from "./SendMesage";
import { json, useParams } from "react-router-dom";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useCallback } from "react";


const ChatBar = (props) => {
    let { user_id, user_name } = useParams()
    const [cookies, setCookies] = useCookies();

    const [ismounted, setMounted] = useState(false);

    const [auth_user, setauth_user] = useState({ id: cookies.user_id, name: "auth user" });
    const [opposite_user, setopposite_user] = useState({ id: user_id, name: user_name });
    const [chat_list, setchat_list] = useState([]);

    const [drag_style1, setDragStyle1] = useState({});
    const [drag_style2, setDragStyle2] = useState({});

    const [file_p, setFile_p] = useState(null)
    const [url_p, setURL_p] = useState('')

    let ids = [auth_user.id, opposite_user.id]

    const [channel_layer, setChannelLayer] = useState(ids.sort().join('-'));
    const [messageHistory, setMessageHistory] = useState([]);
    const { readyState, sendJsonMessage, lastJsonMessage, lastMessage } = useWebSocket(`ws://${process.env.REACT_APP_PUBLIC_URL}/ws/chat/${channel_layer}/`);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    const websocket = () => {

    }

    const sendMessage = useCallback((message) => {
        sendJsonMessage({ 'message': message })
    }, []);

    useEffect(() => {
        if (!ismounted) {
            const headers = {
                Authorization: `Token ${cookies.token}`
            }
            const params = {
                opposite_user: opposite_user.id
            }
            const configs = {
                headers: headers,
                params: params
            }
            axios.get('http://localhost:8000/chat1/conversation', configs)
                .then((res) => {
                    setchat_list(res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
        setMounted(true)
        if (lastJsonMessage !== null) {
            // // console.log(chat_list)
            // // console.log(chat_list, lastJsonMessage)
            // // console.log(lastJsonMessage)
            // console.log(chat_list[chat_list.length - 1], lastJsonMessage.message)
            // console.log(typeof (chat_list[chat_list.length - 1]), typeof (lastJsonMessage.message))
            // var list = chat_list
            // list.push(lastJsonMessage.message)
            // setchat_list(list)
            // setchat_list([...chat_list, lastJsonMessage.message])
            // setTimeout(()=>{
            //     setchat_list([])
            // }, 3000)
            setchat_list((previous_state) => (
                [...previous_state, lastJsonMessage.message]
            ))
        }
    }, [lastJsonMessage])
    // opposite_user, lastJsonMessage, readyState, sendJsonMessage
    const refresh_chat = () => {

    }

    const dragenter = ()=>{
        // setDragStyle1({'display': 'flex'})
        // setDragStyle2({'opacity': '30%'})
    }
    
    const dragleave = (e)=>{
        setDragStyle1({})
        setDragStyle2({})
        
    }
    
    const dragover = (e)=>{
        setDragStyle1({'display': 'flex'})
        setDragStyle2({'opacity': '30%'})
        // setDragStyle1({})
        // setDragStyle2({})
        e.stopPropagation();
        e.preventDefault();
    }
    
    const droped = (e)=>{
        window.document.getElementById('msg-input').focus()
        e.stopPropagation();
        e.preventDefault();
        setDragStyle1({})
        setDragStyle2({})
        // this.setState({border: '1px solid gray', droped: true})
        // console.log(e.dataTransfer.getData('text'))
        // console.log(e.dataTransfer.files)
        for(var i of e.dataTransfer.types){
            console.log(i, e.dataTransfer.getData(i))
        }
        // console.log(JSON.stringify(e.dataTransfer.files[0]))
        // console.log(typeof(e.dataTransfer.files[0]))
        var file = e.dataTransfer.files[0]
        console.log(file)
        // console.log(file.type)
        var url = window.URL.createObjectURL(file)
        // console.log(url)
        setFile_p(file)
        setURL_p(url)
        // this.setState({file: file, file_url: url})
        var formData = new FormData();
        formData.append('file', e.dataTransfer.files[0])
    }

    return (
    <>  
        <div style={drag_style1} className="drop-page">
            <div>Drop</div>
        </div>
        <div style={drag_style2} className="chat-bar" onDragEnter={dragenter} onDragLeave={dragleave} 
                onDragOver={dragover} onDrop={droped} >
            <header className="chats-header">
                <div>
                    {opposite_user.name}
                </div>
            </header>

            <ShowChatsBar chat_list={chat_list} />

            <SendMessage key={file_p} file={[file_p, setFile_p]} url={[url_p, setURL_p]} sendMessage={sendMessage} refresh_chat={refresh_chat} opposite_user={opposite_user} cookies={cookies} />
        </div>
    </>
    );
}

// class ChatBar extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             cookies: props.cookies,
//             setCookies: props.setCookies,
//             auth_user: {id: props.cookies.user_id, name: "auth user"},
//             opposite_user: {id: props.opposite_user.id, name: props.opposite_user.name},
//             chat_list: []
//         }
//         this.refresh_value = null
//         this.refresh_chat = this.componentDidMount.bind(this)


//     }

//     refresh(){
//         // console.log('---------Refreshing----------')
//         const headers = {
//             Authorization: `Token ${this.state.cookies.token}`
//             }
//         const params = {
//             opposite_user: this.state.opposite_user.id
//             }
//         const configs = {
//             headers: headers,
//             params: params
//             }
//         axios.get('http://localhost:8000/chat1/conversation', configs)
//         .then((res)=>{
//             // // console.log(res)
//             this.setState({chat_list: res.data})
//             // if(this.state.opposite_user.id == undefined | this.state.opposite_user.name == undefined){
//                 // if(res.data[0]){
//                 //     const auth_user_id = this.state.cookies.user_id
//                 //     if(auth_user_id == res.data[0].sender.id){
//                 //         this.setState({opposite_user: res.data[0].receiver})
//                 //     }else{
//                 //         this.setState({opposite_user: res.data[0].sender})
//                 //     }
//                 // }
//                 // }
//         })
//         .catch(e=>{
//             // console.log(e)
//         })
//         this.refresh_value = setTimeout(()=>{this.refresh()}, 10000)
//         // if(this.refresh_value == null){
//         //     // clearInterval(refresh_value)
//         // }
//     }

//     componentDidMount(){
//         // console.log('-------in componentDidMount---------s')

//         // // console.log(this.state.opposite_user)
//         // // console.log(this.params)
//         // // // console.log(this.state.cookies)
//         // const headers = {
//         //     Authorization: `Token ${this.state.cookies.token}`
//         //     }
//         // const params = {
//         //     opposite_user: this.state.opposite_user.id
//         //     }
//         // const configs = {
//         //     headers: headers,
//         //     params: params
//         //     }
//         // axios.get('http://localhost:8000/chat/conversation', configs)
//         // .then((res)=>{
//         //     // // console.log(res)
//         //     this.setState({chat_list: res.data})
//         // })
//         // .catch(e=>{
//         //     // console.log(e)
//         // })

//         // // this.setState({refresh_chat: true})

//         // // const timer = setTimeout(()=>{
//         // //     this.componentDidMount()
//         // // }, 10000)
//         // // this.setState({timer: timer})
//         // // console.log('-------------NULL------------')
//         // // console.log(this.refresh_value)
//         // if(this.refresh_value == null){
//         //     // this.refresh_value = setTimeout(()=>{this.refresh()}, 30000)
//         //     // clearInterval(refresh_value)
//         // }
//         // // if(this.refresh_value != null){
//         // // }
//     }

//     componentWillUnmount(){
//         if(this.refresh_value != null){
//             clearTimeout(this.refresh_value)
//             this.refresh_value = null
//         }
//     }

//     render() { 
//     }
// }

export default ChatBar;


// function ChatBar() {
//     return ( 
//      );
// }

// export default ChatBar;