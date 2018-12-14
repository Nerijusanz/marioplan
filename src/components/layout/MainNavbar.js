import React from 'react';
import { Navbar } from 'react-materialize';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const MainNavbar = () => {
  return (
    <Navbar brand="Mario plan" right>
      <SignedOutLinks />
      <SignedInLinks />
    </Navbar>

  )
}

export default MainNavbar;
