import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Container, Button, Typography, Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Register(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">  
        <header style={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="h4" >SIGN UP NOW</Typography> 
            <CreateIcon fontSize="large"/>
        </header>    
        <Divider style={{margin:"12px"}} />
        <form className={classes.root} noValidate autoComplete="off">
            <Input placeholder="UserName" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Input placeholder="Password" fullWidth inputProps={{ 'aria-label': 'description' }} style={{marginBottom:'26px'}}/>
            <Input placeholder="Conform Password" fullWidth inputProps={{ 'aria-label': 'description'}} style={{marginBottom:'26px'}} />
            <Button fullWidth variant="contained" color="secondary" className={classes.button} startIcon={<ExitToAppIcon/>}>
                Register
            </Button>
        </form>
    </Container>
  );
}