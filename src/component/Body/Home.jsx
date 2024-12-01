import React from 'react';
import {Box, Typography} from "@mui/material"
import Main from './Main';

const Home = () => {
    return (
        <Box>
              <Box sx={{display:{xs:'none',lg:'flex',sm:'flex'}, width:'100%',maxHeight: '100vh'}}>
            <Box sx={{width:"40%",background:'#E6DACE',justifyContent:"end",paddingLeft:"300px"}}>
            <Main/>

            </Box>
            
          

        </Box>

        <Box sx={{display:{xs:'flex',lg:'none',sm:'flex'},background:'#E6DACE',flexDirection:'column'}}>
            
        <Main/>
           <Box sx={{padding:'20px'}}>
            <Typography variant={'h3'} sx={{fontWeight:'bold'}}>Hello..</Typography>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>Here is who I am & what I do..</Typography>
            <Typography sx={{marginTop:'10px',color:'grey',fontSize:'16px',lineHeight:"30px"}} >Hello! I'm Farhana Islam Saima, a skilled full-stack web developer with expertise in both frontend and backend technologies. With a strong foundation in building scalable and user-friendly applications, I bring a comprehensive approach to every project I take on. You can explore my skill set and professional experience in my resume. Feel free to reach out if you need assistance – I’m here to help</Typography>
           </Box>

            
            </Box>



        </Box>
      
    );
};

export default Home;