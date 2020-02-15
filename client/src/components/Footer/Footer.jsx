import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent:'space-between',
      flex: 1,
      height:'56px',
      width:'100%',
      // bottom:0,
      right:0,
      left:0,
      position:'fixed',
      zIndex:100,
    },
    toolbar:{
      height:'100%',
      width:'100%',
      flex:1,
      justifyContent:'space-between',
    },
    copyRight:{
      flex:1,
      fontSize:'12px',
      paddingTop:'10px',
      textAlign:'center',
      [theme.breakpoints.down('sm')]:{
        fontSize:'11px'
      } 
    },
    copyRightAuth:{
      flex:1,
      fontSize:'12px',
      paddingTop:'10px',
      textAlign:'center',
      [theme.breakpoints.down('sm')]:{
        visibility:'hidden',
        width:0
      } 
    },
    Tabs:{
      width:'100%',
      [theme.breakpoints.up('sm')]:{
        flex:1
      }
    }
  }));

export default props =>{
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    const handleGetPolls = () =>{
      props.getPolls()
      if(window.location.pathname !=='/') window.location.href = '/' //SomeOne plsss fix this for me :/ 
    } 
    
    const handleGetUserPolls = () =>{
      props.getUserPolls()
      if(window.location.pathname !=='/') window.location.href = '/' //SomeOne plsss fix this for me :/ 
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{height:'100%',display:'flex',flexDirection:'row'}}>
                {props.isAuth && <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                    className={classes.Tabs}
                  >
                    <Tab label="SHOW ALL POLLS" style={{flex:1}} onClick={handleGetPolls}/>
                    <Tab label="SHOW MY POLLS" style={{flex:1}} onClick={handleGetUserPolls}/>
                    </Tabs>}
                    <Typography className={props.isAuth ? classes.copyRightAuth:classes.copyRight}>
                      Copyright © 2020 MyPolls India, Inc. All rights reserved. Terms of Use | Privacy Policy
                      +91 MY_POLLS (+91 894 935 3438)
                    </Typography>
            </AppBar>
        </div>
    )
}
