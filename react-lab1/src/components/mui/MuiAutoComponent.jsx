import { Stack, Autocomplete, TextField } from '@mui/material'
import React from 'react'


const skills = ['HTML', 'CSS', "JavaScript", "Java", "Python", "C", "C++"]

export const MuiAutoComponent = () => {
    const l = [1,2,3,4,5]
    console.log({l})
  return (
    <Stack spacing={2} width="30vw" padding={'25px'}>
        <Autocomplete onChange={(e, v)=>{console.log(v)}} options={skills} renderInput={(params)=> <TextField {...params} label='skills' />} />
    </Stack>
  )
}
