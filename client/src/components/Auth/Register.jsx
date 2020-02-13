import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Button, Typography, Divider } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Register(props) {
  const classes = useStyles();

  const error = props.error && (
    <Snackbar open={props.openErr} autoHideDuration={3000} onClose={props.closeErr}>
      <Alert onClose={props.closeErr} severity="warning">
        {props.error}
      </Alert>
    </Snackbar>
  )

  return (
    <Container maxWidth="sm">  
        {error}
        <header style={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="h4" >SIGN UP NOW</Typography> 
            <CreateIcon fontSize="large"/>
        </header>    
        <Divider style={{margin:"12px"}} />
        <form className={classes.root} noValidate autoComplete="off">
            <Input 
              name="userName" 
              onChange={props.inputChangeHandler} 
              placeholder="UserName" 
              fullWidth 
              inputProps={{ 'aria-label': 'description' }} 
              style={{marginBottom:'26px'}}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              }
            />
            <Input 
              name="password" 
              type='password' 
              onChange={props.inputChangeHandler} 
              placeholder="Password" 
              fullWidth 
              inputProps={{ 'aria-label': 'description' }} 
              style={{marginBottom:'26px'}}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
            <Input 
              name="conformPassword" 
              type='password' 
              onChange={props.inputChangeHandler} 
              placeholder="Conform Password" 
              fullWidth 
              inputProps={{ 'aria-label': 'description'}} 
              style={{marginBottom:'26px'}} 
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
            <Button onClick={(e)=>props.submitHandler(e)} fullWidth variant="contained" color="secondary" className={classes.button} startIcon={<ExitToAppIcon/>}>
                Register
            </Button>
        </form>
    </Container>
  );
}