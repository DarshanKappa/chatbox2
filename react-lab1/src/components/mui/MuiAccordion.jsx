import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, CardMedia, CardActions, Button, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react";


function MuiAccordion() {
    const [expended, setexpended] = useState(false)

    const handler = (v, panel)=>{
        if(panel==expended){
            setexpended(false)
        }else{
            setexpended(panel)
        }
    }

    return ( 
        <Box p={5} width='500px'>
            <Accordion expanded={expended==='panel1'} elevation={2} onChange={(e,v)=>handler(v, 'panel1')}>
                <AccordionSummary id='panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>React</AccordionSummary>
                <AccordionDetails>
                    <CardMedia
                        component={'img'}
                        height='140'
                        image='https://images.unsplash.com/photo-1671644988451-de17597de2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
                    />
                    <Typography p={2} textAlign='left' color={'gray'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod sit perspiciatis, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, saepe. dolore impedit aliquam eligendi magni! Sit, dolor sint reiciendis accusamus neque odio doloribus eos quisquam labore rerum optio ullam deleniti repellat aut in hic. Placeat soluta ducimus debitis.
                    </Typography>
                    <CardActions>
                        <Button title='share' variant='text' size='small'>Share</Button>
                        <Button size='small'>Learn more</Button>
                        <Tooltip title='Add to cart' arrow>
                            <Button size='small'>Add</Button>
                        </Tooltip>
                    </CardActions>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended==='panel2'} elevation={2} onChange={(e,v)=>handler(v, 'panel2')}>
                <AccordionSummary id='panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>JavaScript</AccordionSummary>
                <AccordionDetails>
                    <CardMedia
                        component={'img'}
                        height='140'
                        image='https://images.unsplash.com/photo-1671644988451-de17597de2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
                    />
                    <Typography p={2} textAlign='left' color={'gray'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod sit perspiciatis, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, saepe. dolore impedit aliquam eligendi magni! Sit, dolor sint reiciendis accusamus neque odio doloribus eos quisquam labore rerum optio ullam deleniti repellat aut in hic. Placeat soluta ducimus debitis.
                    </Typography>
                    <CardActions>
                        <Button title='share' variant='text' size='small'>Share</Button>
                        <Button size='small'>Learn more</Button>
                        <Tooltip title='Add to cart' arrow>
                            <Button size='small'>Add</Button>
                        </Tooltip>
                    </CardActions>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended==='panel3'} elevation={2} onChange={(e,v)=>handler(v, 'panel3')}>
                <AccordionSummary id='panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>Next</AccordionSummary>
                <AccordionDetails>
                    <CardMedia
                        component={'img'}
                        height='140'
                        image='https://images.unsplash.com/photo-1671644988451-de17597de2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
                    />
                    <Typography p={2} textAlign='left' color={'gray'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod sit perspiciatis, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, saepe. dolore impedit aliquam eligendi magni! Sit, dolor sint reiciendis accusamus neque odio doloribus eos quisquam labore rerum optio ullam deleniti repellat aut in hic. Placeat soluta ducimus debitis.
                    </Typography>
                    <CardActions>
                        <Button title='share' variant='text' size='small'>Share</Button>
                        <Button size='small'>Learn more</Button>
                        <Tooltip title='Add to cart' arrow>
                            <Button size='small'>Add</Button>
                        </Tooltip>
                    </CardActions>
                </AccordionDetails>
            </Accordion>
        </Box>
     );
}

export default MuiAccordion;