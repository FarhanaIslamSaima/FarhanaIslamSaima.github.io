import React from 'react';
import {Grid} from '@mui/material'
import Project1 from './Project1';

const Projects = () => {
    return (
       <Grid container>
        <Grid item xs={12} lg={4} sm={12}>
            <Project1></Project1>
            </Grid>
           

       </Grid>
    );
};

export default Projects;