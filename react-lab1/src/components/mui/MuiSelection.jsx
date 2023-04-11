import { Box, TextField, MenuItem } from "@mui/material";


function MuiSelection() {
    return ( 
        <Box style={{textAlign: 'left'}} display={'flex'} width='250px'>
            <TextField fullWidth label='Select country' value={['IN', 'US','AU']} select SelectProps={{multiple: true}} error helperText='Please select a country'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
     );
}

export default MuiSelection;