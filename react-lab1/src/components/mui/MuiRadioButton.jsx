import {Stack, Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material"

function MuiRadioButton() {
    return ( 
        <Box>
            <FormControl>
                <FormLabel>
                    <Box textAlign={'left'}>
                        Years of experience
                    </Box>
                </FormLabel>
                <div>
                <RadioGroup onChange={(e, v)=>{console.log(v)}}  name="job-experience-group">
                    <Stack direction={'row'}>
                        <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                        <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                    </Stack>
                </RadioGroup>
                </div>
            </FormControl>

        </Box>
     );
}

export default MuiRadioButton;