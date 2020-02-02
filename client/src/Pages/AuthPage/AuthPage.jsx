import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import classes from './AuthPage.module.css'

import Register from '../../components/Auth/Register' 
import Login from '../../components/Auth/Login' 

import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {authUser,logout} from '../../store/actions/auth'
import { closeErr } from '../../store/actions/error';


const mapStateToProps = state =>({
  openErr:state.error.openErr,
  error:state.error.message,
  isAuth:state.auth.isAuth
})

const mapDispatchToProps = dispatch =>({
  authUser:(path,data) => dispatch(authUser(path,data)),
  logout:() => dispatch(logout()),
  closeErr:() =>dispatch(closeErr())
})

export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {
  state={
    userName:"",
    password:"",
    conformPassword:"",
  }

  inputChangeHandler = e =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  //TODO: Temporarily handling this shitty way of routing auth routes, later will change 

  submitHandlerReg = e =>{
    e.preventDefault()
    this.setState({open:true})

    const {userName,password,conformPassword} = this.state
    
    const data = {userName,password}

    this.props.authUser('register',data)

  }

  submitHandlerLog = e =>{
    e.preventDefault()
    const {userName,password} = this.state
    
    const data = {userName,password}

    this.props.authUser('login',data)    
  }

  render(){
    return (
      <div className={classes.root} style={{height:'100%'}}>

        {this.props.isAuth?<Redirect to='/polls'/>:null}

        <Grid container spacing={3} style={{height:'100%'}}>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}}>
              <Register 
                error={this.props.error} 
                inputChangeHandler={this.inputChangeHandler} 
                submitHandler={this.submitHandlerReg}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}} >
              <Login 
                openErr={this.props.openErr}
                closeErr={this.props.closeErr}
                error={this.props.error} 
                inputChangeHandler={this.inputChangeHandler} 
                submitHandler={this.submitHandlerLog}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
})
