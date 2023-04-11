import { Button, IconButton, Stack, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';
import FolderDeleteSharpIcon from '@mui/icons-material/FolderDeleteSharp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import ForamtItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React from "react";
import { useState } from "react";

function MuiToggleButton() {

    const [formats, setformats] = useState([])
    const [style, setstyle] = useState({})
    const [text, settext] = useState('')
    console.log('-----------', formats)
    const handleChangeEvent = (e, value)=>{
        // console.log(e)
        console.log(value)
        setformats(value)
        var s = {}
        for(var i of value){
            if(i === 'italic'){
                s.fontStyle = 'italic'
            }else if(i === 'bold'){
                s.fontWeight = 'bold'
            }else{
                s.textDecoration = 'underline'
            }
        }
        setstyle(s)

    }

    return ( 
        <Stack justifyContent={'center'}>
            <ToggleButtonGroup value={formats} onChange={handleChangeEvent}>
                <ToggleButton value='bold' aria-label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value='italic' aria-label="italic">
                    <ForamtItalicIcon />
                </ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined">
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <div><input type="text" onChange={(e)=>settext(e.target.value)} /></div>
            <div style={style}>{text}</div>
        </Stack>
     );
}

export default MuiToggleButton;