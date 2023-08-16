import React from 'react';
import { Card,Box, Typography } from '@mui/material';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Main = () => {
    return (
  <>
            <Card sx={{width:'100%',width:"800px",height:'500px',marginTop:"100px",display:{xs:'none',lg:'block',sm:'block'}}}>
            <Box sx={{display:{sx:'flex',xs:'none',lg:'flex'}}}>
            <Box sx={{width:"50%", display:'flex',justifyContent:'center',background:"#F4ECE6",height:'500px'}}>
                <LeftBar/>
            </Box>
            <Box sx={{width:'50%'}}>
                <RightBar></RightBar>
            </Box>

            </Box>
            </Card>
            <Card sx={{width:'90%',height:'500px',marginLeft:'20px',padding:'10px',marginTop:"20px",display:{lg:"none",xs:'block',sm:'none'},
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.5)'
        }}>
           

            <Box sx={{display:{sx:'flex',xs:'flex',lg:'none'},flexDirection:'column',width:'100%'}}>
            <Box sx={{ display:'flex',justifyContent:'center',background:"#F4ECE6",height:'500px',flexDirection:'column'}}>
                <LeftBar/>
               
               
            </Box>
            <Box sx={{display:{xs:'flex',lg:'none'}}}><Typography variant={'h2'}>Hello</Typography></Box>
         
            

            </Box>
          
           
           </Card>
           
           </>
        
          
    

    );
};

export default Main;