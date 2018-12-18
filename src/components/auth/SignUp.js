import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator'
import { Row,Input,Button } from 'react-materialize'

import { signUp } from '../../redux/actions/authActions';

class SignUp extends Component {

    state={
        data:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            passwordConf:''
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
        
        this.props.signUp(this.state.data);

    }

    dataValidation = (data) =>{

        const validationErrors={};

        this.setState({validationErrors});  // set validation errors state emty obj;

        if(!data.firstname) validationErrors.firstname = 'first name is required';
        if(!data.lastname) validationErrors.lastname = 'last name is required';
        if(!Validator.isEmail(data.email)) validationErrors.email = 'invalid email';    //npm i validator

        const minSimbolsNum = 6;
        if( data.password.length < minSimbolsNum ) validationErrors.password = `password must consist min ${minSimbolsNum} simbols`;
        if( data.passwordConf.length < minSimbolsNum ) validationErrors.passwordConf = `password must consist min ${minSimbolsNum} simbols`;

        if(!Validator.equals(data.password,data.passwordConf)) validationErrors.passwordConf = 'pasword isn`t match';

        // make check if validation errors have any error 
        if(Object.keys(validationErrors).length > 0)
            this.setState({
                validationErrors
            });
        
    
        // return validation error status;
        return (Object.keys(validationErrors).length === 0); // true or false;

    }

  render() {

    const { authError} = this.props.auth; //authReducer

    const error = (authError) && <div className="red-text text-darken-3">{authError}</div>


    return (
        <div className="container">
            <form onSubmit={this.onSubmit} >

                {error}

                <Row>
                    <Input
                        name="firstname"
                        type="text"
                        s={12}
                        label="first name"
                        placeholder="first name"
                        error = {(this.state.validationErrors.firstname)?this.state.validationErrors.firstname :''}
                        onChange={this.onChange}
                        value={this.state.data.firstname}
                        />
                    <Input
                        name="lastname"
                        type="text"
                        s={12}
                        label="last name"
                        placeholder="last name"
                        error = {(this.state.validationErrors.lastname)?this.state.validationErrors.lastname:''}
                        onChange={this.onChange}
                        value={this.state.data.lastname}
                        />
                    <Input
                        name="email"
                        s={12}
                        label="email"
                        placeholder="email"
                        error = {(this.state.validationErrors.email)?this.state.validationErrors.email:''}
                        onChange={this.onChange}
                        value={this.state.data.email}
                        />
                    <Input
                        name="password"
                        type="password"
                        s={12}
                        label="password"
                        placeholder="password"
                        error = {(this.state.validationErrors.password)?this.state.validationErrors.password:''}
                        onChange={this.onChange}
                        value={this.state.data.password}
                        />

                    <Input
                        name="passwordConf"
                        type="password"
                        s={12}
                        label="password confirm"
                        placeholder="password confirm"
                        error = {(this.state.validationErrors.passwordConf)?this.state.validationErrors.passwordConf:''}
                        onChange={this.onChange}
                        value={this.state.data.passwordConf}
                        />

                    <Button className="pink">SignUp</Button>
                </Row>
            </form>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{signUp})(SignUp);
