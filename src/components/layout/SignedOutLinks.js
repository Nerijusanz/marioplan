import React,{Fragment} from 'react'

import { NavItem } from 'react-materialize'

const SignedOutLinks = () => {
  return (
    <Fragment>
      <NavItem href="/signup">Sign up</NavItem>
      <NavItem href="/signin">Login</NavItem>
    </Fragment>
  )
}

export default SignedOutLinks;
