import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    marginTop:0
  },
  formLabel:{
    marginTop:'30px',
    marginBottom:'10px',
    width:'100%',
    fontWeight:'bold',
    color:'secondary'
  }
}));

export default props =>{
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const polls = props.polls.map(poll =>(
    <div key={poll._id} onClick={()=>props.handlePollSelect(poll._id)} style={{cursor:'pointer'}}>
      <Typography component="legend" key={poll._id} className={classes.formLabel} color="secondary">{poll.question}</Typography>
      <RadioGroup aria-label="options" name="options" key={`options${poll._id}`} value={value} onChange={handleChange} row style={{justifyContent:'space-evenly'}}>
          {poll.options && poll.options.map(option =>(
                  <FormControlLabel
                      value={option.option}
                      disabled
                      control={<Radio />}
                      label={option.option}  
                      key={option._id}
                  />
          ))}
      </RadioGroup>
    </div>
  ))

  return (
    <>
      <FormControl  component="fieldset" className={classes.formControl}>
        {polls}
      </FormControl>
    </>
  );
}
