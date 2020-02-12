import React from 'react'

import myLogo from '../assets/images/logo.png'

import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import LockOpenIcon from '@material-ui/icons/LockOpen';

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

export default props =>{
        const classes = useStyles();
        const auth = !props.isAuth && (<div>
                <Typography variant='h6'>GO</Typography>
                <div style={{display:'flex'}}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<CreateIcon />}
                    style={{flex:1 ,margin:'5px'}}
                    onClick={()=>props.history.push('/auth')}
                >
                    SIGN-UP
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<LockOpenIcon />}
                    style={{flex:1,margin:'5px'}}
                    onClick={()=>props.history.push('/auth')}
                >
                    SIGN-IN
                </Button>
                </div>
                <Typography variant='h6'>right now and</Typography><br/>
            </div>
        )

        return(
            <div>
                <img src={myLogo} alt='LOGO'/>
                <Typography className={classes.logo}><span className={classes.span}>M</span>Y POLL<span className={classes.span}>S</span></Typography>    
                {auth}
                <Typography variant='h6'>Select respective POLL to contribute your vote</Typography>
            </div>
        )
}

