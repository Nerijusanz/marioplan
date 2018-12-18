import React, { Component } from 'react'
import { connect } from 'react-redux';
import Validator from 'validator'
import { Row,Input,Button } from 'react-materialize'

import { signIn } from '../../redux/actions/authActions';

class SignIn extends Component {

    state={
        data:{
            email:'',
            password:''
        },
        validationErrors:{}
    }

    onChange = (e) => {

        this.setState({
            data:{
                ...this.state.data,
                [e.target.name]:e.target.value
            }
        });

    };

    onSubmit = (e) => {
        e.preventDefault();
        
        if(!this.dataValidation(this.state.data)) return; // if validation got error stop login process
        
        
        this.props.signIn(this.state.data);

    }

    dataValidation = (data) =>{

        const validationErrors={};

        this.setState({validationErrors});  // set validation errors state emty obj;

        if(!Validator.isEmail(data.email)) validationErrors.email = 'invalid email';    //npm i validator
        if(!data.password) validationErrors.password = 'password is required';

        // make check if validation errors have any error 
        if(Object.keys(validationErrors).length > 0)
            this.setState({
                validationErrors
            });
        
    
        // return validation error status;
        return (Object.keys(validationErrors).length === 0); // true or false;

    }

  render() {

    const { validationErrors,data:{email,password} } = this.state;
    const { authError} = this.props.auth; //authReducer

    const error = (authError) && <div className="red-text text-darken-3">{authError}</div>

    return (
        <div className="container">

            <form onSubmit={this.onSubmit} >

                {error}

                <Row>
                    <Input
                        name="email"
                        s={12}
                        label="email"
                        placeholder="email"
                        error = {(validationErrors.email)?validationErrors.email:null}
                        onChange={this.onChange}
                        value={email}
                        />
                    <Input
                        name="password"
                        type="password"
                        s={12}
                        label="password"
                        placeholder="password"
                        error = {(validationErrors.password)?validationErrors.password:null}
                        onChange={this.onChange}
                        value={password}
                        />

                    <Button className="pink">Login</Button>
                </Row>
            </form>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps,{signIn})(SignIn);
