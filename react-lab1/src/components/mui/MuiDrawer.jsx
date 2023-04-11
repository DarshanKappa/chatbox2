import { Drawer, Typography, Box, Stack, Divider, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";


function MuiDrawer() {
    const [open, setopen] = useState(false)
    const [side, setside] = useState('')

    const handleBar = (side)=>{
        setside(side)
        setopen(true)
    }

    const handleClose = ()=>{
        setopen(false)
    }

    return (
        <Box m={2}>
            <ButtonGroup>
                <Button variant="contained" onClick={()=>handleBar('left')}>Left</Button>
                <Button variant="contained" onClick={()=>handleBar('top')}>Top</Button>
                <Button variant="contained" onClick={()=>handleBar('right')}>Right</Button>
                <Button variant="contained" onClick={()=>handleBar('bottom')}>Bottom</Button>
            </ButtonGroup>
            <Drawer onClose={handleClose} anchor={side} open={open}>
                <Stack divider={<Divider sx={{margin: '10px 0px'}} flexItem />} m={2}>
                    <Typography onClick={handleClose} variant="span">Home</Typography>
                    <Typography onClick={handleClose} variant="span">About</Typography>
                    <Typography onClick={handleClose} variant="span">Blog</Typography>
                </Stack>
            </Drawer>

        </Box>
     );
}

export default MuiDrawer;