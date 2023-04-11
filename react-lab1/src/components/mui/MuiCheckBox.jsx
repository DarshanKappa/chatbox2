import {Box, FormControlLabel, Radio, Checkbox, FormGroup} from "@mui/material"

function MuiCheckBox() {
    return ( 
        <Box>
            <Box textAlign='left'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, excepturi aspernatur! Placeat amet veniam eaque illo cumque beatae ea error dicta ipsa magni, dolor maxime, at, commodi unde. Hic, itaque!
                </p>
                <Box textAlign='left'>
                    <FormGroup onChange={(e,v)=>{console.log('==========================', e, v)}}>
                        <FormControlLabel size='Small' label='I accept terms and conditions' value='tc' control={<Checkbox />}/>
                        <FormControlLabel label='I am ready to start' value='rs' control={<Checkbox />}/>
                    </FormGroup>
                </Box>
            </Box>
        </Box>
     );
}

export default MuiCheckBox;