import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import "../../test.css"


function MuiLayout() {
    return (
        <Paper sx={{margin: '32px'}} elevation={2}>
            <Box p={'0 30px'} display={'flex'} alignItems='center' flexDirection='column' justifyContent='center'>
                <Stack spacing={'5px'} padding='10px 0' divider={<Divider orientation='' flexItem />}>
                    <Box className="box" component={'div'} sx={{
                        backgroundColor: 'primary.dark',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        textAlign: 'center',
                        padding: '16px',
                    }}>
                        Code Volution
                    </Box>
                    <Box className="box" component={'div'} sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        textAlign: 'center',
                        padding: '16px',
                    }}>
                        Code Volution
                    </Box>
                    <Box className="box" component={'div'} sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        textAlign: 'center',
                        padding: '16px',
                    }}>
                        Code Volution
                    </Box>
                </Stack>
                <Grid justifyContent={'center'} container m={'20px'} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='red' p={'10px'}>Item 1</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='green' p={'10px'}>Item 2</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='primary.light' p={'10px'}>Item 3</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor='secondary.main' p={'10px'}>Item 4</Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
     );
}

export default MuiLayout;