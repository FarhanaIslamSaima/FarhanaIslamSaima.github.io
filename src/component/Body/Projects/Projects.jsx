import React from 'react';
import {Grid} from '@mui/material'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const Projects = () => {
    return (
       <Grid container justifyContent="center" alignItems="center" spacing={3} >
        <Grid item xs={12} lg={4} sm={12}>
            <Project1></Project1>
           
            </Grid>
            <Grid item xs={12} lg={4} sm={12} >
            <Project2></Project2>
           
            </Grid>
            <Grid item xs={12} lg={4} sm={12}>
            <Project3></Project3>
           
            </Grid>

       </Grid>
    );
};

export default Projects;