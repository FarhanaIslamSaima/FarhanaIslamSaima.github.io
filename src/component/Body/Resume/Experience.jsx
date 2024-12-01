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
                
                <Typography sx={{fontWeight:'bold'}}>Full-Stack Developer</Typography>
                

                </Box>
                <Box sx={{width:"50%"}}>
                    <Typography sx={{color:'grey',lineHeight:'30px'}}>
                    I have actively participated in multiple hackathons, where I contributed to both frontend and backend development, showcasing my ability to work across the full stack. Additionally, I played a key role in the development of a blog website for a friend, where I was responsible for both the frontend and backend aspects of the project. For more details on these projects, please refer to the projects section.
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
                
                <Typography sx={{fontWeight:'bold'}}>Full-Stack Developer</Typography>
                

                </Box>
                <Box sx={{width:"100%"}}>
                <Typography sx={{color:'grey',lineHeight:'30px'}}>
                I have actively participated in multiple hackathons, where I contributed to both frontend and backend development, showcasing my ability to work across the full stack. Additionally, I played a key role in the development of a blog website for a friend, where I was responsible for both the frontend and backend aspects of the project. For more details on these projects, please refer to the projects section.
                    </Typography>

                </Box>
            </Box>

        </Box>
        
        
        </>
        
    );
};

export default Experience;