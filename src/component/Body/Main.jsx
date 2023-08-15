import React from 'react';
import { Card,Box } from '@mui/material';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Main = () => {
    return (
        <Card sx={{width:'100%',width:"800px",height:'500px',margin:"20px",marginTop:"100px"}}>
            <Box sx={{display:{sx:'flex',xs:'none',lg:'flex'}}}>
            <Box sx={{width:"50%", display:'flex',justifyContent:'center',background:"#F4ECE6",height:'500px'}}>
                <LeftBar/>
            </Box>
            <Box sx={{width:'50%'}}>
                This is right side
            </Box>

            </Box>
          
           
           </Card>

    );
};

export default Main;