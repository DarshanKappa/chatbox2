import { Box, Chip, Stack, Avatar } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


function MuiChip() {
    return ( 
        <Stack p={4} flexWrap='wrap' direction='row' >
            
            <Chip sx={{margin: 2}} label='Chip Filled' onClick={()=>{}} />
            <Chip sx={{margin: 2}} label="Chip Outlined" variant="outlined" onClick={()=>{}} />

            <Chip sx={{margin: 2}} label='Clickable Delatable' onDelete={()=>{}} />
            <Chip sx={{margin: 2}} label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} label='Clickable Delatable' onClick={()=>{}} onDelete={()=>{}} />
            <Chip sx={{margin: 2}} label="Clickable Delatable" onClick={()=>{}} variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} component='a' href='#clickable-link-filled' label='Clickable link' clickable />
            <Chip sx={{margin: 2}} component='a' href='#clickable-link-outlined' label="Clickable link" variant="outlined" clickable />

            <Chip sx={{margin: 2}} component='a' href='#' deleteIcon={<DoneIcon />} label='Custom delet icon' onDelete={()=>{console.log('delete')}} />
            <Chip sx={{margin: 2}} deleteIcon={<DeleteIcon />} label="Custom delet icon" onDelete={()=>{}} variant="outlined" clickable />

            <Chip sx={{margin: 2}} label='Darshan Prajapati' avatar={<Avatar>DP</Avatar>} />
            <Chip sx={{margin: 2}} label='Tvisha Patel' variant="outlined" avatar={<Avatar src="https://mui.com/static/images/avatar/3.jpg" />} />

            <Chip sx={{margin: 2}} color='primary' label='Clickable Delatable' onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='primary' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='error' label='Clickable Delatable' onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='error' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='secondary' label='Clickable Delatable' onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='secondary' variant="outlined" label='Clickable Delatable' onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='success' label="Clickable Delatable" onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='success' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='warning' label="Clickable Delatable" onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='warning' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='info' label="Clickable Delatable" onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='info' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} size='small' color='info' label="Clickable Delatable" onDelete={()=>{}} />
            <Chip sx={{margin: 2}} size='small' color='info' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />

            <Chip sx={{margin: 2}} color='info' label="Clickable Delatable" onDelete={()=>{}} />
            <Chip sx={{margin: 2}} color='info' label="Clickable Delatable" variant="outlined" onDelete={()=>{}} />
        </Stack>

     );
}

export default MuiChip;