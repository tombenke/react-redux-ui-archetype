import React, { Component } from 'react'

class Monitoring extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isAlive: false
        }
    }

    render() {
        return (
            <div className="Monitoring">
            <p>Server is(/is not) alive</p>
            </div>)
    }
}

export default Monitoring
