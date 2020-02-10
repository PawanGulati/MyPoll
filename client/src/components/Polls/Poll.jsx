import React, { Fragment } from 'react'
import { Typography, RadioGroup, FormControlLabel, Radio, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(2),
    },
    formLabel:{
      marginTop:'30px',
      marginBottom:'10px',
      width:'100%',
      fontWeight:'bold',
      color:'secondary'
    }
  }));  

export default ({poll}) =>{
        
    const classes = useStyles()
    const [value, setValue] = React.useState('');
    
    const handleChange = event => {
        setValue(event.target.value);
    };

    const answer = <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange} row style={{justifyContent:'space-evenly'}}>
                    {poll.options && poll.options.map(option=>(
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label={option.option}  
                            key={option._id}
                        />
                    ))}
                </RadioGroup>
    
    return <FormControl  component="fieldset" className={classes.formControl}>
        <Typography component="legend" className={classes.formLabel} color="secondary">{poll.question}</Typography>
        {answer}
    </FormControl>
        
}
