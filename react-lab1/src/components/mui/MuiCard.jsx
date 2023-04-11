import { Box, Card, CardContent, Typography, CardActions, Button, Tooltip, CardMedia } from "@mui/material";
import { DeleteForeverOutlined } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';


function MuiCard() {
    return ( 
        <Box p={5} textAlign='left' width='350px'>
            <Card>
                <CardMedia
                    component={'img'}
                    height='140'
                    image='https://images.unsplash.com/photo-1671644988451-de17597de2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        React
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores laboriosam maxime labore, nobis iste ipsum quam eius? Quae provident voluptatibus illo sint expedita autem fugiat, quod id non similique.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button title='share' variant='text' size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
                    <Tooltip title='Add to cart' arrow>
                        <Button size='small'>Add</Button>
                    </Tooltip>
                    <Tooltip followCursor title='Delete the card' arrow>
                        <Button>
                            <DeleteIcon color="primary" />

                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        </Box>
     );
}

export default MuiCard;