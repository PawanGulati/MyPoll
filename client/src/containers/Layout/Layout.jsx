import React, { Component } from 'react'
import ToolBar from '../../components/ToolBar/Toolbar'

export default class Layout extends Component {
    render() {
        return (
            <>
                <ToolBar/>
                {this.props.children}
            </>
        )
    }
}
