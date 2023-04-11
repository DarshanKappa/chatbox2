import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';



function MuiSpeedDial() {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];

    return ( 
        <Box sx={{width: '100vw', height: '100vh'}}>
            <SpeedDial 
                sx={{position: 'absolute', bottom: 100, right: 100}}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                ariaLabel='SpleedDial basic example'
            >
                {actions.map(action=>
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                )}

            </SpeedDial>
        </Box>
     );
}

export default MuiSpeedDial;