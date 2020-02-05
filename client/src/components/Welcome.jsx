import React from 'react'

import myLogo from '../assets/images/logo.png'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
    logo:{
        color:"secondary",
        fontSize:'4rem',
        fontFamily:'\'Black Ops One\',cursive'
    },
    span:{
        fontFamily:'\'Black Ops One\',cursive',
        fontSize:'6rem',
        letterSpacing:'.1rem',
        color:"secondary"
    }
}));

export default () =>{
        const classes = useStyles();
        return(
            <div>
                <img src={myLogo}/>
                <Typography className={classes.logo}><span className={classes.span}>M</span>Y POLL<span className={classes.span}>S</span></Typography>    
                <Typography variant='h6'>Select respective POLL to contribute your vote</Typography>
            </div>
        )
}

