import React from 'react'
import { Card } from 'react-materialize'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

  return (
      
        <Card
            className='' 
            textClassName='grey-text text-darken-3' 
            title={`project title - ${id}`}
        >
            <p>project text</p>
        </Card>
    
  )
}

export default ProjectDetails;
