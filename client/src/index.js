import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors';

//implement REDUX 
import {Provider} from 'react-redux'
import store from './store'

import {BrowserRouter} from 'react-router-dom'

const theme = createMuiTheme({
    palette:{
        primary:red,
        secondary:{
            main:amber.A400,
            light:amber[200],
            dark:amber[700]
        },
        type:'dark'
    }
})
console.log("Theme ",theme);

const app = (<BrowserRouter>
                <Provider store={store}>
                    <MuiThemeProvider theme={theme}>
                        <App />
                    </MuiThemeProvider>
                </Provider>
            </BrowserRouter> 
            )

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
