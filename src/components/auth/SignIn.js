import React, { Component } from 'react'
import Validator from 'validator'
import { Row,Input,Button } from 'react-materialize'

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
        
        // validation OK;
        console.log('make login to server');
        console.log(this.state.data);
        //this.props.login(this.state.data);

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
    return (
        <div className="container">
            <form onSubmit={this.onSubmit} >
                <Row>
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

                    <Button className="pink">Login</Button>
                </Row>
            </form>
        </div>
      
    )
  }
}

export default SignIn;
