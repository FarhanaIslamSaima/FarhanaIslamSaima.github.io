import React from 'react';
import {Box, Typography} from '@mui/material'

const Experience = () => {
    return (
        <>
        <Box sx={{display:{xs:'none',lg:"flex"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>PRESENT</Typography>
            <Box sx={{ width:"100%",display:"flex"}}>
            
                <Box sx={{width:"50%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography>JOB POSITION</Typography>
                <Typography sx={{fontSize:'14px'}}>COMPANY NAME</Typography>
                <Typography sx={{fontSize:'14px'}}>COMPANY LOCATION</Typography>

                </Box>
                <Box sx={{width:"50%"}}>
                    <Typography>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

 

I’m a great place for you to tell a story and let your users know a little more about you.
                    </Typography>

                </Box>
            </Box>

        </Box>

        <Box sx={{display:{xs:'flex',lg:"none"},background:"white",justifyContent:'center',width:"70%",margin:'0 auto',flexDirection:'column',padding:'20px'}}>
            <Typography sx={{fontWeight:'bold',color:'#0000FF',marginBottom:"20px"}} variant={'h5'}>PRESENT</Typography>
            <Box sx={{ width:"100%",display:"flex",flexDirection:'column'}}>
            
                <Box sx={{width:"100%",'&>*':{
                    paddingBottom:'5px'
                }}}>
                
                <Typography>JOB POSITION</Typography>
                <Typography sx={{fontSize:'14px'}}>COMPANY NAME</Typography>
                <Typography sx={{fontSize:'14px'}}>COMPANY LOCATION</Typography>

                </Box>
                <Box sx={{width:"100%"}}>
                    <Typography>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

 

I’m a great place for you to tell a story and let your users know a little more about you.
                    </Typography>

                </Box>
            </Box>

        </Box>
        
        
        </>
        
    );
};

export default Experience;