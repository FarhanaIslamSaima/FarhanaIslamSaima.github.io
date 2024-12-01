import React from 'react';
import { useState } from 'react';
import { Card,Box, Typography, Button,Dialog } from '@mui/material';
import pic from './assets/project1.png'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'

const Project3 = () => {
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
            <Box sx={{height:'800px',width:"100%",}}>
                <Box sx={{padding:'5px',display:{xs:'none',lg:'block'}}}>
                    <CloseIcon sx={{marginLeft:'auto',float:'right',fontSize:'30px',cursor:'pointer' } } onClick={handleClose}  />
                    <Box sx={{padding:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img src={"/Project3.png"} style={{objectFit:'contain'}} height={'100%'} width={'100%'}/>
                    </Box>
                    <Typography sx={{fontStyle:'italic',marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}>Deptdemia</Typography>
                    <Typography sx={{lineHeight:'25px',color:'grey',fontSize:"16px"}}>
                    City Hub is a comprehensive platform that provides all the essential information about a city in one place. Whether you're a resident, visitor, or planning to move, the site offers easy access to details about local businesses, public services, neighborhoods, transportation, events, and more. With an intuitive design and user-friendly interface, City Hub aims to make navigating and discovering the city easier and more efficient, ensuring that users have all the information they need at their fingertips.

                    </Typography>
                    <Box sx={{ marginTop:'10px','&>*':{
                        marginBottom:"10px"
                    }}}>
                    <Typography ><b>Technology Used: </b>Next Js,Tailwind,Firebase,Express Js ,Node Js</Typography>
                    <Typography><b>Website Link:</b><Link to={"https://city-hub-msny.vercel.app/"}> https://city-hub-msny.vercel.app/</Link></Typography>
                    

                    </Box>
                    

                    </Box>
                   
                </Box>
                <Box sx={{width:'100%',display:{xs:'block',lg:'none',padding:'10px'}}}>
                    <CloseIcon sx={{marginLeft:'auto',float:'right',fontSize:'30px',cursor:'pointer' } } onClick={handleClose}  />
                    <Box sx={{padding:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <img src={"/Project3.png"} style={{objectFit:'contain'}} height={'100%'} width={'100%'}/>
                    </Box>
                    <Typography sx={{fontStyle:'italic',marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}>Deptdemia</Typography>
                    <Typography sx={{lineHeight:'25px',color:'grey',fontSize:"16px"}}>
                    City Hub is a comprehensive platform that provides all the essential information about a city in one place. Whether you're a resident, visitor, or planning to move, the site offers easy access to details about local businesses, public services, neighborhoods, transportation, events, and more. With an intuitive design and user-friendly interface, City Hub aims to make navigating and discovering the city easier and more efficient, ensuring that users have all the information they need at their fingertips.

                    </Typography>
                    <Box sx={{ marginTop:'10px','&>*':{
                        marginBottom:"10px"
                    }}}>
                    <Typography ><b>Technology Used: </b>Next Js,Tailwind,Firebase,Express,Node Js</Typography>
                    <Typography><b>Website Link:</b><Link to={"https://city-hub-msny.vercel.app/"}> https://city-hub-msny.vercel.app/</Link></Typography>
                  

                    </Box>
                    

                    </Box>
                   
                   
                </Box>
               

            </Box>

        </Dialog>
        <Card sx={{width:'450px',margin:"10px"}}>
            <Box sx={{objectFit:'cover'}}>
                <img src={"/Project3.png"} width={'100%'} height={'100%'} style={{objectFit:'contain'}}/>
            </Box>
            <Box sx={{padding:'6px','&>*':{
                padding:'6px'
            }}}>
                <Typography sx={{fontStyle:'italic',fontWeight:'bold'}}>City Hub</Typography>
                <Button color='primary' variant='contained' sx={{paddingTop:'10px',paddingBottom:'10px'}}onClick={handleOpen}>View Details</Button>
            </Box>

        </Card>
        </>
    );
};

export default Project3;