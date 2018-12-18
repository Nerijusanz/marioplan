import React from 'react';
import { Card,Collection,CollectionItem } from 'react-materialize';

const Notifications = (props) => {
  return (
    
    <Card 
      textClassName='grey-text text-darken-3'
      title="notifications"
    >
      <Collection>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#' active>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
      </Collection>
    </Card>

  )
}

export default Notifications;
