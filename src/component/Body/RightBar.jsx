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
          justifyContent:"center", width:'250px',color:"white",border:'2px solid #0050FF','&:hover':{
            background:'white',color:'black',
            
          }}}>Resume</Typography>
          
          </Link>
          
          <Link to={'/project'} style={{textDecoration:'none'}}>
          <Typography sx={{background:'white',color:'black',borderRadius:"20%",fontWeight:'bold',padding:'5px', display:'flex',
          justifyContent:"center", width:'250px',color:"black",border:'2px solid black','&:hover':{
            background:'#0050FF',color:'white',
            
          }}}>Projects</Typography>
          
          </Link>
        </Box>
        <Box sx={{padding:'25px',color:'grey',fontSize:'16px'}}>
          <Typography sx={{fontSize:'16px'}}>Hi, I'm Farhana Islam Saima, a full-stack web developer proficient in both frontend and backend technologies. You can view my skills and experience in my resume. Feel free to contact me if you need assistance!</Typography>
        </Box>

      </Box>
    );
};

export default RightBar;