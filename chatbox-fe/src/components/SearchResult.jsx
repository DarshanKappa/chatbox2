import axios from "axios";
import React, { Component, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import { instanceOf } from "prop-types";
// import { withCookies, Cookies } from "react-cookie";
import "./css/Search.css"

function SearchResult({data}) {
    // console.log('------------in-------------')
    // console.log(data.username)

    const [cookies, setCookies] = useCookies('')
    let navigate = useNavigate();

    const [box_border_color, setbox_border_color] = useState('rgb(189 189 189)')
    const [display1, setdisplay1] = useState('none')
    const [bg1, setbg1] = useState('')
    const [color1, setcolor1] = useState('')
    const [shadow_color1, setshadow_color1] = useState('')
    const [button_value1, setbutton_value1] = useState('')

    const [display2, setdisplay2] = useState('none')
    const [bg2, setbg2] = useState('')
    const [color2, setcolor2] = useState('')
    const [shadow_color2, setshadow_color2] = useState('')
    const [button_value2, setbutton_value2] = useState('')
    let is_clickable = false

    // Gray
    // let box_border_color = "rgb(189 189 189)"
    // let bg = "rgb(249 249 249)"
    // let color =  "rgb(118 118 118)"
    // let shadow_color = "rgb(106 106 106)"

    // Blue
    // setdisplay("block")
    // setbox_border_color("rgb(161 183 255)")
    // setbg("#ffffff")
    // setcolor("rgb(103 139 255)")
    // setshadow_color("rgb(161 183 255)")
    // setbutton_value("Request")
    
    // Green
    // let box_border_color = "#8ddb14"
    // let bg = "#ffffff"
    // let color =  "#64a500"
    // let shadow_color = "#88e100"

    let style = {"borderColor": box_border_color}
    let style1 = {
        "display": display1,
        "backgroundColor": bg1,
        "color": color1,
        "boxShadow": `0px 0px 5px -2px ${shadow_color1}`
    }
    let style2 = {
        "display": display2,
        "backgroundColor": bg2,
        "color": color2,
        "boxShadow": `0px 0px 5px -2px ${shadow_color2}`
    }

    const eventHandler = (e)=>{
        console.log(is_clickable)
        // console.log(display1)
        if(is_clickable | display1 === 'none'){
            console.log('eventHandler')
            console.log(data)
            
            axios.get('http://localhost:8000/user-detail', {headers:{Authorization: `Token ${cookies.token}`}, params: {user_id: data.id}})
            .then(res=>{
                console.log(res.data)
                var status = res.data.status
                if(status===0){
                    setdisplay1("block")
                    setbox_border_color("rgb(161 183 255)")
                    setbg1("#ffffff")
                    setcolor1("rgb(103 139 255)")
                    setshadow_color1("rgb(161 183 255)")
                    setbutton_value1("Request")
                    setdisplay2("none")
                }
                if(status===1){
                    setdisplay1("block")
                    setbg1("#ffffff")
                    setcolor1("rgb(103 139 255)")
                    setbutton_value1("Open")
                    // setdisplay("none")
                    setbox_border_color("white")
                    setdisplay2("none")
                }
                if(status===2){
                    setdisplay1("block")
                    setbox_border_color("rgb(189 189 189)")
                    setbg1("rgb(249 249 249)")
                    setcolor1("rgb(118 118 118)")
                    setshadow_color1("rgb(106 106 106)")
                    setbutton_value1("Requested")
                    setdisplay2("none")
                }
                if(status===3){
                    setdisplay1("block")
                    setbox_border_color("#8ddb14")
                    setbg1("#ffffff")
                    setcolor1("#64a500")
                    setshadow_color1("#88e100")
                    setbutton_value1("Accept")

                    setdisplay2("block")
                    setbox_border_color("#8ddb14")
                    setbg2("#ffffff")
                    setcolor2("tomato")
                    setshadow_color2("tomato")
                    setbutton_value2("Reject")
                }
            }).catch(e=>{
                console.log(e)
            })
        }
    }

    const buttonHandler = (e)=>{
        console.log('----------clicked---------')
        var action = ''
        if(button_value1 === "Request" | button_value1 === "Requested"){
            action = 2
        }
        if(button_value1 === "Accept"){
            action = 1
        }
        if(button_value1 === "Open"){
            navigate(`/chat/${data.id}/${data.username}`)
        }
        if(action !== ''){
            const headers = {
                Authorization: `Token ${cookies.token}`
                }
            const configs = {
                    headers: headers,
                    }
            const request_data = {
                    user_id: data.id,
                    action: action
                }
            axios.post('http://localhost:8000/request-accept-reject', request_data, configs)
            .then(res=>{
                console.log(res.data)
                is_clickable = true
                eventHandler(e)
            }).catch(e=>{
                console.log(e)
            })
        }
    }

    const rejectbuttonHandler = (e)=>{
        console.log('----------clicked---------')
        var action = ''
        if(button_value2 === "Reject"){
            action = 0
        }
        if(action !== ''){
            const headers = {
                Authorization: `Token ${cookies.token}`
                }
            const configs = {
                    headers: headers,
                    }
            const request_data = {
                    user_id: data.id,
                    action: action
                }
            axios.post('http://localhost:8000/request-accept-reject', request_data, configs)
            .then(res=>{
                console.log(res.data)
                is_clickable = true
                eventHandler(e)
            }).catch(e=>{
                console.log(e)
            })
        }
    }

    return ( 
        <div style={style} onClick={eventHandler} className="search-result">
            <div className="left-result">
                <div className="result-username">
                {data.username}
                </div>
                <div className="result-full-name">
                <span>{data.first_name}</span>&nbsp;<span>{data.last_name}</span>
                </div>
            </div>
            <div className="results-buttons">
                <div className="result-send-request-button">
                    <div  style={style1} onClick={buttonHandler} className="result-inner-button">{button_value1}</div>
                    <div  style={style2} onClick={rejectbuttonHandler} className="result-inner-button">{button_value2}</div>
                </div>
            </div>
        </div>
     );
}

export default SearchResult;