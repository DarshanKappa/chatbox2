import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import { pink } from "@mui/material/colors";


function MuiAvatar() {
    return ( 
        <Stack spacing={5} p={5}>
            <Stack spacing={2} direction={'row'}>
                <Avatar sx={{bgcolor: 'primary.light'}}>DP</Avatar>
                <Avatar src={itemData[0].img}/>
                <Avatar src={itemData[9].img}/>
                <Avatar alt="no-image" src=""/>
                <Avatar sx={{bgcolor: 'secondary.light'}}>JJ</Avatar>
                <Avatar sx={{bgcolor: 'action.light'}}>SP</Avatar>
                <Avatar sx={{bgcolor: 'error.light'}}>SC</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CT</Avatar>
                <Avatar sx={{bgcolor: pink[300]}}>PP</Avatar>
                <Avatar sx={{bgcolor: "deepskyblue"}}>KS</Avatar>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Avatar variant="rounded" sx={{bgcolor: 'primary.light'}}>DP</Avatar>
                <Avatar variant="rounded" src={itemData[0].img}/>
                <Avatar variant="rounded" src={itemData[9].img}/>
                <Avatar variant="rounded" alt="no-image" src=""/>
                <Avatar variant="square" sx={{bgcolor: 'secondary.light'}}>JJ</Avatar>
                <Avatar variant="square" sx={{bgcolor: 'action.light'}}>SP</Avatar>
                <Avatar variant="square" sx={{bgcolor: 'error.light'}}>SC</Avatar>
                <Avatar variant="square" sx={{bgcolor: 'success.light'}}>CT</Avatar>
                <Avatar variant="square" sx={{bgcolor: pink[300]}}>PP</Avatar>
                <Avatar variant="square" sx={{bgcolor: "deepskyblue"}}>KS</Avatar>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <AvatarGroup>
                    <Avatar sx={{bgcolor: 'primary.light'}}>DP</Avatar>
                    <Avatar src={itemData[0].img}/>
                    <Avatar src={itemData[9].img}/>
                    <Avatar alt="no-image" src=""/>
                    <Avatar sx={{bgcolor: 'secondary.light'}}>JJ</Avatar>
                    <Avatar sx={{bgcolor: 'action.light'}}>SP</Avatar>
                    <Avatar sx={{bgcolor: 'error.light'}}>SC</Avatar>
                    <Avatar sx={{bgcolor: 'success.light'}}>CT</Avatar>
                    <Avatar sx={{bgcolor: pink[300]}}>PP</Avatar>
                    <Avatar sx={{bgcolor: "deepskyblue"}}>KS</Avatar>
                </AvatarGroup>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>DP</Avatar>
                    <Avatar src={itemData[0].img}/>
                    <Avatar src={itemData[9].img}/>
            </Stack>
        </Stack>
     );
}

export default MuiAvatar;




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
