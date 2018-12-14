import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Row>
            <Col s={12} m={6}>
              <ProjectList />
            </Col>
            <Col s={12} m={5} className="offset-m1">
                <Notifications />
            </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;