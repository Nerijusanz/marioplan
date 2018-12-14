import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-materialize'

const ProjectSummary = (props) => {
  return (
    <Card
        className='' 
        textClassName='grey-text text-darken-3' 
        title={props.title} 
        actions={[<Link to={`/projects/${props.id}`}>show</Link>]}>
         <p>{props.text}</p>
    </Card>
  )
}

export default ProjectSummary;
