import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';



const AuthRoute = ({isAuthenticated,component:Component,...rest}) => (
    
    <Route {...rest} render={props=>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" /> } />
)

AuthRoute.propTypes={
    component: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired

}

function mapStateToProps(state){
    return{
        isAuthenticated: !!state.firebase.auth.uid
    }
}

export default connect(mapStateToProps,{})(AuthRoute);
