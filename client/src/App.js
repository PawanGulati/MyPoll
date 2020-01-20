import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>App works!!</h1>
        </Layout>
      </div>
    );
  }
}
