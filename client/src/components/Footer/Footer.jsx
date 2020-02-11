import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Tabs, Tab } from '@material-ui/core';

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
    }
  }));

export default props =>{
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{height:'100%'}}>
                <Tabs
                    value={value}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    style={{width:'100%'}}
                >
                    <Tab label="SHOW ALL POLLS" style={{flex:1}} onClick={props.getPolls}/>
                    <Tab label="SHOW MY POLLS" style={{flex:1}} onClick={props.getUserPolls}/>
                </Tabs>
            </AppBar>
        </div>
    )
}
