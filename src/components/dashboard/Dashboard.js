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

    //---------------------------------------------------------------
    const { ordered:{projects,notifications} } = this.props.Firestore;  //Firestore Reducer
    //----------------------------------------------------------------

    const projectsList = (projects)? projects : [];
    const notificationsList = (notifications)? notifications : [];
   
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Row>
            <Col s={12} m={6}>
              <ProjectsList projects={projectsList} />
            </Col>
            <Col s={12} m={5} className="offset-m1">
                <Notifications notifications={notificationsList} />
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
    {collection:'projects',orderBy:['createdAt','desc']},
    {collection:'notifications',limit:3,orderBy:['time','desc']}
  ])
)(Dashboard)