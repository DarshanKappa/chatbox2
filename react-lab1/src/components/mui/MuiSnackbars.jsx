import { Alert, Box, Button, IconButton, Snackbar, Stack } from "@mui/material";
import { useState, Component, memo } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Slide from "@mui/material/Slide";

// function MuiSnackBars1() {

//     const [open, setopen] = useState(false)
//     const [open1, setopen1] = useState(false)
//     const [open2, setopen2] = useState(false)
//     const [open3, setopen3] = useState(false)
//     const [open4, setopen4] = useState(false)

//     const [queue, setqueue] = useState([])
//     const [count, setcount] = useState(0)

//     console.log(queue)

//     // const openSnackbar = ()=>{
//     //     setopen(open?false:true)
//     // }
//     // const action = (
//     //     <Button onClick={()=>setopen(false)}>
//     //         <IconButton>
//     //             <CloseIcon fontSize='small' sx={{color: 'white'}} />
//     //         </IconButton>
//     //     </Button>
//     // )

//     // const handleClose = (e, v, fun)=>{
//     //     console.log(e, v)
//     //     if(v==='timeout'){
//     //         fun(false)
//     //     }else if(v==='close'){
//     //         fun(false)
//     //     }
//     // }

//     const addSnackBar = (type)=>{
//         // setcount(count+1)
        
//         if(queue.length<10){
//             setqueue([...queue, {index: (queue.length + count), type: type}])

//             setTimeout(()=>{
//                 console.log('set time out calling...')
//                 setqueue((q)=>{q.splice(0, 1); return q})
//                 setcount(count+1)
//             }, 3000)
//         }
//     }

//     return ( 
//         <Box p={2}>
//             <Stack spacing={1} direction={'row'} justifyContent='center' flexWrap={'wrap'}>
//                 <Box p={1}>
//                 {
//                 queue.map(q=>{
//                     console.log(q);
//                     return (
//                     <AlertSnackBar key={q.index} count={q.index+1} type={q.type} />
//                     )
//                 })
//             }     <Button size="small" onClick={()=>setopen(true)} variant="contained">Oplen Snackbar</Button>
//                 </Box>
//                 <Box p={1}>
//                     <Button color='success' size="small" onClick={()=>{setopen1(true); addSnackBar('success')}} variant="contained">Alert Snackbar</Button>
//                 </Box>
//                 <Box p={1}>
//                     <Button color='info' size="small" onClick={()=>{addSnackBar('info')}} variant="contained">Alert Snackbar</Button>
//                 </Box>
//                 <Box p={1}>
//                     <Button color='error' size="small" onClick={()=>{addSnackBar('error')}} variant="contained">Alert Snackbar</Button>
//                 </Box>
//                 <Box p={1}>
//                     <Button color='warning' size="small" onClick={()=>{addSnackBar('warning')}} variant="contained">Alert Snackbar</Button>
//                 </Box>
//             </Stack>

//             

//             {/* <AlertSnackBar queue={queue} open={open1} type={'success'} fun={setopen1} />
//             <AlertSnackBar queue={queue} open={open2} type={'info'} fun={setopen2} />
//             <AlertSnackBar queue={queue} open={open3} type={'error'} fun={setopen3} />
//             <AlertSnackBar queue={queue} open={open4} type={'warning'} fun={setopen4} /> */}

//         </Box>
//      );
// }


function SnackMessageHook(){

    const [count, setcount] = useState(0)
    const [parent, setparent] = useState([])
    const [queue, setqueue] = useState([])
    const [points, setPoints] = useState({start: 0, end: -1})
    const [start, setstart] = useState(0)
    const [end, setend] = useState(-1)


    console.log(queue)
    console.log(points)

    const addSnackBar = (type)=>{
        var s = start
        var e = end
        var logic = (s>e)?(e===-1)?0:(10+e-s+1):(e-s+1)
        // console.log('size list - ', this.state.queue)
        console.log(logic, s, e)
        if(e===-1||logic<10){

            // console.log('called...')
            // var list = queue
            var pointer = (end===-1?start:end + 1)%10
            // list[pointer] = {index: pointer, type: type}
            // list.push({index: this.state.end+1, type: type})
            // this.setState({queue: list, end: pointer})
            // setqueue(list)
            setqueue(q=>{
                var pointer = (points.end===-1?points.start:points.end + 1)%10;
                q[pointer] = {index: pointer, type: type};
                return q;
            })
            setPoints(p=>{p.end=pointer; setend(pointer); return p})
            // setend(pointer)

            setTimeout(()=>{
                // console.log('set time out calling...')
                // console.log(this.state.queue)
                // console.log(this.state.count)
                // var list = this.state.queue.splice(0, 1)
                // if(this.state.start === this.state.end){
                // this.setState({start: (this.state.start+1)%10, end: (this.state.start===this.state.end)?-1:this.state.end})
                setPoints(p=>{
                    p.start=(p.start+1)%10;
                    p.end=(p.start===p.end)?-1:p.end;
                    setstart(p.start)
                    setend(p.end)
                    return p;
                })
                // setend(v=>{var x=(points.start===points.end)?-1:points.end; return x })
                // this.setState({queue: list, count: (this.state.count+1)})
                // setqueue((q)=>{q.splice(0, 1); return q})
                // setcount(count+1)
            }, 5000)
        }

        
    }

    return (
        <Box p={2}>
            {/* <Box spacing={2}>
                <Button  variant="contained" onClick={()=>action(true)}>Add</Button>
                <Button color='error' variant="contained" onClick={()=>action(false)}>Delete</Button>
            </Box>    */}
            <Stack spacing={1} direction={'row'} justifyContent='center' flexWrap={'wrap'}>
                <Box p={1}>
                    <Button color='success' size="small" onClick={()=>{addSnackBar('success')}} variant="contained">Alert Snackbar</Button>
                </Box>
                <Box p={1}>
                    <Button color='info' size="small" onClick={()=>{addSnackBar('info')}} variant="contained">Alert Snackbar</Button>
                </Box>
                <Box p={1}>
                    <Button color='error' size="small" onClick={()=>{addSnackBar('error')}} variant="contained">Alert Snackbar</Button>
                </Box>
                <Box p={1}>
                    <Button color='warning' size="small" onClick={()=>{addSnackBar('warning')}} variant="contained">Alert Snackbar</Button>
                </Box>
            </Stack>

            {   
                (end!==(-1) && start>end)?
                    [...(queue.slice(0, end+1)), ...(queue.slice(start, 10))].map(q=>{
                        // console.log(q);
                        // console.log(true)
                        return (
                            <AlertSnackBar key={q.index} count={q.index} type={q.type} start={start} end={end} />
                        )
                    })
                :
                    queue.slice(start, end+1).map(q=>{
                        // console.log(q);
                        // console.log(false);
                        return (
                            <AlertSnackBar key={q.index} count={q.index} type={q.type} start={start} end={end} />
                        ) // if(count!==0){
                            //     this.addSnackBar(parent[count-1])
                            // }
                    })
            }
        </Box>
        );
}



class MuiSnackBars extends Component {
        constructor(props){
            super(props)
            this.state = {
                queue: [],
                start: 0,
                end: -1, 
                // longQueue: props.parentQueue
            }
            this.addSnackBar = this.addSnackBar.bind(this)
            this.action = this.props.action.bind(this)
        }
    
        componentDidMount(){
            // console.log(count)
            console.log('------Mounting-------')
        }
    
        componentDidUpdate(preProps, preStates){
            console.log('------Updating-------')
        }
    
        addSnackBar(type){
            var s = this.state.start
            var e = this.state.end
            var logic = (s>e)?(e===-1)?0:(10+e-s+1):(e-s+1)
            // console.log('size list - ', this.state.queue)
            console.log(logic, s, e)
            if(e===-1||logic<10){
    
                var list = this.state.queue
                var pointer = (this.state.end===-1?this.state.start:this.state.end + 1)%10
                list[pointer] = {index: pointer, type: type}
                // list.push({index: this.state.end+1, type: type})
                this.setState({queue: list, end: pointer})
    
                setTimeout(()=>{
                    this.setState({start: (this.state.start+1)%10, end: (this.state.start===this.state.end)?-1:this.state.end})
                }, 5000)
            }

            
        }
    
    
        render() { 
            return (
            <Box p={2}>
                {/* <Box spacing={2}>
                    <Button  variant="contained" onClick={()=>action(true)}>Add</Button>
                    <Button color='error' variant="contained" onClick={()=>action(false)}>Delete</Button>
                </Box>    */}
                <Stack spacing={1} direction={'row'} justifyContent='center' flexWrap={'wrap'}>
                    <Box p={1}>
                        <Button color='success' size="small" onClick={()=>{this.addSnackBar('success')}} variant="contained">Alert Snackbar</Button>
                    </Box>
                    <Box p={1}>
                        <Button color='info' size="small" onClick={()=>{this.addSnackBar('info')}} variant="contained">Alert Snackbar</Button>
                    </Box>
                    <Box p={1}>
                        <Button color='error' size="small" onClick={()=>{this.addSnackBar('error')}} variant="contained">Alert Snackbar</Button>
                    </Box>
                    <Box p={1}>
                        <Button color='warning' size="small" onClick={()=>{this.addSnackBar('warning')}} variant="contained">Alert Snackbar</Button>
                    </Box>
                </Stack>
    
                {   
                    (this.state.end!==(-1) && this.state.start>this.state.end)?
                        [...(this.state.queue.slice(0, this.state.end+1)), ...(this.state.queue.slice(this.state.start, 10))].map(q=>{
                            // console.log(q);
                            // console.log(true)
                            return (
                                <AlertSnackBar key={q.index} count={q.index} type={q.type} start={this.state.start} end={this.state.end} />
                            )
                        })
                    :
                    this.state.queue.slice(this.state.start, this.state.end+1).map(q=>{
                            // console.log(q);
                            // console.log(false);
                            return (
                                <AlertSnackBar key={q.index} count={q.index} type={q.type} start={this.state.start} end={this.state.end} />
                            ) // if(count!==0){
                                //     this.addSnackBar(parent[count-1])
                                // }
                        })
                }
            </Box>
    
            );
        }
    }




export default MuiSnackBars;
// export default SnackMessageHook;


const AlertSnackBar = ({count, start, end, type})=>{

    console.log('-----------', count, start, end, type)
    const [open, setopen] = useState(true)
    // console.log(count-start)
    // console.log(count-start+1)
    // console.log(count<start?(count+start+1):(count-start+1))
    // console.log((count<start?(10+count-start+1):(count-start+1)))
    const [top, settop] = useState((count<start?(10+count-start+1)*60:(count-start+1)*60))
    
    // console.log(top)addSnackBar

    const handleClose = (e, v)=>{
        // console.log(e, v)
        if(v==='timeout'){
            setopen(false)
        }else if(v==='close'){
            setopen(false)
        }
    }

    return ( 
            <Snackbar bottom={500}
                sx={{bottom: (count<start?(10+count-start+1)*60:(count-start+1)*60)+'px!important', flexDirection: 'column'}}
                open={open}
                TransitionComponent={TransitionLeft}
                // autoHideDuration={3000}
                onClose={(e, v)=>handleClose(e, v)}
            >
                {/* <Alert sx={{backgroundColor: 'rgb(67, 160, 71)', color: 'white'}} variant="standard" onClose={()=>{handleClose(null, 'close')}}>{type}</Alert> */}
                <Alert color={type} variant="filled" onClose={()=>{handleClose(null, 'close')}}>{type}</Alert>
            </Snackbar>
     );
}

function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
  }