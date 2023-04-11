import { Box, Stack, ListItemButton, ListItemText, List, ListItem, ListItemIcon, ListSubheader, Collapse, FormControlLabel, Switch, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import { useState } from "react";

import { styled, ThemeProvider, createTheme } from '@mui/material/styles';


import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { Scale } from "@mui/icons-material";


function MuiList() {
    const [open, setopen] = useState(null);
    const [dense, setdense] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [build, setbuild] = useState(null)

    const openhandler = ()=>{
        if(!open){
            setopen('_blank')
        }else{
            setopen(null)
        }
    };

    const densehandler = ()=>{
        if(dense){
            setdense(false)
        }else{
            setdense(true)
        }
    };

    const selecthandler = (index)=>{
        if(selectedIndex===index){
            setSelectedIndex(0)
        }else{
            setSelectedIndex(index)
        }
    }


    return (
        <Box p={4} sx={{bgcolor: "#e7e7e7", width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box p={2} sx={{maxWidth: 320, width: '100%'}}>
                <ThemeProvider
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                    disableTouchRipple: true,
                                },
                            },
                        },
                        palette: {
                            mode: 'dark',
                            primary: { main: 'rgb(102, 157, 246)' },
                            background: { paper: 'rgb(5, 30, 52)' },
                        },
                    })}
                >
                    <Paper>
                        <List  >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        🔥
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: 20,
                                        fontWeight: '700'
                                    }} primary='Firebash' />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton color="primary.main">
                                    <ListItemIcon>
                                        <Home color='primary' />
                                    </ListItemIcon>
                                    <ListItemText sx={{color: 'primary.main'}} primary='Project Overview' />
                                </ListItemButton>
                                <Divider  orientation='vertical' flexItem />
                                <Tooltip title='Project Settings'>
                                    <IconButton disableRipple sx={{
                                        padding: 3,
                                        "& svg": {
                                            position: 'absolute'
                                        },
                                        "&:hover": {
                                            "& svg: first-of-type": {
                                                transform: 'rotate(-20deg) translateX(-20%)',
                                                transition: '0.1s',
                                            },
                                            "& svg: last-of-type": {
                                                transition: '0.1s',
                                                transform: ' translateX(140%)',
                                                opacity: 1
                                            },
                                        }
                                    }}>
                                        <Settings />
                                        <ArrowRight sx={{position: 'absolute', right: '60%', opacity: 0}} />
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={()=>{build?setbuild(null):setbuild('_blank')}}>
                                    <ListItemText primary={'Build'} secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: build ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        display: build ? 'none': 'block'
                                        }}
                                        secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning" /*{!build?<Typography sx={{opacity: build? 0 : 1, transition: '0.2s'}} fontSize={'small'} component={'div'}>Darshan Prajapati</Typography>:''}*/ />
                                    <ListItemIcon sx={{justifyContent: 'end'}}><KeyboardArrowUpIcon sx={{opacity: build? 1 : 0, transform: (build===null)?'rotate(0deg)':'rotate(180deg)', transition: ' 0.2s'}} /></ListItemIcon>
                                    
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={build}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <People  fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontWeight: 'medium',
                                            fontSize: 14
                                        }}  primary='Authentication' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PermMedia fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontWeight: 'medium',
                                            fontSize: 14
                                        }} primary='Database' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Dns fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontWeight: 'medium',
                                            fontSize: 14
                                        }}  primary='Storage' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon >
                                            <Public fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontWeight: 'medium',
                                            fontSize: 14
                                        }}  primary='Hosting' />
                                    </ListItemButton>
                                </ListItem>
                            </Collapse>

                        </List>

                    </Paper>

                </ThemeProvider>
            </Box>

            <Box p={4}>
                <ThemeProvider theme={createTheme({
                    palette: {
                        mode: 'dark',
                    }
                })}>

                    <Paper sx={{textAlign: 'left', p: 2, width: 360}}>
                        <h4 textAlign='left'>React</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eius deleniti consequuntur quod repudiandae corrupti magnam obcaecati quae iure voluptate.</p>
                    </Paper>
                </ThemeProvider>
            </Box>

            <Stack direction={'row'} sx={{width: '100%'}}>
                <Box sx={{width: "50%"}}>
                    <Box sx={{maxWidth: 280, width: '100%', bgcolor: "background.paper"}}>
                        <nav>
                            <List dense={dense} subheader={
                                <ListSubheader sx={{textAlign: 'left'}} component={'div'}>
                                    Nested List Items
                                </ListSubheader>
                            }>
                                <ListItem  disablePadding>
                                    <ListItemButton selected={selectedIndex===1} onClick={()=>selecthandler(1)} component='a' href="#index">
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Sent mail' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton selected={selectedIndex===2} onClick={()=>selecthandler(2)} component='a' href="#drafts">
                                        <ListItemIcon disablePadding>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Drafts' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={openhandler} component='a' href="#index">
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Inbox' />
                                        <ListItemIcon sx={{justifyContent: "end"}}>
                                            {
                                                open? <ExpandLess /> : <ExpandMore />
                                            }
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={open}>
                                    <List dense={dense} disablePadding>
                                        <ListItem disablePadding>
                                            <ListItemButton  sx={{pl: 4}} selected={selectedIndex===3} onClick={()=>selecthandler(3)}>
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                                <ListItemText primary='All mail' />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton  sx={{pl: 4}} selected={selectedIndex===4} onClick={()=>selecthandler(4)}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary='Starred' />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                
                            </List>
                                <Divider />
                            <List dense={dense}>
                                <ListItem disablePadding>
                                    <ListItemButton selected={selectedIndex===5} onClick={()=>selecthandler(5)} component='a' href="#trash">
                                        <ListItemText primary='Trash' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton selected={selectedIndex===6} onClick={()=>selecthandler(6)} component='a' href="#spam">
                                        <ListItemText primary='Spam' />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>

                </Box>
                <ThemeProvider theme={createTheme({
                    palette: {
                        mode: 'dark',
                        text: {
                            primary: 'rgb(102, 200, 246)'
                        },
                        primary: {main: 'rgb(102, 1, 246)'},
                        // primary: '',
                        // success: 'rgb(102, 157, 246)'

                    }
                })}>

                    <Box sx={{width: '40%'}}>
                        <FormControlLabel sx={{background: 'background.paper'}} onClick={densehandler} label={<ListItemText primary='Dense' />} control={<Switch />} />
                        <Box sx={{bgcolor: 'background.paper'}}>
                            <List dense={dense} subheader={
                                <ListSubheader component={'div'} sx={{textAlign: 'left'}}>
                                    Settings
                                </ListSubheader>
                            }>
                                <ListItem>
                                    <ListItemIcon>
                                        <WifiIcon />
                                    </ListItemIcon>
                                    <ListItemText sx={{color: 'text.primary'}} primary='Wi-Fi' />
                                    <ListItemButton sx={{justifyContent: 'end'}}>
                                        <Switch  />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BluetoothIcon />
                                    </ListItemIcon>
                                    <ListItemText sx={{color: 'text.primary'}} primary='Bluetooth' />
                                    <ListItemButton sx={{justifyContent: 'end'}}>
                                        <Switch />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Stack>
        </Box>
     );
}

export default MuiList;