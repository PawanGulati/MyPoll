import React, { Component } from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";

import AuthPage from "./Pages/AuthPage/AuthPage";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <AuthPage/>
        </Layout>
      </div>
    );
  }
}
