import React, { Component } from 'react'

import {DialogTitle,DialogContentText,DialogContent,Button,TextField,Dialog,DialogActions,Fab, withStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme =>({
    FormControl: {
        width:500
    }
})

export default withStyles(styles)(class extends Component{

    state={
        open:false,
        form:{
            question:'',
            options:[]
        }
    }

    handleChange = name =>({target :{value}}) =>{
        this.setState({
            form:{
                ...this.state.form,
                [name] : value
            }
        })
    }

    handelToggle = () =>{
        this.setState((prevState,props)=>({
            open:!prevState.open,
            form:{
                question:'',
                options:[]
            }
        }))
    }

    handleCreatePoll = () =>{
        //TODO: Validation

        const {form} = this.state

    }

    render(){
        const {classes} = this.props
        return(
            <>
                <Fab onClick={this.handelToggle} size="small" color='secondary'>
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handelToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Polls</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill the below form to create new Poll  
                        </DialogContentText>
                        <form>
                            <TextField
                                className={classes.FormControl}
                                margin="dense"
                                label="Question"
                                type="email"
                                name="question"
                                fullWidth
                                value={this.state.form.question}
                                onChange={this.handleChange('question')}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handelToggle} color="primary">
                            Close
                        </Button>
                        <Button onClick={this.handleCreatePoll} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
})
