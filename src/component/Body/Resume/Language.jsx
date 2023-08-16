import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';

const Language = () => {
    return (
        <>
        <Box sx={{display:{xs:'none',lg:"flex"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>Language</Typography>
            <Box sx={{ width:"100%",display:"flex", justifyContent:"center",alignItems:'center'}}>
            
                <Box sx={{width:"50%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                    <List
                    sx = {{
                        listStyleType: 'square',
                        listStyleColor:'blue',
                        pl: 2,
                        '& .MuiListItem-root': {
                         display: 'list-item',
                        },
                       }}
                    >
                        <ListItem>BANGLA</ListItem>
                        <ListItem>ENGLISH</ListItem>
                      
                    </List>
                
               

                

                </Box>
                <Box sx={{width:"50%"}}>
               
                

                </Box>
            </Box>

        </Box>

        <Box sx={{display:{xs:'flex',lg:"none"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>Language</Typography>
            <Box sx={{ width:"100%",display:"flex",flexDirection:'column'}}>
            
                <Box sx={{width:"100%",'&>*':{
                
                }}}>
                
                <List
                    sx = {{
                        listStyleType: 'square',
                        listStyleColor:'blue',
                        pl: 2,
                        '& .MuiListItem-root': {
                         display: 'list-item',
                        },
                       }}
                    >
                        <ListItem>BANGLA</ListItem>
                        <ListItem>ENGLISH</ListItem>
                        
                    </List>

                </Box>
               
            </Box>

        </Box>
        </>
    );
};

export default Language;