import React, { Component } from "react";

import "./App.css";
import Layout from "./containers/Layout/Layout";
import {Route,Switch} from 'react-router-dom'

import AuthPage from "./Pages/AuthPage/AuthPage";

import decode from 'jwt-decode'

import store from './store'
import { setToken } from "./services/api/api";
import { setCurUser,addError } from "./store/actions";
import HomePage from "./Pages/HomePage/HomePage";

import {CssBaseline} from '@material-ui/core'

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken)
  try {
    store.dispatch(setCurUser(decode(localStorage.jwtToken)))
  } catch (error) {
    store.dispatch(setCurUser({}))
    store.dispatch(addError(error))
  }
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Layout>
          <Switch>
            <Route path="/auth" exact render={(props)=><AuthPage {...props}/>}/>   
            <Route path="/" exact render={props => <HomePage {...props} />}/>   
            {/* <Route path="/login" exact render={(props)=><AuthPage authType="login" {...props}/>}/>
            <Route path="/register" exact render={(props)=><AuthPage authType="register" {...props}/>}/>*/}
          </Switch>
        </Layout>
      </div>
    );
  }
}
