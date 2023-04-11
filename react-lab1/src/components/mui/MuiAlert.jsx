import { Alert, AlertTitle, Box, Button, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';




function MuiAlert() {
    return ( 
        <Box p={4}>
            <Stack direction={'row'} justifyContent='space-between' spacing={2}>

                <Stack spacing={1}>
                    <Alert severity="success">
                        <AlertTitle textAlign='left'>Success</AlertTitle>
                        This is an <strong>success</strong> alert -- check out</Alert>
                    <Alert severity="error" onClose={()=>{}}>
                        <AlertTitle textAlign='left'>Error</AlertTitle>
                        This is an <strong>error</strong> alert -- check out</Alert>
                    <Alert severity="info" action={<Button>UNDO</Button>}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert -- check out</Alert>
                    <Alert severity="info" action={<Button>UNDO</Button>} icon={<CheckIcon />}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert -- check out</Alert>
                    <Alert severity="warning">
                        <AlertTitle textAlign='left'>Warning</AlertTitle>
                        This is an <strong>warning</strong> alert -- check out</Alert>
                </Stack>

                <Stack spacing={1}>
                    <Alert variant="filled" severity="success">
                        <AlertTitle textAlign='left'>Success</AlertTitle>
                        This is an <strong>success</strong> alert -- check out</Alert>
                    <Alert variant="filled" severity="error" onClose={()=>{}}>
                        <AlertTitle textAlign='left'>Error</AlertTitle>
                        This is an <strong>error</strong> alert -- check out</Alert>
                    <Alert variant="filled" severity="info" action={<Button>UNDO</Button>}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert -- check out</Alert>
                    <Alert variant="filled" severity="info" action={<Button>UNDO</Button>} icon={<CheckIcon />}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert -- check out</Alert>
                    <Alert variant="filled" severity="warning">
                        <AlertTitle textAlign='left'>Warning</AlertTitle>
                        This is an <strong>warning</strong> alert -- check out</Alert>
                </Stack>

                <Stack spacing={1}>
                    <Alert variant="outlined" severity="success">
                        <AlertTitle textAlign='left'>Success</AlertTitle>
                        This is an <strong>success</strong> alert -- check out</Alert>
                    <Alert variant="outlined" severity="error" onClose={()=>{}}>
                        <AlertTitle textAlign='left'>Error</AlertTitle>
                        This is an <strong>error</strong> alert -- check out</Alert>
                    <Alert variant="outlined" severity="info" action={<Button>UNDO</Button>}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert --check out</Alert>
                    <Alert variant="outlined" severity="info" action={<Button>UNDO</Button>} icon={<CheckIcon />}>
                        <AlertTitle textAlign='left'>Information</AlertTitle>
                        This is an <strong>info</strong> alert -- check out</Alert>
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle textAlign='left'>Warning</AlertTitle>
                        This is an <strong>warning</strong> alert -- check out</Alert>
                </Stack>

            </Stack>
        </Box>
     );
}

export default MuiAlert;