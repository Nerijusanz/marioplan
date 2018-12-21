import React from 'react';
import { Card,Collection,CollectionItem } from 'react-materialize';

import NotificationItem from './NotificationItem';

const Notifications = (props) => {

  const {notifications} = props;

  const notificationsList = (notifications) ? 
          notifications.map(notification => <NotificationItem key={notification.id} notification={notification} />)
    : <CollectionItem>No notifications</CollectionItem>;
  
  return (
    <Card 
      textClassName='grey-text text-darken-3'
      title="notifications"
    ><Collection>{notificationsList}</Collection>
    </Card>

  )
}

export default Notifications;
