import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Button, Typography, Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">  
        <header style={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="h4" >SIGN IN</Typography> 
            <LockIcon fontSize="large"/>
        </header>    
        <Divider style={{margin:"12px"}} />
        <form className={classes.root} noValidate autoComplete="off">
            <Input name="userName" onChange={props.inputChangeHandler} placeholder="UserName" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Input name="password" onChange={props.inputChangeHandler} placeholder="Password" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Button onClick={(e)=>props.submitHandler(e)} fullWidth variant="contained" color="primary" className={classes.button} startIcon={<ExitToAppIcon/>}>
                Login
            </Button>
        </form>
    </Container>
  );
}