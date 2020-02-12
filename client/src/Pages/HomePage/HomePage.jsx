import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Grid, Paper, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

import classes from './HomePage.module.css'

import Polls from '../../components/Polls/Polls'
import { getPolls, getUserPolls, closeErr, setCurPoll } from '../../store/actions'
import Welcome from '../../components/Welcome'

const mapStateToProps = state =>({
    polls:state.polls.polls,
    isAuth:state.auth.isAuth,
    openErr:state.error.openErr,
    error:state.error.message
})

const mapDispatchToProps = dispatch =>({
    getPolls:() =>dispatch(getPolls()),
    getUserPolls:() =>dispatch(getUserPolls()),
    closeErr:() =>dispatch(closeErr()),
    setCurPoll:(id) =>dispatch(setCurPoll(id))
})

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {

    componentDidMount(){
        const {getPolls} = this.props
        getPolls()
    }

    showUserPolls = () =>{
        const {getUserPolls} = this.props
        getUserPolls() 
    }

    handlePollSelect = id =>{
        this.props.history.push(`poll/${id}`)                
    }

    render() {
        const error = this.props.error && (
            <Snackbar open={this.props.openErr} autoHideDuration={3000} onClose={this.props.closeErr}>
              <Alert onClose={this.props.closeErr} severity="warning">
                {this.props.error}
              </Alert>
            </Snackbar>
        )

        return (
            <div className={classes.root} style={{height:'calc(100% - 56px - 56px)',paddingBottom:0}}>
                {error}
                <Grid container spacing={3} style={{height:'100%'}}>
                    <Grid item xs={12} sm={6} style={{height:'100%'}}>
                        <Paper className={classes.paper} style={{height:'100%',overflowY:'auto'}}>
                        {/*this.props.isAuth && (
                            <div style={{display:'flex',justifyContent:'space-around',}}>
                              <Button variant="contained" color="secondary" onClick={this.showUserPolls}>SHOW MY POLLS</Button>
                              <Button variant="contained" color="primary" href='/'>SHOW ALL POLLS</Button>
                            </div>
                        )*/}
                            <Polls polls={this.props.polls} handlePollSelect={this.handlePollSelect}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{height:'100%'}}>
                        <Paper className={classes.paper} style={{height:'100%'}} >
                            <Welcome {...this.props} isAuth={this.props.isAuth}/> 
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
})
