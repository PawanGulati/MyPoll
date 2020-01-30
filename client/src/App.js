import React, { Component } from "react";

import "./App.css";
import Layout from "./containers/Layout/Layout";
import {Route,Switch} from 'react-router-dom'

import AuthPage from "./Pages/AuthPage/AuthPage";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/auth" exact render={(props)=><AuthPage {...props}/>}/>   
            <Route path="/polls" exact render={()=><h1>Polls r here</h1>}/>   
            {/* <Route path="/login" exact render={(props)=><AuthPage authType="login" {...props}/>}/>
            <Route path="/register" exact render={(props)=><AuthPage authType="register" {...props}/>}/>*/}
          </Switch>
        </Layout>
      </div>
    );
  }
}
