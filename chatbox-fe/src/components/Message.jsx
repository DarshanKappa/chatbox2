import { useCookies } from "react-cookie";


function Message({key, message}) {
    // console.log('****************************')
    // console.log(key, message)
    const [cookies, setCookies] = useCookies()
    const user_id = cookies.user_id
    const side = (message.sender.id == user_id)?"right":"left"
    const color = (message.sender.id == user_id)?"#b1f396":"#d0d9cc"
    const style2 = {"backgroundColor": color}
    const style = {
        "textAlign": side
    }
    const view_message = []
    let messages = message.message.message
    let url = message.message.url
    let img_style = {'width': '100%'}
    if(url===''|url===null){
        img_style = {'display': 'none'}
    }
    // try{
    //     let json_msg = JSON.parse(message.message.message)
    //     messages = json_msg.message
    //     file_url = json_msg.url
    //     img_style = {'width': '100%'}
    // }catch(e){
    //     messages = message.message.message
    // }
    messages = messages.split('\n')
    // console.log(url)
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
                        <img style={img_style} src={url?url:""} alt="" />
                        {view_message}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Message;