import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { NavItem,Button } from 'react-materialize'

import { signOut } from '../../redux/actions/authActions';


const SignedInLinks = (props) => {

  const { profile:{initials} } = props;

return (
  <Fragment>
      <NavItem href="/projects/add">New Project</NavItem>
      <NavItem href="/logout" onClick={props.signOut}>Logout</NavItem>
      <NavItem href="/"><Button floating className="pink">{initials}</Button></NavItem>
    </Fragment>
  )
}

export default connect(null,{signOut})(SignedInLinks);

