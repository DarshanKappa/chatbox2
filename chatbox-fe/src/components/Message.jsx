import { useCookies } from "react-cookie";


function Message({key, message}) {
    const [cookies, setCookies] = useCookies()
    const user_id = cookies.user_id
    const side = (message.sender.id == user_id)?"right":"left"
    const color = (message.sender.id == user_id)?"#b1f396":"#d0d9cc"
    const style2 = {"background-color": color}
    const style = {
        "text-align": side
    }
    const view_message = []
    let messages = message.message.message.split('\n')
    for(var i in messages){
        view_message.push(<div>{messages[i]}</div>)
    }
    // console.log(view_message)
    return ( 
        <div style={style} className="message">
            <div className="outer-message">
                <div style={style2} className="inner-message">
                    <div className="meta-message">
                        <div className="meta-name">{message.sender.name}</div>
                        <div>{message.message.created.time}</div>
                    </div>
                    <div className="msg">
                        {view_message}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Message;