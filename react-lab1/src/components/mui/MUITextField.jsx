import { InputAdornment, Stack, TextField } from "@mui/material"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from "react";




function MuiTextField() {
    const [value, setvalue] = useState('')
    const [error, seterror] = useState('')
    console.log()
    const valueHandler = (e) => {
        setvalue(e.target.value)
        console.log(e.target.value)
        var value = e.target.value
        if(isNaN(value)){
            seterror('Only Number allowed')
        }else{
            seterror('')
        }
    }
    return ( 
        <Stack spacing={10}>
            <Stack direction={'column'} spacing={5}>
                
                <TextField label='Name' color="primary" variant="outlined" />
                <TextField label='Name' color='error' variant="filled" />
                <TextField label='Name' color='action' variant="standard" />

                <TextField label='Name'  variant="outlined" helperText={error} error={error} required
                    onChange={valueHandler} value={value}
                />
                <TextField label='Name'  variant="outlined" helperText='Enter you name'/>

                <TextField label='Name'  variant="outlined" helperText='Enter you name'/>
                <TextField label='Password'  variant="outlined" helperText='Enter your Password' type='password'/>
                <TextField label='Date' variant="outlined" helperText='Enter Date' type='date' defaultValue={"2000-11-11"} disabled/>
                <TextField label='Read Only' InputProps={{ readOnly: true }} variant="outlined" helperText='Enter you name' value='Darshan Prajapati'/>
                <TextField label='Name'  variant="outlined" helperText='Enter you name'/>
            </Stack>
            <Stack spacing={5}>
                <TextField
                    label='Amount'
                    type='number'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    label='Amount'
                    type='number'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'><CurrencyRupeeIcon fontSize="small" /></InputAdornment>
                    }}
                />
                <TextField
                    label='Weight'
                    type='number'
                    InputProps={{
                        endAdornment: <InputAdornment position='start'>kg</InputAdornment>
                    }}
                />
            </Stack>
        </Stack>
     );
}

export default MuiTextField;