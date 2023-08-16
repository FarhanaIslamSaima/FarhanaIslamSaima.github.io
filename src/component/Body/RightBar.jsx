import React from 'react';
import {Box,Typography} from '@mui/material'
import { Link } from 'react-router-dom';

const RightBar = () => {
    return (
      <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
        <Typography variant={'h1'} sx={{fontWeight:"bold",margin:"30px",fontSize:'85px'}}>HELLO</Typography>
        <Typography sx={{fontWeight:'bold',fontSize:"20px"}}>HERE IS WHO I AM & WHAT I DO</Typography>
        <Box sx={{display:"flex",marginTop:'20px',justifyContent:'center',alignItems:'center','&>*':{
          
          borderRadius:"20%",
          padding:'5px',
          display:'flex',
          justifyContent:"center",
        
          fontWeight:'bold',
          cursor:'pointer',
          width:'150px'
        }}}>
          <Link to={'/resume'} style={{textDecoration:'none'}}>
          <Typography sx={{background:'#0050FF',borderRadius:"20%",fontWeight:'bold',padding:'5px', display:'flex',
          justifyContent:"center", width:'250px',margin:"20px",color:"white",border:'2px solid #0050FF','&:hover':{
            background:'white',color:'black',
            
          }}}>Resume</Typography>
          
          </Link>
          
          <Typography sx={{border:'2px solid black', padding:"6px"}}>Projects</Typography>
        </Box>
        <Box sx={{padding:'25px',color:'grey',fontSize:'16px'}}>
          <Typography sx={{fontSize:'16px'}}>Heii There!! This is Farhana Islam Saima. I'm a fullstack webdeveloper.Proficient at both front and backend .. You can find my skill set and experience in my resume.Don't hesitate to knock me if you need any help</Typography>
        </Box>

      </Box>
    );
};

export default RightBar;