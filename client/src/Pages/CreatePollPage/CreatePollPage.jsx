import React, { Component } from 'react'
import {connect} from 'react-redux'

import {DialogTitle,DialogContentText,DialogContent,Button,TextField,Dialog,DialogActions,Fab, withStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createPoll } from '../../store/actions/polls';

const styles = theme =>({
    FormControl: {
        width:500
    }
})

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    createPoll: (data) =>{dispatch(createPoll(data))}
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(class extends Component{

    state={
        open:false,
        form:{
            question:'',
            options:['']
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
                options:['']
            }
        }))
    }

    handleCreatePoll = () =>{
        //TODO: Validation

        const {form} = this.state
        console.log(form);

        this.props.createPoll(form)

        this.handelToggle()
    }

    handleAnswer = (e,index) =>{
        const newForm = {...this.state.form}
        const newOptions = [...newForm.options]
        
        newOptions[index] = e.target.value
        newForm.options = newOptions

        this.setState({
            form:newForm
        })
    }

    handelAddOption = () =>{
        const newForm = {...this.state.form}
        const newOptions = [...newForm.options]

        newOptions.push('')
        newForm.options = newOptions

        this.setState({
            form:newForm
        })

    }

    render(){
        const {classes} = this.props

        const options = this.state.form.options.map((option,i) =>(
            <TextField
                key={i}
                className={classes.FormControl}
                margin="dense"
                label={`Option ${i+1}`}
                type="text"
                name="option"
                fullWidth
                value={option}
                onChange={(e)=>this.handleAnswer(e,i)}
            />
        ))

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
                                type="text"
                                name="question"
                                fullWidth
                                value={this.state.form.question}
                                onChange={this.handleChange('question')}
                            />
                            {options}
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handelAddOption} color="secondary" style={{flex:1,justifyContent:'start',fontWeight:500}}>
                            Add Option
                        </Button>
                        <Button onClick={this.handelToggle} color="primary" style={{fontWeight:500}}>
                            Close
                        </Button>
                        <Button onClick={this.handleCreatePoll} color="secondary" style={{fontWeight:500}}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}))
