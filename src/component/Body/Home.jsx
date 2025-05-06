import React from 'react';
import {Box, Typography} from "@mui/material"
import Main from './Main';

const Home = () => {
    return (
        <Box>
              <Box sx={{display:{xs:'none',lg:'flex',sm:'flex'}, width:'100%'}}>
            <Box sx={{width:"40%",background:'#E6DACE',justifyContent:"end",paddingLeft:"300px"}}>
            <Main/>

            </Box>
            
          

        </Box>

        <Box sx={{display:{xs:'flex',lg:'none',sm:'flex'},background:'#E6DACE',flexDirection:'column'}}>
            
        <Main/>
           <Box sx={{padding:'20px'}}>
            <Typography variant={'h3'} sx={{fontWeight:'bold'}}>Hello..</Typography>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>Here is who I am & what I do..</Typography>
            <Typography sx={{marginTop:'10px',color:'grey',fontSize:'16px',lineHeight:"30px"}} >Heii There!! This is Farhana Islam Saima. I'm a fullstack webdeveloper.Proficient at both front and backend .. You can find my skill set and experience in my resume.Don't hesitate to knock me if you need any help</Typography>
           </Box>

            
            </Box>



        </Box>
      
    );
};

export default Home;