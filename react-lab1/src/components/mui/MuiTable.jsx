// import { CheckBox } from "@mui/icons-material";
import { Box, Checkbox, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, Divider, IconButton, Tooltip, TablePagination } from "@mui/material";
import { useEffect, useState, useCallback, Component } from "react";
import {alpha, styled} from "@mui/material/styles"
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Rows from "./Rows";

// import {DataGrid} from "@mui/x-data-grid"


function MuiTable1({data}) {

    const [selecteds, setselecteds] = useState([]);
    const [datalist, setdatalist] = useState([])
    const [count, setcount] = useState(0)
    const [allSelect, setallSelect] = useState(0)
    const [temp, settemp] = useState({})
    const [refresh, setRefresh] = useState(0)

    console.log('---------Refreshing---------')
    // console.log(allSelect)
    console.log(temp)
    console.log(allSelect)
    console.log(refresh)


    useEffect(()=>{
        setdatalist(data)
        setcount(data.length)
    }, [])

    useEffect(()=>{
        console.log('loooooooooooooooooooooooooo')
        var length = Object.keys(temp).length
        if(length===0){
            setallSelect(0)
        }else if(length===count){
            setallSelect(2)
        }else{
            setallSelect(1)
        }
    }, [refresh])

    const handleAllSelect = (v)=>{
        if(v){
            setallSelect(2)
            // var list = []
            // console.log(datalist)
            var obj = []
            for(var i of datalist){
                obj[i.id] = true
            }
            // console.log(list)
            settemp(obj)
        }else{
            setallSelect(0)
            settemp({})
            // setselecteds([])
        }
    }

    const handleSelect = (v, index)=>{
                var newSelected = selecteds
                if(v){
                    settemp(()=>{temp[index] = v; return temp})
                }else{
                    settemp(()=>{temp[index] = v; return temp})
        
                }
                setRefresh(refresh?false:true)
    }


    return ( 
        <Box sx={{backgroundColor: '#e5e5e5'}} p={2}>
            <TableContainer component={Paper}>
                <Table size="medium" aria-label='simple table'>
                    <TableHead >
                        <TableRow>
                            <TableCell><Checkbox indeterminate={1===1?true:false} checked={2===2?true:false} onChange={(e, v)=>{}} /></TableCell>
                            <TableCell sx={{fontWeight: "bold"}}>ID</TableCell>
                            <TableCell sx={{fontWeight: "bold", textAlign: 'right'}}>FIRST NAME</TableCell>
                            <TableCell sx={{fontWeight: "bold", textAlign: 'right'}}>LAST NAME</TableCell>
                            <TableCell sx={{fontWeight: "bold", textAlign: 'right'}}>EMAIL</TableCell>
                            <TableCell sx={{fontWeight: "bold", textAlign: 'right'}}>GENDER</TableCell>
                            <TableCell sx={{fontWeight: "bold", textAlign: 'right'}}>IP ADDRESS</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            datalist.map((row)=>{

                                return (<Rows key={row.id}  row={row} />)
                            }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
     );
}

// export default MuiTable;



const StyledTableRow = styled(TableRow)(({ theme })=>({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
}))



class MuiTable extends Component {
    state = {  } 

    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            datalist: props.data.slice(0, 20),
            count: props.data.length,
            allSelect: 0,
            selecteds: {},
            selectedCount: 0,

            rowsPerPage: 20,
            pageNo: 0
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.handleAllSelect = this.handleAllSelect.bind(this)
        this.fun = this.fun.bind(this)
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    }

    componentDidUpdate(preProps, preStates){
    }
    
    fun = ()=>{
        var length = this.state.selectedCount
        
        if(length===this.state.count){
            this.setState({allSelect: 2})
        }else if(length===0){
            this.setState({allSelect: 0})
        }else{
            this.setState({allSelect: 1})
        }
    }

    handleAllSelect = (v)=>{
        if(v){
            var obj = {}
            for(var i of this.state.datalist){
                obj[i.id] = true
            }
            this.setState({selecteds: obj, allSelect: 2, selectedCount: this.state.count})
        }else{
            this.setState({selecteds: {}, allSelect: 0, selectedCount: 0})
        }
    }
    
    handleSelect = (e, isSelected, index)=>{
        console.log(e, isSelected, index)
        if(isSelected){
            this.setState({selectedCount: ++this.state.selectedCount})
        }else{
            this.setState({selectedCount: --this.state.selectedCount})
        }
        var obj = this.state.selecteds
        obj[index] = isSelected
        this.setState({selecteds: obj});
        this.fun()
    }

    handleChangeRowsPerPage = (e, v)=>{
        // console.log(e, v)
        var value = e.target.value
        // console.log(this.state.pageNo*value, (this.state.pageNo+1)*value)
        var list = this.props.data.slice(this.state.pageNo*value, (this.state.pageNo+1)*value)
        // console.log(list)
        this.setState({rowsPerPage: e.target.value, datalist: list})
    }
    
    handleChangePage = (e, v)=>{
        // console.log(e, v)
        // console.log(this.state.rowsPerPage*v, this.state.rowsPerPage*(v+1))
        var list = this.props.data.slice(this.state.rowsPerPage*v, this.state.rowsPerPage*(v+1))
        // console.log(list)
        this.setState({pageNo: v, datalist: list})
    }
    


    render() { 
        return (
        <Box sx={{backgroundColor: '#e5e5e5'}} p={2}>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <EnhancedTableToolbar selected={this.state.selectedCount>0} selectedCount={this.state.selectedCount} />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table  size="medium" aria-label='simple table'>
                        <TableHead sx={{backgroundColor: 'black', color: 'white', position: 'sticky', top: 0, zIndex: 1}} >
                            <TableRow sx={{color: 'white'}}>
                                <TableCell><Checkbox sx={{color: 'white'}} indeterminate={this.state.allSelect===1} checked={this.state.allSelect===2} onChange={(e, v)=>{this.handleAllSelect(v)}} /></TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold"}}>ID</TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold", textAlign: 'right'}}>FIRST NAME</TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold", textAlign: 'right'}}>LAST NAME</TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold", textAlign: 'right'}}>EMAIL</TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold", textAlign: 'right'}}>GENDER</TableCell>
                                <TableCell sx={{color: 'white', fontWeight: "bold", textAlign: 'right'}}>IP ADDRESS</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                this.state.datalist.map((row)=>{

                                    return (<Rows key={row.id} selected={this.state.selecteds[row.id]} row={row} fun={this.handleSelect} />)
                                }
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={this.state.count}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.pageNo}
                    onPageChange={this.handleChangePage}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
            </Paper>
        </Box>

        );
    }
}
 
export default MuiTable;



function EnhancedTableToolbar({selected, selectedCount}) {
    return ( 
        <Toolbar 
            sx={{
                padding: 1,
                ...(selected && { bgcolor: (theme)=>
                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)}),
                justifyContent: 'space-between'
            }}
        >
                {
                    selected?
                        <Typography variant="h6" sx={{fontSize: '17px'}}>
                            {selectedCount} selected
                        </Typography>
                    :
                        <Typography variant="h5" sx={{fontWeight: 600, fontSize: 26}}>
                            Nutrition
                        </Typography>
                }

                {
                selected?
                    <Tooltip title='Delete'>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                :
                    <Tooltip arrow title='filter list'>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip> 
                }
        </Toolbar>
     );
}
