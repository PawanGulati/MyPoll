import React, { Component } from 'react'
import { connect } from 'react-redux'

import ToolBar from '../../components/ToolBar/Toolbar'
import Footer from '../../components/Footer/Footer'
import { getPolls, getUserPolls, logout } from '../../store/actions'
import { ThemeProvider } from '@material-ui/core'

const mapStateToProps = state =>({
    isAuth:state.auth.isAuth
})

const mapDispatchToProps = dispatch =>({
    getPolls:() =>dispatch(getPolls()),
    getUserPolls:() =>dispatch(getUserPolls()),
    logout:() =>dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(class Layout extends Component {
    render() {
        const {getPolls,getUserPolls} = this.props
        return (
            <>
                <ToolBar isAuth={this.props.isAuth} logout={this.props.logout}/>
                {this.props.children}
                <Footer isAuth={this.props.isAuth} getPolls={getPolls} getUserPolls={getUserPolls}/>
            </>
        )
    }
})
