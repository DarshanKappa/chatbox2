import { Box, Breadcrumbs, Link, Typography } from "@mui/material";


function MuiBreadcrumbs() {
    return ( 
        <Box m={2}>
            <Breadcrumbs separator={'>'}>
                <Link underline="hover" href='#home'>Home</Link>
                <Link underline="hover" href='#catalog'>Catalog</Link>
                <Link underline="hover" href='#accessories'>Accessories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
     );
}

export default MuiBreadcrumbs;