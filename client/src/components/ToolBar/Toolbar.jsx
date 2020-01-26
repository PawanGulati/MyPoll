import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../components/Logo/Logo'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent:'space-between',
    flex: 1,
    height:'56px',
    width:'100%',
    top:0,
    left:0,
    position:'sticky',
    zIndex:90,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar:{
    height:'100%',
    flex:1,
    justifyContent:'space-between'
  }
}));

export default function ToolBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{height:'100%'}}>
        <Toolbar className={classes.toolbar}>
          <Logo/>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}