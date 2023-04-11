import { Box, Checkbox, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import { useEffect, useState, memo } from "react";



const StyledTableRow = styled(TableRow)(({ theme })=>({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
}))


function Rows({ row, fun, selected }) {

    var select = selected===undefined?false:selected

    // console.log(select)

    return ( 
        <StyledTableRow
            key={1}
            role="checkbox"

            aria-checked={true}
            selected={select}
            onClick={(e)=>{console.log(select); fun(e, select===true?false:true, row.id)}}
        >
            <TableCell><Checkbox checked={select} /></TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell sx={{textAlign: 'right'}}>{row.first_name}</TableCell>
            <TableCell sx={{textAlign: 'right'}}>{row.last_name}</TableCell>
            <TableCell sx={{textAlign: 'right'}}>{row.email}</TableCell>
            <TableCell sx={{textAlign: 'right'}}>{row.gender}</TableCell>
            <TableCell sx={{textAlign: 'right'}}>{row.ip_address}</TableCell>
        </StyledTableRow>
     );
}

export default memo(Rows);