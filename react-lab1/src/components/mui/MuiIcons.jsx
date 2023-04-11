import { Button, IconButton, Stack, ButtonGroup } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';
import FolderDeleteSharpIcon from '@mui/icons-material/FolderDeleteSharp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


function MuiIcons() {
    return ( 
        <div>
            <Stack spacing={4} direction='row' flexWrap={"wrap"} justifyContent={'center'}>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained'  startIcon={<AcUnitIcon />} onDoubleClick={()=>alert("weather is so cool!")}>Cool</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="error" startIcon={<WbSunnyIcon />} onClick={()=>alert("Weather is so HOT!")}>Sunny</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="secondary" startIcon={<SendSharpIcon />}>Send</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="secondary" endIcon={<SendSharpIcon />}>Send</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="action" startIcon={<DeleteSharpIcon />}>Dump</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="primary" startIcon={<DeleteSharpIcon />} disable disableRipple disableElevation>Dump</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained'  startIcon={<AcUnitIcon />} onDoubleClick={()=>alert("weather is so cool!")}>Cool</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="error" startIcon={<WbSunnyIcon />} onClick={()=>alert("Weather is so HOT!")}>Sunny</Button>
                <Button style={{margin: '10px', display: 'flex'}} variant='contained' color="primary" startIcon={<DeleteSharpIcon />} disable disableRipple disableElevation>Dump</Button>
            </Stack>
            <Stack margin={'20px'} direction='row' justifyContent='center'>
                <DeleteSharpIcon  style={{color: 'gray'}} />
            </Stack>
            <Stack margin={'20px'} direction='row' justifyContent='center'>
                <IconButton color="primary"><FolderDeleteSharpIcon /></IconButton>
                <IconButton color="secondary"><BackspaceSharpIcon /></IconButton>
                <IconButton color="error"><WbSunnyIcon /></IconButton>
                <IconButton color=""><AccessAlarmIcon /></IconButton>
            </Stack>
            <Stack direction={'row'} spacing='4'>
                <ButtonGroup variant='outlined'>
                    <Button style={{background: 'tomato', color: 'white'}}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                    {/* <Button startIcon={<AcUnitIcon />} >Left</Button>
                    <Button color="error" startIcon={<WbSunnyIcon />}>Center</Button>
                    <Button color="action" startIcon={<AccessAlarmIcon />}>Right</Button> */}
                </ButtonGroup>
            </Stack>
        </div>
     );
}

export default MuiIcons;