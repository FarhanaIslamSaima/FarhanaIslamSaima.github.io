import React from 'react';
import {Box} from "@mui/material"
import Main from './Main';

const Home = () => {
    return (
        <Box sx={{display:{xs:'none',lg:'flex',sm:'flex'}, width:'100%',height:"2000px"}}>
            <Box sx={{width:"40%",background:'#E6DACE',justifyContent:"end",paddingLeft:"300px"}}>
            <Main/>

            </Box>
            
          

        </Box>
    );
};

export default Home;