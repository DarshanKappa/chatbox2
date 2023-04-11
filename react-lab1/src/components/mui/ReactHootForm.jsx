import { useForm } from "react-hook-form";
import {Box, Stack, TextField, Button, Radio, RadioGroup, FormControlLabel,
        FormLabel, MenuItem} from '@mui/material'
import { useState } from "react";

function ReactHookForm() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    const [pl, setpl] = useState([]);
    console.log(pl)

    const onSubmit = (data) => {
        console.log(data)
        console.log('------------------')
    }

    const addPL = (e, v)=>{
        var value = e.target.value[e.target.value.length-1]
        var index = pl.indexOf(value)
        if(index === -1){
            setpl([...pl, value])
        }else{
            setpl((v)=>{v.splice(index, 1); return v})
        }
    }

    return (
        <Box>
            <h2>React Form Hook</h2>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3} padding="0 20%">
                        <TextField variant="outlined" type='text' label="First Name" helperText='Enter your first name' required {...register('first_name')}/>
                        <TextField variant="outlined" type='text' label="Last Name" helperText='Enter your last name' required {...register('last_name', {required: true})}/>
                        <TextField variant="outlined" type='email' label="Email" helperText='Enter your email' required {...register('email', {required: true})}/>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="gender">
                            <FormLabel id="demo-radio-buttons-group-label" style={{textAlign: 'left'}}>Gender</FormLabel>
                            <Stack direction={'row'}>
                                <FormControlLabel label='Male' value='M' control={<Radio {...register('gender')} />} />
                                <FormControlLabel label='Female' value='F' control={<Radio {...register('gender')} />} />
                                <FormControlLabel label='Other' value='O' control={<Radio {...register('gender')} />} />
                            </Stack>
                        </RadioGroup>
                        <TextField defaultValue={'2000-01-01'} variant="outlined" type='date' label="Date" helperText='Enter any date' required {...register('date', {required: true})}/>
                        <TextField style={{textAlign: 'left'}} select SelectProps={{multiple: true}} label='Programming Languages'
                            >
                            <MenuItem value='python'>Python</MenuItem>
                            <MenuItem value='javascript'>JavaScript</MenuItem>
                            <MenuItem value='java'>Java</MenuItem>
                            <MenuItem value='ruby'>Ruby</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                            <MenuItem value='cpp'>C++</MenuItem>
                            <MenuItem value='cs'>C#</MenuItem>
                            <MenuItem value='sql'>SQL</MenuItem>
                            <MenuItem value='go'>Go</MenuItem>

                        </TextField>
                        <TextField variant="outlined" type='password' label="Password" helperText='Enter password' required {...register('password', {required: true})}/>
                        <TextField variant="outlined" type='password' label="Confirm Password" helperText='Again enter same password' required {...register('confirm_password', {required: true})}/>
                        <Button type='submit' variant='contained'>Submit</Button>
                        {/* <TextField type='submit' variant='outlined' /> */}
                    </Stack>
                </form>
            </Box>
        </Box>
    );

    // return ( 
    //     <div>
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             <div>
    //                 <input type="email" name="email" id="" placeholder='Enter email' {...register('email', {required: true})}/>
    //                 {errors.email && <div>This field is required</div>}
    //             </div>
    //             <div>
    //                 <input type="password" name="password" id="" placeholder='Enter password' {...register('password')}/>
                 
    //             </div>
    //             <div>
    //                 <input type="submit" />
    //             </div>
    //         </form>
    //     </div>

    //  );
}

export default ReactHookForm;