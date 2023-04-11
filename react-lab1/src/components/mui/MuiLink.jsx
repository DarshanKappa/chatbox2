import { Stack, Link, Typography } from "@mui/material";


function MuiLink() {
    return ( 
        <Stack spacing={2} direction='row' m={4}>
            <Link variant="h4" href='#'>Link</Link>
            <Typography variant="h5">
                <Link color={'secondary'} underline='none' href='#'>Secondary Link</Link>
            </Typography>
        </Stack>
     );
}

export default MuiLink;