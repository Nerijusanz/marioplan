import React,{Fragment} from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Moment from 'react-moment';


import { Link } from 'react-router-dom';
import { Card } from 'react-materialize'

const ProjectDetails = (props) => {

    const { project } = props;
    
    const card = (project)?(
        <Card
            className='' 
            textClassName='grey-text text-darken-3' 
            title={project.title}
            >
            <p><span>author firstname:</span>{project.authorFirstName}</p>
            <p><span>author lastname:</span>{project.authorLastName}</p>
            <p>content:</p>
            <p>{project.content}</p>
            <p><span>createdAt:</span>
                {(project.createdAt) && <Moment format="YYYY-MM-DD">{project.createdAt.toDate()}</Moment>}
            </p>
        </Card>
    ):'';

  return (
    <Fragment>
        <Link className='btn' to='/dashboard'>back to projects</Link>
        {card}
    </Fragment>
  )
}

const mapStateToProps = (state,ownProps) => {

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps,{}),
    firestoreConnect([
        {collection:"projects"}
    ])
)(ProjectDetails);
