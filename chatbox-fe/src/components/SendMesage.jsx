import EditableElement from "./EditableElement";
import React, {Component} from "react"
import send_button from "./images/send-message.png"
import attachment_logo from "./images/attachment.png"
import add_friend_logo from "./images/add-friend.png"
import add_logo from "./images/add.png"
import file_logo from "./images/file.png"
import up_arrow_logo from "./images/up-arrow.png"
import axios from "axios";

class SendMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            opposite_user: props.opposite_user,
            cookies: props.cookies,
            input_value: '',
            top: null,
            real_top: null, 
            height: null,
            real_height: null,
            scrollHeight: null,
            number: 0,
            box_height: null,
            real_box_height: null
        }
        this.refer = React.createRef()
        this.input_ref = React.createRef()
        this.eventhandler = this.eventhandler.bind(this)
        this.keyhandler = this.keyhandler.bind(this)
        this.send_message = this.send_message.bind(this)
        this.refresh_chat = this.props.refresh_chat.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        let top = window.getComputedStyle(this.refer.current).top
        let box_height = window.getComputedStyle(this.refer.current).height
        let height = window.getComputedStyle(this.input_ref.current).height
        top = top.substring(0, top.length-2)
        box_height = box_height.substring(0, box_height.length-2)
        height = height.substring(0, height.length-2)
        
        let line_height = window.getComputedStyle(this.input_ref.current).getPropertyValue('line-height')
        line_height = Number(line_height.substring(0, line_height.length-2))
        // let padding_top = window.getComputedStyle(this.input_ref.current).getPropertyValue('padding-top')
        // padding_top = Number(padding_top.substring(0, padding_top.length-2))
        // let padding_bottom = window.getComputedStyle(this.input_ref.current).getPropertyValue('padding-bottom')
        // padding_bottom = Number(padding_bottom.substring(0, padding_bottom.length-2))
        let input_height = line_height
        input_height = String(input_height) + 'px'
        this.setState({input_value: '', real_top: top, real_height: height, real_box_height: box_height, height: input_height})
        // console.log('++++++++++++++++++++++++++++++++')
        // let x = window.document.getElementById('msg-input')
        // console.log(x.style.fonts)
        // console.log(top, height)
        // this.setState({real_top:top, real_height: height})
        // console.log(window.getComputedStyle(this.refer.current).top)

        // this.setState({top: window.getComputedStyle(this.refer.current).top})
    }

    componentDidUpdate(preprops, prestate){
        console.log('------------------0')
        console.log(this.state.input_value)

        // let height = this.state.real_height
        // let change = (this.state.scrollHeight*(this.state.number-1))
        // height = Number(height) + change
        // height = String(height) + 'px'
        // console.log(height)

        // let top = this.state.real_top
        // top = Number(top) - (scrollHeight*(number_of_lines-1))
        // top = String(top) + 'px'
        // console.log(top)
        // this.setState({ height: height})
        // console.log(this.state.input_value)
        // console.log(this.state.input_value.split('\n'))
        // let a = this.state.input_value.split('\n')




        // console.log(window.getComputedStyle(this.refer.current).top)

        // const textarea = window.document.getElementById("msg-input")
        // console.log(textarea.children)
        // // textarea.firstChild
        // const selection = document.getSelection()
        // console.log('0000000')
        // console.log(this.state.focusOffset)
        // console.log(selection.setPosition(textarea.firstChild, this.state.focusOffset))

        // console.log(selection.focusOffset)
        // console.log(selection.focusNode)
        // selection.extend()
        // if (this.selectionRange !== undefined & this.selectionRange !== "") {
        //     selection.removeAllRanges()
        //     console.log('-----------')
        //     selection.setPosition()    
        //     selection.addRange(this.selectionRange)
        // }
        // console.log(selection)
        // console.log(selection.focusNode)
        // console.log(selection.focusNode.parentElement)
        // console.log(selection.focusNode.parentNode.parentNode)
    }

    eventhandler(e){
        console.log('key')
        console.log(e.target.value.split(''))
        if(this.state.scrollHeight==null){
            this.setState({scrollHeight: e.target.scrollHeight})
        }
        if(e.target.value === '\n'){
            this.setState({input_value: ''})
        }else{
            this.setState({input_value: e.target.value})
        }
        // console.log('999999999999999999999999999')
        // console.log(e.target.value)
        let t = e.target.value.split('\n')
        // console.log(t)
        t = t.length
        // console.log(t)
        // console.log(window.getComputedStyle(this.input_ref.current).scrollHeight)
        // console.log(window.getComputedStyle(this.input_ref.current).getPropertyValue('scroll-height'))

        // console.log(e.target.scrollHeight)
        
        let scrollHeight = e.target.scrollHeight
        let line_height = window.getComputedStyle(this.input_ref.current).getPropertyValue('line-height')
        line_height = Number(line_height.substring(0, line_height.length-2))
        let padding_top = window.getComputedStyle(this.input_ref.current).getPropertyValue('padding-top')
        padding_top = Number(padding_top.substring(0, padding_top.length-2))
        let padding_bottom = window.getComputedStyle(this.input_ref.current).getPropertyValue('padding-bottom')
        padding_bottom = Number(padding_bottom.substring(0, padding_bottom.length-2))
        // console.log(scrollHeight, line_height, padding_top, padding_bottom)

        
        scrollHeight = scrollHeight - padding_top - padding_bottom
        let number_of_lines = parseInt(scrollHeight / line_height)
        this.setState({number: number_of_lines})
        // console.log(this.state.real_top, this.state.real_height)
        scrollHeight = line_height*t
        // console.log(scrollHeight, number_of_lines)
        if (number_of_lines>0){
            let height = this.state.real_height
            // height = Number(height) + (scrollHeight*(number_of_lines-1))
            if(e.target.value !== '\n'){
                height = Number(scrollHeight)
            }
            height = String(height) + 'px'
            // console.log(height)
            
            let box_height = this.state.real_box_height
            console.log(box_height)
            if(e.target.value !== '\n'){
                box_height = Number(box_height) + (scrollHeight-(line_height))
            }
            box_height = String(box_height) + 'px'
            
            let top = this.state.real_top
            if(e.target.value !== '\n'){
                top = Number(top) - (scrollHeight-(line_height))
            }
            top = String(top) + 'px'
            console.log(top, box_height, height)
            this.setState({top: top, height: height, box_height: box_height})
        }



        // console.log(padding_top, padding_bottom)
        // let top = window.getComputedStyle(this.refer.current).top
        // top = this.state.real_top
        // // let line_height = window.getComputedStyle(this.refer.current).line
        // let font_size = window.getComputedStyle(this.refer.current).fontSize
        // let a = e.target.value.split('\n')
        // console.log(a)
        // a = a.length - 1
        // // top = top.substring(0, top.length-2)
        // console.log('0000000000000000000')
        // if(a>0){
        //     let height = this.state.real_height
        //     console.log(height)
        //     height = height.substring(0, height.length-2)
        //     height = Number(height) + (20*a)
        //     height = String(height) + 'px'

        //     top = top.substring(0, top.length-2)
        //     top = Number(top) - (20*a)
        //     top = String(top) + 'px'
        //     this.setState({top: top, height: height})
        // }
        
        // console.log('-----------------')


        // const selection = document.getSelection()
        // const el = document.getElementById('msg-input');
        // console.log()
        // console.log(selection)
        // const range = document.createRange();
        // console.log(range)
        // selection.removeAllRanges();
        // console.log(selection)
        // range.selectNodeContents(el);
        // range.collapse(false);
        // selection.addRange(range);
        // console.log(selection)
        // el.focus();
        // inputRef.current.setSelectionRange(0, 3);
        // textarea.setSelectionRange(0,3)
        // const r = document.getSelection().getRangeAt(0).cloneRange()
        // console.log('------------------------------')
        // const selection = window.getSelection();
        // const textarea = window.document.getElementById("msg-input")
        // console.log(textarea.children)
        // console.log(textarea.innerText)
        // console.log(textarea.innerHTML)
        // this.setState({input_value: textarea.innerHTML,
        //     selectionRange: document.getSelection().getRangeAt(0).cloneRange(),
        //     focusOffset: selection.focusOffset},
        //     ()=>{console.log(this.state)})
        // this.setState({focusOffset: selection.focusOffset})
            // const selection = document.getSelection()
            // console.log(selection)
            // console.log(selection.focusOffset)
            // console.log(r)
            // this.setState({input_value: e.currentTarget.textContent})
            // const selection = document.getSelection()
            // if (r !== undefined & r !== "") {
                //         selection.removeAllRanges()
            //         console.log('-----------')
        //         selection.addRange(r)
        // }
        // console.log(e.currentTarget.textContent)
        // console.log(e.target.innerHTML)
        // console.log(document.getSelection().getRangeAt(0).cloneRange())
        // setInputValue(e.target.innerHTML)
    }

    keyhandler(e){
        // console.log('----------handler-------')
        if(e.key==='Enter'){
            this.send_message()
        }
        // console.log(e.target.value)
        // console.log(window.getComputedStyle(this.refer.current).top)
        // let top = window.getComputedStyle(this.refer.current).top
        // // top = top.substring(0, top.length-2)
        // console.log('0000000000000000000')
        // console.log(top.substring(0, top.length-2))
        // top = top.substring(0, top.length-2)
        // top = Number(top) - 20
        // top = String(top) + 'px'
        // this.setState({top: top})
    }
    
    send_message(){
        if(this.state.input_value !== ''){
            console.log('0000000000000000000000')
            this.setState({input_value: '',
                        top: this.state.real_top,
                        height: this.state.real_height,
                        box_height: this.state.real_box_height})
            console.log(this.state.input_value)
            // this.setState({input_value: '', 
            //                 top: this.state.real_top, 
            //                 height: this.state.real_height, 
            //                 box_height: this.state.real_box_height})
            const headers = {
                Authorization: `Token ${this.state.cookies.token}`
                }
            const data = {
                    sender: this.state.cookies.user_id,
                    receiver: this.state.opposite_user.id,
                    message: this.state.input_value
                }
            const configs = {
                headers: headers,
    
                }
            axios.post('http://localhost:8000/chat/', data, configs)
            .then((res)=>{
                console.log(res)
                // this.componentDidMount()
                this.refresh_chat()
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }

    render() { 
        let style = this.state.top!=null?{'top': this.state.top, 'height': this.state.box_height}:{}
        let style2 = this.state.height!=null?{'height': this.state.height}:{}
        console.log(style)
        console.log(style2)
        return (
            <div style={style} ref={this.refer} id="send-msg-comp" className="send-msg-bar">
            <div className="sender-input">
                {/* <EditableElement /> */}
                <textarea placeholder="Type message" style={style2} ref={this.input_ref} name="" onKeyDown={this.keyhandler} onChange={this.eventhandler} id="msg-input" cols="30" rows="10" value={this.state.input_value}></textarea>
                {/* <div jsname="yrriRe" jsaction="touchend:ufphYd; input:q3884e; paste:QD1hyc; drop:HZC9qb;" role="textbox" aria-label="Message Shahil Joshi. History is on." aria-multiline="true" spellcheck="true" g_editable="true" contenteditable="true" aria-owns="VQsG6b490" dir="ltr" onKeyDown={this.handler} onInput={this.eventhandler} id="msg-input" contenteditable="true"><div id="p1">darshan</div></div> */}
                <div className="sender-button">
                    <img onClick={this.send_message} src={send_button}  alt="Send" />
                    {/* <button type="submit">Send</button> */}
                </div>
            </div>
            <div className="extra-sender">
                <div className="extra-buttons">
                    <img src={add_logo} alt="Attachment" />
                </div>
                <div className="extra-buttons">
                    <img src={up_arrow_logo} alt="Attachment" />
                </div>
                <div className="extra-buttons">
                    <img src={add_friend_logo} alt="Attachment" />
                </div>
                <div className="extra-buttons">
                    <img src={file_logo} alt="Attachment" />
                </div>
                <div className="extra-buttons">
                    <img src={attachment_logo} alt="Attachment" />
                </div>
            </div>
        </div>
        );
    }
}
 
export default SendMessage;


// function SendMessdage() {
//     const inputRef = useRef(null)
//     const [input_value, setInputValue] = useState('')
//     const [selectionRange, setSelectionRange] = useState('')
//     useLayoutEffect(() => {
//         console.log('in layout effect', selectionRange)
//         const selection = document.getSelection()
//         console.log(selection)
//         // console.log(selectionRange)
//         // if (selectionRange !== undefined & selectionRange !== "") {
//         //     // selection.removeAllRanges()
//         //     console.log('-----------')
//         //     selection.addRange(selectionRange)
//         // }
//         // startOffset
//     }, [0, 3])
//     // const selection = document.getSelection()
//     // console.log('929929299229922929')
//     // console.log(selection)
//     // console.log(selection.getRangeAt(0).cloneRange())
//     const eventhandler = (e)=>{
//         const textarea = window.document.getElementById("msg-input")
//         // const selection = document.getSelection()
//         console.log('------------------------------')
//         // const el = document.getElementById('msg-input');
//         // console.log()
//         // const selection = window.getSelection();
//         // console.log(selection)
//         // const range = document.createRange();
//         // console.log(range)
//         // selection.removeAllRanges();
//         // console.log(selection)
//         // range.selectNodeContents(el);
//         // range.collapse(false);
//         // selection.addRange(range);
//         // console.log(selection)
//         // el.focus();
//         // inputRef.current.setSelectionRange(0, 3);
//         // textarea.setSelectionRange(0,3)
//         const r = document.getSelection().getRangeAt(0).cloneRange()
//         setSelectionRange(document.getSelection().getRangeAt(0).cloneRange())
//         console.log(r)
//         console.log(e.currentTarget.textContent)
//         setInputValue(e.currentTarget.textContent)
//         const selection = document.getSelection()
//         if (r !== undefined & r !== "") {
//                 selection.removeAllRanges()
//                 console.log('-----------')
//                 selection.addRange(r)
//         }
//         console.log(e.target.innerHTML)
//         console.log(document.getSelection().getRangeAt(0).cloneRange())
//         // setInputValue(e.target.innerHTML)
//     }
//     const handler = e=>{
//         console.log('999999999999999999999999999')
//     }
//     return ( 
//         <div className="send-msg-bar">
//             <div className="sender-input">
//                 {/* <EditableElement /> */}
//                 <div ref={inputRef} onKeyDown={handler} onInput={eventhandler} id="msg-input" contenteditable="true" value="">{input_value}</div>
//                 <div className="sender-button">
//                     <button type="submit">Send</button>
//                 </div>
//             </div>
//             <div className="extra-sender">

//             </div>
//         </div>
//      );
// }

// export default SendMesdsage;

{/* <div jsname="yrriRe" jsaction="touchend:ufphYd; input:q3884e; paste:QD1hyc; drop:HZC9qb;" class="T2Ybvb KRoqRc editable" role="textbox" aria-label="Message Shahil Joshi. History is on." aria-multiline="true" spellcheck="true" id="T2Ybvb0" g_editable="true" contenteditable="true" aria-owns="VQsG6b490" dir="ltr"></div> */}