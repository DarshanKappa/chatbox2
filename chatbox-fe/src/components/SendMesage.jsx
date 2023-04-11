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
            file: props.file[0],
            file_url: props.url[0],

            top: null,
            real_top: null, 
            height: null,
            real_height: null,
            scrollHeight: null,
            number: 0,
            box_height: null,
            real_box_height: null,
            border: '1px solid gray',
            droped: false
        }
        this.refer = React.createRef()
        this.input_ref = React.createRef()
        this.eventhandler = this.eventhandler.bind(this)
        this.keyhandler = this.keyhandler.bind(this)
        this.send_message = this.send_message.bind(this)
        this.refresh_chat = this.props.refresh_chat.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.dragenterhandler = this.dragenterhandler.bind(this)
        this.dragoverhandler = this.dragoverhandler.bind(this)
        this.draghandler = this.draghandler.bind(this)

        this.sendMessage = this.props.sendMessage.bind(this)
        this.setFILE = this.props.file[1].bind(this)
        this.setURL = this.props.url[1].bind(this)
    }


    componentDidMount(){
        window.document.getElementById('msg-input').focus()
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
        this.setState({input_value: '', real_top: top, top: top, real_height: height, real_box_height: box_height, box_height: box_height, height: input_height})
        // console.log('++++++++++++++++++++++++++++++++')
        // let x = window.document.getElementById('msg-input')
        // console.log(x.style.fonts)
        // console.log(top, height)
        // this.setState({real_top:top, real_height: height})
        // console.log(window.getComputedStyle(this.refer.current).top)

        // this.setState({top: window.getComputedStyle(this.refer.current).top})
    }

    componentDidUpdate(preprops, prestate){
        // console.log('------------------0')
        // console.log(this.state.input_value)

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
        // console.log('key')
        // console.log(e.target.value.split(''))
        if(this.state.scrollHeight==null){
            this.setState({scrollHeight: e.target.scrollHeight})
        }
        if(this.state.droped){
            this.setState({droped: false})
            console.log('droped handler')
            
            // return
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
            // console.log(box_height)
            if(e.target.value !== '\n'){
                box_height = Number(box_height) + (scrollHeight-(line_height))
            }
            box_height = String(box_height) + 'px'
            
            let top = this.state.real_top
            if(e.target.value !== '\n'){
                top = Number(top) - (scrollHeight-(line_height))
            }
            top = String(top) + 'px'
            // console.log(top, box_height, height)
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
        let entered_value = this.state.input_value
        if(this.state.input_value !== '' & this.state.file===null){
            this.sendMessage({'sender': this.state.cookies.user_id, 
                                  'receiver': this.state.opposite_user.id,
                                  'message': entered_value})
        }else{
            if(this.state.file!==null){
                var formData = new FormData();
                console.log(this.state.file)
                formData.append('file', this.state.file)
                // var data1 = []
                var filereader = new FileReader()
                console.log(filereader)
                filereader.onload = (e)=>{
                    console.log(e.currentTarget.result)
                    var result = e.currentTarget.result;
                    const view = new Int8Array(result);
                    console.log()
                    
                    axios.post(`http://${process.env.REACT_APP_PUBLIC_URL}/chat1/upload-file`,
                    {'file12': view}, {headers: {}})
                    .then(res=>{
                        console.log(res)
                        console.log(this.state.input_value)
                        // this.sendMessage({'sender': this.state.cookies.user_id, 
                        //                   'receiver': this.state.opposite_user.id,
                        //                   'message': entered_value,
                        //                   'url': res.data.url})
                    }).catch(e=>{
                        console.log(e)
                    });
                    // console.log(result)
                    console.log(view)
                    // console.log(view)
                    // console.log(typeof(result))
                    // const data = [];
                  
                    // int8Array.map(a=>{data.push(a); data1.push(a)})
                    // each(int8Array, (item) => {
                    //   data.push(item);
                    //   data1.push(item)
                    // });
                    // console.log(data)
                    // console.log(int8Array)
                    // var blob = new Blob([view], { type: this.state.file.type })
                    // console.log(blob)
                    // var url = URL.createObjectURL(blob)
                    // console.log(url)
                    // console.log(this.state.file.type)
                    
                    // this.sendMessage({'sender': this.state.cookies.user_id, 
                    //                     'receiver': this.state.opposite_user.id,
                    //                     'message': 'This is a file.',
                    //                     'file': {'bytes': view, type: this.state.file.type}})
                    // this.setState({file: null})
    

                }
                filereader.readAsArrayBuffer(this.state.file);axios.post(`http://${process.env.REACT_APP_PUBLIC_URL}/chat1/upload-file`,
                formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(res=>{
                    console.log(res)
                    console.log(this.state.input_value)
                    // this.sendMessage({'sender': this.state.cookies.user_id, 
                    //                   'receiver': this.state.opposite_user.id,
                    //                   'message': entered_value,
                    //                   'url': res.data.url})
                }).catch(e=>{
                    console.log(e)
                });
                // axios.post(`http://${process.env.REACT_APP_PUBLIC_URL}/chat1/upload-file`,
                // formData, {headers: {'Content-Type': 'multipart/form-data'}})
                // .then(res=>{
                //     console.log(res)
                //     console.log(this.state.input_value)
                //     // this.sendMessage({'sender': this.state.cookies.user_id, 
                //     //                   'receiver': this.state.opposite_user.id,
                //     //                   'message': entered_value,
                //     //                   'url': res.data.url})
                // }).catch(e=>{
                //     console.log(e)
                // });

            }
            
        }
        
        this.setState({input_value: '',
                        file: null,
                        file_url: '',
                        top: this.state.real_top,
                        height: this.state.real_height,
                        box_height: this.state.real_box_height})
        this.setFILE(null)
        this.setURL('')
        // if(this.state.input_value !== ''){
        //     console.log('0000000000000000000000')
        //     this.setState({input_value: '',
        //                 top: this.state.real_top,
        //                 height: this.state.real_height,
        //                 box_height: this.state.real_box_height})
        //     console.log(this.state.input_value)
        //     // this.setState({input_value: '', 
        //     //                 top: this.state.real_top, 
        //     //                 height: this.state.real_height, 
        //     //                 box_height: this.state.real_box_height})
        //     const headers = {
        //         Authorization: `Token ${this.state.cookies.token}`
        //         }
        //     const data = {
        //             sender: this.state.cookies.user_id,
        //             receiver: this.state.opposite_user.id,
        //             message: this.state.input_value
        //         }
        //     const configs = {
        //         headers: headers,
    
        //         }
        //     axios.post('http://localhost:8000/chat1/', data, configs)
        //     .then((res)=>{
        //         console.log(res)
        //         // this.componentDidMount()
        //         this.refresh_chat()
        //     })
        //     .catch(e=>{
        //         console.log(e)
        //     })
        // }
    }

    dragenterhandler(e){
        console.log('-------Drag Endted--------')
        if(this.state.border === '1px solid gray'){
            this.setState({border: '2px solid orange'})
        }else{
            this.setState({border: '1px solid gray'})
        }

    }

    dragoverhandler(e){
        e.stopPropagation();
        e.preventDefault();
    }

    draghandler(e){
        console.log('---------Drag-------------')
        // e.stopPropagation();
        // e.preventDefault();
        // this.setState({border: '1px solid gray', droped: true})
        // console.log(e.dataTransfer.getData('text'))
        // console.log(e.dataTransfer.files)
        // for(var i of e.dataTransfer.types){
        //     console.log(i, e.dataTransfer.getData(i))
        // }
        // console.log(JSON.stringify(e.dataTransfer.files[0]))
        // console.log(typeof(e.dataTransfer.files[0]))
        // var file = e.dataTransfer.files[0]
        // console.log(file.type)
        // var url = window.URL.createObjectURL(file)
        // console.log(url)
        // this.setState({file: file, file_url: url})
        // var formData = new FormData();
        // formData.append('file', e.dataTransfer.files[0])
        // axios.post(`http://${process.env.REACT_APP_PUBLIC_URL}/chat1/upload-file`,
        // formData, {headers: {'Content-Type': 'multipart/form-data'}})
        // .then(res=>{
        //     console.log(res)
        // }).catch(e=>{
        //     console.log(e)
        // });
        // axios.get('https://teams.microsoft.com/5194816b-984f-4160-b1e5-b3a7e6a8463a')
        // axios.get('https://app.asana.com/app/asana/-/get_asset?asset_id=1203300440239883',
        // {headers: {"Access-Control-Allow-Origin": "*"}})
        // // axios.get('https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fjpeg&attachment_token=AOkZXXS6REJ71RmdMA0mVuVHhc2sscamnVUZ8egIMLmMu1e%2FuOWAPaRH7485m7u1A5HRo%2BPKcJ526rVMh7kXfptVRvb2nZ16Wb8KIB%2FGmZZ6XRr6z4je7PoN%2F4gevFJalnRJKq8OlBl0Lel9Of7km3CukCJD89X4iPq96asAITQtp3GGlNT5jLeM8bS8n8BlDIHj0R8NkqS9XV3Zk%2FWAqt%2Bxd4%2Bx5Y72ssCf1wmbvjLo6jQ4ZMa8Mt48cbVPHj69iGc%2FpzYWHfzrZ3Bak25j9X%2B6P6pU6%2FuJcDUjN5fXINgxO%2FAZv15lYStzdLl9ZT%2FmhdKQflaYjs6zcchDIn1DOdovHlYB6F1Rf2flUzMg6y9DIbO1%2FvGguASmYnQlP6xA7CCUy%2BT%2Fyh28Xcn18jxchwzIWOJbn%2Bbq082Zb7HNAcYfiPp1R8g23HAzenMI5qGvGilrAWMj%2FvQRGf%2FU0DLyaQ4hz3O%2FhDPrf1IF0UQFTdFEYWOsNG2BNlZUmAEm&sz=w512')
        // .then(res=>{
        //     console.log('---------res---------')
        //     console.log(res)
        // }).catch(e=>{
        //     console.log(e)
        // });
    }

    render() {
        // (this.state.url)
        let style4 = {'display': 'none'}
        if(this.state.file_url!==''){
            var top = this.state.top!==null?Number(this.state.top.substring(0, this.state.top.length-2)) - 200:null
            top = String(top) + 'px'

            var box_height = this.state.box_height!==null?Number(this.state.box_height.substring(0, this.state.box_height.length-2)) + 200:null
            box_height = String(box_height) + 'px'

            var height = this.state.height?Number(this.state.height.substring(0, this.state.height.length-2)) + 212:null
            height = String(height) + 'px'

            style4 = {'height': '200px', 'width': '100%'}
        }else{
            var top = this.state.top
            var box_height = this.state.box_height
            var height = this.state.height?Number(this.state.height.substring(0, this.state.height.length-2)) + 12:null
            height = String(height) + 'px'
        }

        let style = top!==null?{'top': top, 'height': box_height}:{}
        let style2 = this.state.height!==null?{'height': this.state.height,}:{}
        let style3 = height!==null?{'height': height, 'border': this.state.border}:{}

        return (
            <div style={style} ref={this.refer} id="send-msg-comp" className="send-msg-bar">
                    <div >
                    </div>
                <div onInput={this.handler} className="sender-input">
                    {/* <EditableElement /> */}
                    <div className="parent-input" style={style3}>
                        <div style={style4} className="temp">
                            <img className="droped-img" src={this.state.file_url} alt="" />
                        </div>
                        <textarea autofocus style={style2} id="msg-input" placeholder="Type message" onDragEnter={this.dragenterhandler} onDragLeave={this.dragenterhandler} onDragOver={this.dragoverhandler} onDrop={this.draghandler} ref={this.input_ref} name="" onKeyDown={this.keyhandler} onChange={this.eventhandler} cols="30" rows="10" value={this.state.input_value}></textarea>
                    </div>
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