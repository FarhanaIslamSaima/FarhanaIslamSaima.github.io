import React from 'react';
import { useState } from 'react';
import { Card,Box, Typography, Button,Dialog } from '@mui/material';
import pic from './assets/project1.png'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'

const Project1 = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (

        <>
        <Dialog open={open}
    
    BackdropProps={{
        style: {
          backgroundColor: 'rgba(0,0,0,0.2)',
          boxShadow: 'none',
        },
      }}
        >
            <Box sx={{height:'800px'}}>
                <Box sx={{padding:'10px'}}>
                    <CloseIcon sx={{marginLeft:'auto',float:'right',fontSize:'30px',cursor:'pointer' } } onClick={handleClose}  />
                    <Box sx={{padding:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img src={pic} style={{objectFit:'contain'}} height={'100%'} width={'100%'}/>
                    </Box>
                    <Typography sx={{fontStyle:'italic',marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}>Deptdemia</Typography>
                    <Typography sx={{lineHeight:'25px',color:'grey',fontSize:"16px"}}>
                        Deptdemia is a website for a indept academia. Students of a particular department can ask question find solution and can contribute academic resources here.I collaborated with my friend and prepared this for a hackathon

                    </Typography>
                    <Box sx={{ marginTop:'10px','&>*':{
                        marginBottom:"10px"
                    }}}>
                    <Typography ><b>Technology Used: </b>React,Firebase,Material-UI</Typography>
                    <Typography><b>Website Link:</b><Link to={"https://deptamia-4dab5.web.app/"}> https://deptamia-4dab5.web.app</Link></Typography>
                    <Typography><b>Github Link:</b><Link to={"https://github.com/FarhanaIslamSaima/Deptdemia.git"}> https://github.com/FarhanaIslamSaima/Deptdemia.git</Link></Typography>

                    </Box>
                    

                    </Box>
                   
                </Box>
               

            </Box>

        </Dialog>
        <Card sx={{width:'450px',margin:"10px"}}>
            <Box sx={{objectFit:'cover'}}>
                <img src={pic} width={'100%'} height={'100%'} style={{objectFit:'contain'}}/>
            </Box>
            <Box sx={{padding:'6px','&>*':{
                padding:'6px'
            }}}>
                <Typography sx={{fontStyle:'italic',fontWeight:'bold'}}>Deptdemia</Typography>
                <Button color='primary' variant='contained' sx={{paddingTop:'10px',paddingBottom:'10px'}}onClick={handleOpen}>View Details</Button>
            </Box>

        </Card>
        </>
    );
};

export default Project1;