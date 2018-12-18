import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-materialize';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const MainNavbar = (props) => {

  const { auth:{uid},profile} = props.Firebase;

  const navLinks = ( uid )?<SignedInLinks profile={profile} />:<SignedOutLinks />;

  return (
    <Navbar brand="Mario plan" right href={(uid)?"/dashboard":"/"}>
      {navLinks}   
    </Navbar>

  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    Firebase: state.firebase
  }
}

export default connect(mapStateToProps)(MainNavbar);
