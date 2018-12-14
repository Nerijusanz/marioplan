import React, { Component } from 'react'
import Validator from 'validator'
import { Row,Input,Button } from 'react-materialize'

class CreateProject extends Component {

    state={
        data:{
            title:'',
            content:''
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
        console.log('make request to server');
        console.log(this.state.data);
        //this.props.login(this.state.data);

    }

    dataValidation = (data) =>{

        const validationErrors={};

        this.setState({validationErrors});  // set validation errors state emty obj;

        if(!data.title) validationErrors.title = 'project title is required';
        if(!data.content) validationErrors.content = 'project content is required';

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
                        name="title"
                        s={12}
                        label="project title"
                        placeholder="project title"
                        error = {(this.state.validationErrors.title)?this.state.validationErrors.title:''}
                        onChange={this.onChange}
                        value={this.state.data.title}
                        />
                    <Input
                        name="content"
                        type="textarea"
                        s={12}
                        label="project content"
                        placeholder="project content"
                        error = {(this.state.validationErrors.content)?this.state.validationErrors.content:''}
                        onChange={this.onChange}
                        value={this.state.data.content}
                        />

                    <Button className="pink">save project</Button>
                </Row>
            </form>
        </div>
      
    )
  }
}

export default CreateProject;