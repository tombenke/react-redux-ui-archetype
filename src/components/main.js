import React, { Component } from 'react'
import Monitoring from './monitoring'

class Main extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <p>Hello react-redux-ui!</p>
                <Monitoring />
            </div>
        )
    }
}

export default Main
