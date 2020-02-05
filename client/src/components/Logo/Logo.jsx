import React from 'react'

import {Typography} from '@material-ui/core'

import myLogo from '../../assets/images/logo.png'

export default ()=> <div style={{height:'100%',padding:'4px',boxSizing:'border-box',display:'flex'}}>
        <img src={myLogo} style={{height:'93%',marginRight:'15px'}}/>
        <div>
            <Typography style={{fontFamily:'\'Black Ops One\',cursive',fontSize:'1rem',letterSpacing:'.1rem',lineHeight:'120%',}}><span style={{fontFamily:'\'Black Ops One\',cursive',fontSize:'1.5rem',letterSpacing:'.1rem'}}>M</span>Y</Typography>  
            <Typography style={{fontFamily:'\'Black Ops One\',cursive',fontSize:'1rem',letterSpacing:'.1rem'}}><span style={{fontFamily:'\'Black Ops One\',cursive',fontSize:'1.5rem',letterSpacing:'.1rem'}}>P</span>OLLS</Typography>  
        </div>
    </div>
