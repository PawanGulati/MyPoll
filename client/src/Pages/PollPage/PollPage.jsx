import React, { Component } from 'react'

import {connect} from 'react-redux'
import classes from './pollPage.module.css'

import { Grid, Paper,Snackbar, Fab, withWidth} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Poll from '../../components/Polls/Poll'
import Chart from '../../components/Chart/Chart'
import { getPoll, closeErr, vote } from '../../store/actions'

const mapStateToProps = state =>({
    poll: state.polls.poll,
    openErr:state.error.openErr,
    error:state.error.message
})

const mapDispatchToProps = dispatch =>({
    getPoll:(id) =>dispatch(getPoll(id)),
    closeErr:() =>dispatch(closeErr()),
    vote:(id,data) =>dispatch(vote(id,data))
})

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {

    componentDidMount(){
        const {getPoll,match} = this.props
        getPoll(match.params.id)
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
             <div className={classes.root} style={{height:'calc(100% - 56px - 56px)'}}>
                {error}
                <Grid container spacing={3} style={{height:'100%'}}>
                    <Grid item xs={12} sm={6} style={{height:'100%'}}>
                        <Paper className={classes.paper} style={{height:'100%',overflowY:'auto'}}>
                            <Fab color="secondary" aria-label="back" style={{left:'2em',zIndex:100,position:'fixed'}} onClick={this.props.history.goBack}>
                                <ArrowBackIcon/>
                            </Fab>
                            {this.props.poll?<Poll poll={this.props.poll} vote={this.props.vote}/>:<h1>Loading....</h1>}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{height:'100%'}}>
                        <Paper className={classes.paper} style={{height:'100%'}} >
                        {this.props.poll?<Chart poll={this.props.poll}/>:<h1>Loading....</h1>} 
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
})
