import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Grid, Paper,Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import {withStyles} from '@material-ui/core'
import {Pagination} from '@material-ui/lab';

// import classes from './HomePage.module.css'

import Polls from '../../components/Polls/Polls'
import { getPolls, getUserPolls, closeErr, setCurPoll, getPoll } from '../../store/actions'
import Welcome from '../../components/Welcome'

const NO_OF_QUES_ON_PAGE = 4

const mapStateToProps = state =>({
    polls:state.polls.polls,
    totalPollCount:state.polls.pollCount,
    isAuth:state.auth.isAuth,
    openErr:state.error.openErr,
    error:state.error.message
})

const mapDispatchToProps = dispatch =>({
    getPolls:(query) =>dispatch(getPolls(query)),
    getUserPolls:() =>dispatch(getUserPolls()),
    closeErr:() =>dispatch(closeErr()),
    setCurPoll:(id) =>dispatch(setCurPoll(id))
})

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = theme =>({
    root:{
        flexGrow: 1,
        padding:theme.spacing(1)
    },
    paper:{
        height:'100%',
        overflowY:'auto',
        padding:'16px',
        // color: 'secondary',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]:{
            marginTop:5
        }

    },
    leftPane:{
      [theme.breakpoints.down('sm')]:{
        order:2
      }
    },
    rightPane:{
            [theme.breakpoints.down('sm')]:{
                order:1,
            }
    },
    paginationBar:{
        marginLeft:'11rem',
        marginTop:'2rem',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'4rem',
            marginTop:0
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(class extends Component {

    state={
        page:1
    }

    componentDidMount(){
        const {getPolls} = this.props
        getPolls(`?limit=${NO_OF_QUES_ON_PAGE}&skip=0`)
    }

    showUserPolls = () =>{
        const {getUserPolls} = this.props
        getUserPolls() 
    }

    handlePollSelect = id =>{
        this.props.history.push(`poll/${id}`)                
    }

    handlePagination = (e,value) =>{
        this.setState({
            page:value
        })

        this.props.getPolls(`?limit=${NO_OF_QUES_ON_PAGE}&skip=${(value-1)*4}`)
    }

    render() {
        const {classes} = this.props

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
                <Grid container spacing={2} style={{height:'100%'}} >
                    <Grid item xs={12} sm={6} style={{height:'100%',marginBottom:'56px'}} className={classes.leftPane}>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Polls polls={this.props.polls} handlePollSelect={this.handlePollSelect}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Pagination count={Math.ceil(this.props.totalPollCount/4)} page={this.state.page} onChange={this.handlePagination} className={classes.paginationBar} color="secondary" />
                                </Grid>    
                            </Grid>    
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{height:'100%'}} className={classes.RightPane}>
                        <Paper className={classes.paper}>
                            <Welcome {...this.props} isAuth={this.props.isAuth}/> 
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}))
