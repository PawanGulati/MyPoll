import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Button, Typography, Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default props => {
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
            <Typography variant="h4" >SIGN IN</Typography> 
            <LockIcon fontSize="large"/>
        </header>    
        <Divider style={{margin:"12px"}} />
        <form className={classes.root} noValidate autoComplete="off">
            <Input name="userName" onChange={props.inputChangeHandler} placeholder="UserName" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Input name="password" type='password' onChange={props.inputChangeHandler} placeholder="Password" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Button onClick={(e)=>props.submitHandler(e)} fullWidth variant="contained" color="primary" className={classes.button} startIcon={<ExitToAppIcon/>}>
                Login
            </Button>
        </form>
    </Container>
  );
}