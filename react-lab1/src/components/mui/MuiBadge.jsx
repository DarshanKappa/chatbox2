import { Badge, Box, Stack, styled, Avatar } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import Icon from '@mui/icons-material/Telegram';



function MuiBadge() {

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            'min-width': '12px',
            'min-height': '12px',
            height: '12px',
            margin: 0,
            padding: 0,
            top: '12%',
            right: '12%',
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
              position: 'absolute',
              opacity: 1,
            //   top: -1,
            //   left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '100%',
              animation: 'ripple 1.5s infinite ease-in-out',
              border: '1px solid currentColor',
              content: '""',
            //   transform: 'scale(2)'
            },
          },
          '@keyframes ripple': {
            '0%': {
              transform: 'scale(0)',
              opacity: 1,
            },
            '100%': {
              transform: 'scale(2.5)',
              opacity: 0,
            },
          },
        
    }));

    return ( 
        <Stack p={5} spacing={2}>
            <Box>
                <Badge badgeContent={'99+'} color='error'>
                    <MailIcon color='action' />
                </Badge>
            </Box>
            <Box>
                <Badge badgeContent={''} color='error'>
                    <MailIcon color='action' />
                </Badge>
            </Box>
            <Box>
                <StyledBadge badgeContent={''} color='success' >
                    <Avatar src={itemData[0].img}/>
                </StyledBadge>
            </Box>
            <Avatar sx={{bgcolor: 'primary.light'}}>DP</Avatar>
                <Avatar src={itemData[9].img}/>
        </Stack>
     );
}

export default MuiBadge;

const itemData = [
    {
        key: 1,
        img: 'https://images.unsplash.com/photo-1597956959732-9b8cb12f8960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4Mzc1MDgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 1'
    },
    {
        key: 2,
        img: 'https://images.unsplash.com/photo-1598023192077-5733d6db1518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw4Mzc1MDgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 2'
    },
    {
        key: 3,
        img: 'https://images.unsplash.com/photo-1598132561020-f5bad046b7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4Mzc1MDgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 3'
    },
    {
        key: 4,
        img: 'https://images.unsplash.com/photo-1598182633388-abf940681929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4Mzc1MDgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 4'
    },
    {
        key: 5,
        img: 'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ODM3NTA4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 5'
    },
    {
        key: 6,
        img: 'https://images.unsplash.com/photo-1598316942172-787d747ab9ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8ODM3NTA4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 6'
    },
    {
        key: 7,
        img: 'https://images.unsplash.com/photo-1598397678815-c5dc869035b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8ODM3NTA4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 7'
    },
    {
        key: 8,
        img: 'https://images.unsplash.com/photo-1598420651277-1ec76d1d2210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ODM3NTA4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 8'
    },
    {
        key: 9,
        img: 'https://images.unsplash.com/photo-1598455067671-f31973e95db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8ODM3NTA4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Image 9'
    },
    {
        key: 10,
        img: 'https://mui.com/static/images/avatar/3.jpg',
        title: 'Image 10'
    },
]
