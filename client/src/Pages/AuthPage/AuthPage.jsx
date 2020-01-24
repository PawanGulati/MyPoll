import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import classes from './AuthPage.module.css'

import Register from '../../components/Auth/Register' 
import Login from '../../components/Auth/Login' 


export default function AuthPage() {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Register/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Login/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
