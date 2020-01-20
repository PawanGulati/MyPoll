import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <>
                <header>header</header>
                {this.props.children}
            </>
        )
    }
}
