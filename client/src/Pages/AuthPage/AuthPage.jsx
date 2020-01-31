import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'; 

import classes from './AuthPage.module.css'

import Register from '../../components/Auth/Register' 
import Login from '../../components/Auth/Login' 

import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {authUser,logout} from '../../store/actions/auth'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const mapStateToProps = state =>({
  error:state.error.message,
  isAuth:state.auth.isAuth
})

const mapDispatchToProps = dispatch =>({
  authUser:(path,data) => dispatch(authUser(path,data)),
  logout:() => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {
  state={
    userName:"",
    password:"",
    conformPassword:"",
    open:true
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.error) {
  //     return {
  //       open: true, 
  //     };
  //   }
  //   return null;
  // }

  inputChangeHandler = e =>{
    this.setState({
      [e.target.name] : e.target.value
    })
    // console.log(e.target.name)
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
    this.setState({open:true})

    const {userName,password} = this.state
    
    const data = {userName,password}

    this.props.authUser('login',data)    
  }

  handelClose = () =>{
    this.setState({open:false})
  }

  render(){
    let error
    if(this.props.error){
      error = (
        <Snackbar open={this.state.open && this.props.error} autoHideDuration={3000} onClose={this.handelClose}>
          <Alert severity="error" onClose={this.handelClose}>
            {this.props.error}
          </Alert>
        </Snackbar>
      )
    }
    
    return (
      <div className={classes.root} style={{height:'100%'}}>
        {error}
        <Grid container spacing={3} style={{height:'100%'}}>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}}>
              <Register error={this.props.error} inputChangeHandler={this.inputChangeHandler} submitHandler={this.submitHandlerReg}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{height:'100%'}}>
            <Paper className={classes.paper} style={{height:'70%',paddingTop:'15%'}} >
              <Login error={this.props.error} inputChangeHandler={this.inputChangeHandler} submitHandler={this.submitHandlerLog}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
})
