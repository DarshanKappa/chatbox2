import { Button, Stack } from "@mui/material";


function MuiBotton() {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} justifyContent='center' direction='row' display='block'>
                <Button variant='text' href="https://www.google.com" target="_blank">Google</Button>
                <Button variant='contained' href="https://www.facebook.com" target="_blank">FaceBook</Button>
                <Button variant='outlined' href="https://www.amazon.com" target="_blank">Amazon</Button>

            </Stack>

            <Stack direction='row' justifyContent='space-between'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="warning">Warning</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
                <Button variant="text" color="primary">Primary</Button>
                <Button variant="text" color="secondary">Secondary</Button>
                <Button variant="text" color="success">Success</Button>
                <Button variant="text" color="error">Error</Button>
                <Button variant="text" color="info">Info</Button>
                <Button variant="text" color="warning">Warning</Button>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
                <Button variant="outlined" color="primary">Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
                <Button variant="outlined" color="info">Info</Button>
                <Button variant="outlined" color="warning">Warning</Button>
            </Stack>
            <Stack spacing={3} display={'block'} direction='row'>
                <Button variant="contained" size='large' >Large</Button>
                <Button variant="contained" size='medium' >Medium</Button>
                <Button variant="contained" size='small' >Small</Button>
            </Stack>
        </Stack>
    );
}

export default MuiBotton;