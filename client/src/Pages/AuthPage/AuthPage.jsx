import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import classes from './AuthPage.module.css'

import Register from '../../components/Auth/Register' 
import Login from '../../components/Auth/Login' 

import {connect} from 'react-redux'
import {authUser,logout} from '../../store/actions/auth'

const mapDispatchToProps = dispatch =>({
  authUser:(path,data) => dispatch(authUser(path,data)),
  logout:() => dispatch(logout())
})

export default connect(null,mapDispatchToProps)(class extends Component {
  
  state={
    userName:"",
    password:"",
    conformPassword:""
  }

  inputChangeHandler = e =>{
    this.setState({
      [e.target.name] : e.target.value
    })
    // console.log(e.target.name)
  }

  submitHandler = e =>{
    e.preventDefault()
    const authType = this.props.authType
    const {userName,password,conformPassword} = this.state
    
    const data = (authType === 'login')?{userName,password}:{userName,password,conformPassword}

    this.props.authUser(authType,data)

    this.props.history.push('/polls') 
  }

  render(){
    return (
      <div className={classes.root} style={{height:'100%'}}>
        <Grid container spacing={3} style={{height:'100%'}}>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}}>
              <Register inputChangeHandler={this.inputChangeHandler} submitHandler={this.submitHandler}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}} >
              <Login inputChangeHandler={this.inputChangeHandler} submitHandler={this.submitHandler}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
})
