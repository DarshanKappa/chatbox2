import { Typography, AppBar, Box, IconButton, Toolbar, Button, TextField, InputBase, Stack, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextFields } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";


function MuiAppBar() {

    const [anchorEl, setanchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (e)=>{
        console.log(e)
        setanchorEl(e.target)
    }

    const handleClose = (e)=>{
        setanchorEl(null)
    }

    return ( 
        <Box sx={{color: 'white', flexGrow: 1, padding: '15px', height: '1000px'}}>
            <AppBar sx={{position: 'sticky' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge='start'
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleClick}
                        aria-control={open? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open?'true': undefined}
                        id='resources-button'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" conponent='div' sx={{textAlign: 'left'}}>Photos</Typography>
                    <Box mx={1} display="flex" sx={{flexGrow: 1, textAlign: 'center'}}>
                        <Box px={1} py={.3} sx={{display: 'flex', background: '#4e98e1', borderRadius: '3px'}}>
                            {/* <SearchIcon /> */}
                            {/* <TextField variant='standard' boo borderColor='white' sx={{}} InputProps={{
                                startAdornment: <startAdornment><SearchIcon /></startAdornment>
                            }} /> */}
                            <Stack px={1} justifyContent={'center'}>
                                <SearchIcon />
                            </Stack>
                            <Stack justifyContent={'center'}>
                                <InputBase placeholder="Search..." sx={{color: 'white'}} />
                            </Stack>
                            {/* <Stack>
                            </Stack> */}
                        </Box>
                    </Box>

                    <Menu anchorEl={anchorEl} open={open} id='resources-menu' MenuListProps={{
                        'aria-labelledby': 'resources-button'
                        }}
                        onClose={handleClose}>

                            <MenuItem>Blog</MenuItem>
                            <MenuItem>Podcast</MenuItem>
                    </Menu>

                    <Stack marginLeft={1} p={1} justifyContent='center' sx={{position: 'relative', display: 'inline-flex'}}>
                        <Box py={0.2} px={0.5} sx={{backgroundColor: 'red', display: 'inline-block', position: 'absolute', top: 0, right: 0, borderRadius: '100px'}}>4</Box>
                        <EmailIcon />
                    </Stack>
                    <Stack marginLeft={1} p={1} justifyContent='center' sx={{position: 'relative', display: 'inline-flex'}}>
                        <Box py={0.2} px={0.5} sx={{backgroundColor: 'red', display: 'inline-block', position: 'absolute', top: 0, right: 0, borderRadius: '100px'}}>17</Box>
                        <NotificationsIcon />
                    </Stack>
                    <Button color='inherit'><AccountCircleIcon /></Button>
                </Toolbar>
            </AppBar>
            {/* <Stack>
                <Box sx={{height: '150px', backgroundColor: 'red'}}>1</Box>
                <Box sx={{height: '150px', backgroundColor: 'blure'}}>2</Box>
                <Box sx={{height: '150px', backgroundColor: 'green'}}>3</Box>
                <Box sx={{height: '150px', backgroundColor: 'yellow'}}>4</Box>
                <Box sx={{height: '150px', backgroundColor: 'pink'}}>5</Box>
                <Box sx={{height: '150px', backgroundColor: 'red'}}>6</Box>
                <Box sx={{height: '150px', backgroundColor: 'red'}}>1</Box>
                <Box sx={{height: '150px', backgroundColor: 'blure'}}>2</Box>
                <Box sx={{height: '150px', backgroundColor: 'green'}}>3</Box>
                <Box sx={{height: '150px', backgroundColor: 'yellow'}}>4</Box>
                <Box sx={{height: '150px', backgroundColor: 'pink'}}>5</Box>
                <Box sx={{height: '150px', backgroundColor: 'red'}}>6</Box>
            </Stack> */}
        </Box>
     );
}

export default MuiAppBar;