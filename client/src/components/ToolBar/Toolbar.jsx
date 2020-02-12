import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../components/Logo/Logo'
import { Link, Typography } from '@material-ui/core';
import CreatePollPage from '../../Pages/CreatePollPage/CreatePollPage';

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
    justifyContent:'space-between',
  },
  link:{
    cursor:'pointer',
    fontWeight:'bold',
    display:'flex'
  }
}));

export default function ToolBar(props) {
  const classes = useStyles();

  const links = props.isAuth ? (
      <Fragment>
        <Link to='/' underline="none" className={classes.link} color="inherit" onClick={props.logout}>
          <ExitToAppIcon/>
          <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>LogOut</Typography>
        </Link>
        <CreatePollPage/>
      </Fragment>
    ):(
      <Fragment>
        <Link href='/auth' underline="none" className={classes.link} color="inherit">
          <PersonAddIcon/>
          <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Register</Typography>
        </Link>
        <Link href='/auth' underline="none" className={classes.link} color="inherit">
          <ExitToAppIcon/>
          <Typography variant='body1' style={{margin:'2px',fontWeight:500}}>Login</Typography>
        </Link>
      </Fragment>
    ) 

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{height:'100%'}}>
        <Toolbar className={classes.toolbar}>
          <Logo/>
          {links}  
        </Toolbar>
      </AppBar>
    </div>
  );
}