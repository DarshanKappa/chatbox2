import { Box, Button } from "@mui/material";
// import MessageSnacker  from "./MuiSnackbarHook";
import MuiSnackBars from "./MuiSnackbars";
import MessageSnacker from "./MuiSnackbarHook";


function TestHook() {

    // const Hook = SnackMessageHook()

    return (
        <Box>
            <Button onClick={()=>{}}>Send Message</Button>
            <MessageSnacker />
        </Box>
     );
}

export default TestHook;