import React, { Component } from 'react'

class Monitoring extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isAlive: props.isAlive || false
        }
    }

    render() {
        const serverStatus = this.state.isAlive ? "ALIVE" : "NOT ALIVE"
        return (
            <div className="Monitoring">
            <p>Server is {serverStatus}</p>
            </div>)
    }
}

export default Monitoring
