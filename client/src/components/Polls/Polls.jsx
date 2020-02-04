import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

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

export default props =>{
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const polls = props.polls.map(poll =>(
    <Fragment key={poll._id}>
      <Typography component="legend" key={poll._id} className={classes.formLabel} color="secondary">{poll.question}</Typography>
      <RadioGroup aria-label="gender" name="gender1" key={`options${poll._id}`} wvalue={value} onChange={handleChange} row style={{justifyContent:'space-evenly'}}>
          {poll.options && poll.options.map(option =>(
                  <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label={option.option}  
                      key={option._id}
                  />
          ))}
      </RadioGroup>
    </Fragment>
  ))

  return (
    <>
      <FormControl  component="fieldset" className={classes.formControl}>
        {polls}
      </FormControl>
    </>
  );
}
