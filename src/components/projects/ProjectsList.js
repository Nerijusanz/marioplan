import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary'


const ProjectsList = (props) => {

    const { projects } = props;

 const projectsList = (projects)? 
    projects.map(project =>{
     return(
        <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectSummary  project={project}  />
        </Link>
     )
    }):null;

  return (
      <div>{projectsList}</div>
  )
  
}

export default ProjectsList;
