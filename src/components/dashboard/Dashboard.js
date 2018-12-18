import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Row, Col } from 'react-materialize';

import Notifications from './Notifications'
import ProjectsList from '../projects/ProjectsList'


class Dashboard extends Component {

  render() {

    const projects = this.props.Firestore.ordered.projects;

    const projectsList = (projects)? projects : [];
   
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Row>
            <Col s={12} m={6}>
              <ProjectsList projects={projectsList} />
            </Col>
            <Col s={12} m={5} className="offset-m1">
                <Notifications />
            </Col>
        </Row>
      </div>
    )
  }
}
/*
Dashboard.propTypes={
  projects: PropTypes.shape({
    projects: PropTypes.array
  }).isRequired
}*/

const mapStateToProps = (state) => {
  return {
    Firestore: state.firestore,  //firestore
  }
}


export default compose(
  connect(mapStateToProps,{}),
  firestoreConnect([
    {collection:"projects"}
  ])
)(Dashboard)