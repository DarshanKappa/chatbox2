import { Box, Button } from "@mui/material";
import { useState } from "react";
import MuiSnackBars from "./MuiSnackbars";



function MessageSnacker() {

    const [parentQueue, setParentQueue] = useState([])
    const [count, setcount] = useState(0)



    // const action = (x)=>{
    //     if(x){
    //         setParentQueue(v=>[...v, 'darshan'])
    //         setcount((count+1)%100)
    //     }else{
    //         setParentQueue(v=>{v.pop(); return v})
    //         setcount((count+1)%100)
    //     }
    // }

    // console.log(parentQueue)

    const action = ()=>{
        console.log('action exicutting...')
    }

    return (
        <>
            {/* <Box spacing={2}>
                <Button  variant="contained" onClick={()=>action(true)}>Add</Button>
                <Button color='error' variant="contained" onClick={()=>action(false)}>Delete</Button>
            </Box>             */}
            <MuiSnackBars action={action} refreshCount={count} setParentQueue={setParentQueue} parentQueue={parentQueue} parentQueue1={[{message: 'Hi'}, {message: 'Hello, Darshan !'}]} />
        </>
    );
    // return [parentQueue, NewHook];
}

export default MessageSnacker;