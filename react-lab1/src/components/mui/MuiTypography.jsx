import { Typography } from '@mui/material'

function MuiTypography() {
    return ( 
        <div>
            Darshan
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2' component='h5'>h2 Heading</Typography>
            <Typography variant='h3' gutterBottom='true'>h3 Heading</Typography>
            <Typography variant='h4'>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>Sub Title 1</Typography>
            <Typography variant='subtitle2'>Sub Title 2</Typography>

            <Typography variant='body1'>Body 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae officia inventore molestiae. Quas tempore odit, voluptatibus itaque illum error suscipit, excepturi ipsam assumenda reprehenderit obcaecati sint, voluptatem corporis blanditiis!
            </Typography>
            
            <Typography variant='body2'><strong> Body 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ducimus adipisci corporis rerum, dolorum eos consequatur, alias neque fugit quidem quaerat saepe praesentium qui blanditiis incidunt excepturi quod eveniet fuga!
            </strong></Typography>
            
        </div>
     );
}

export default MuiTypography;