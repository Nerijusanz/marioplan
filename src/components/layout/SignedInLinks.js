import React, {Fragment} from 'react'
// import { Link} from 'react-router-dom'
import { NavItem,Button } from 'react-materialize'



const SignedInLinks = () => {
  return (
    <Fragment>
      <NavItem href="/projects/add">New Project</NavItem>
      <NavItem href="/logout">Logout</NavItem>
      <NavItem href="/"><Button floating className="pink">NN</Button></NavItem>
    </Fragment>
  )
}

export default SignedInLinks;

