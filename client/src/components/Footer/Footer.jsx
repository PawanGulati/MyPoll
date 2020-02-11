import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Tabs, Tab, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent:'space-between',
      flex: 1,
      height:'56px',
      width:'100%',
      bottom:0,
      left:0,
      position:'sticky',
      zIndex:90,
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
      [theme.breakpoints.down('sm')]:{
        visibility:'hidden'
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
                    <Typography className={classes.copyRight}>
                      Copyright © 2019 Pawan India, Inc. All rights reserved. Terms of Use | Privacy Policy
                      +91 PAWAN (+91 894 935 3438)
                    </Typography>
            </AppBar>
        </div>
    )
}
