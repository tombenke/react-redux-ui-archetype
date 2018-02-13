import React, { Component } from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import Monitoring from './monitoring'

class Main extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <main role="main" className="container-fluid">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={18} md={12}>
                                <Panel>
                                    <p>Hello!</p>
                                </Panel>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={18} md={12}>
                                <Monitoring />
                            </Col>
                        </Row>
                    </Grid>
                </main>
            </div>
        )
    }
}

export default Main
