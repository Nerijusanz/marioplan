import React from 'react';
import moment from 'moment';
import { CollectionItem } from 'react-materialize';

const NotificationItem = (props) => {
  
  const {user,time,content} = props.notification;

  return (
    <CollectionItem>
      <p>{user}</p>
      <p>{moment(time.toDate()).fromNow()}</p>
      <p>{content}</p>
    </CollectionItem>
  )
};
export default NotificationItem;
