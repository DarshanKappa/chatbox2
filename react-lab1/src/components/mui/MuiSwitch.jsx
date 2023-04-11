import {Box, FormControl, FormControlLabel, Switch, Rating, Stack} from "@mui/material"
import { useState } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function MuiSwitch() {
    const [dark, setDark] = useState(false)
    const [star, setstar] = useState(0)
    console.log(dark, star)
    return ( 
        <Box height={'100vw'} style={{backgroundColor: dark?'black':'white', color: dark?'white':'black'}}>
            <Box>
                <FormControlLabel label='Dark Mode' control={<Switch color="success" onChange={(e,v)=>{setDark(v)}}/>}/>
            </Box>
            <Stack  padding='15px' justifyContent={'center'} direction='row'>
                <Rating value={star} precision={0.5} emptyIcon={<StarBorderIcon style={{color: dark?'gray':''}} />} readOnly onChange={(e,v)=>{setstar(star+0.5>5?0:star+0.5)}} />
                {/* <img src="data:image/png;base64,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" data-deferred="1" class="rg_i Q4LuWd" jsname="Q4LuWd" width="195" height="195" alt="Cloud server - Free computer icons" data-iml="1144.0999999996275" data-atf="true"></img>
                <img src="data:image/png;base64,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" data-deferred="1" class="rg_i Q4LuWd" jsname="Q4LuWd" width="195" height="195" alt="Server - Free technology icons" data-iml="972" data-atf="true"></img> */}
            </Stack>
        </Box>
     );
}

export default MuiSwitch;