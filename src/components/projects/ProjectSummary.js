import React from 'react';
import { Card } from 'react-materialize';
import Moment from 'react-moment';

const ProjectSummary = (props) => {

  const {project:{title,createdAt}} = props;

  return(
    <Card 
      textClassName='grey-text text-darken-3'
      title={title}
    >
    <p><span>createdAt:</span>
      {(createdAt) && <Moment format="YYYY-MM-DD">{createdAt.toDate()}</Moment>}
    </p>
    </Card>
  )

}

export default ProjectSummary;
