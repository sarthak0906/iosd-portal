import React, { Component } from 'react'
//import axios from 'axios';

import { connect } from 'react-redux';
import { registerUser } from '../actions/authAction'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import TextFieldGroup from './common/TextFieldGroup';
import {Link } from "react-router-dom"

class Register extends Component {
  constructor(){
      super();
      this.state={
          name:'',
          email:'',
          password:'',
          password2:'',
          errors:{},
          captcha:''
      };

      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  }


  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/0');
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})
    }
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
      e.preventDefault();
      const newUser={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2,
          
      }
      
       this.props.registerUser(newUser,this.props.history);
      // axios.post('/api/users/register',newUser)
      //    .then(res=>console.log(res.data))
      //    .catch(err=>this.setState({errors:err.response.data}))
  }

  render() {
      const {errors}=this.state;

      //const {user}=this.props.auth;

      //const errors=this.state.errors;
    return (
      <div>
        <div className="register">
        {/*user ? user.name:null*/}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your IOSD account</p>
          <form noValidate onSubmit={this.onSubmit}>
          <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
           <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info=""
                />
                <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              /><TextFieldGroup
              placeholder="Confirm password"
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
            />
            <input type="submit" className="btn btn-block mt-4" style={{backgroundColor:" cornflowerblue"}}/>
            <p className="lead text-center">Already have an account <Link to ="/login">Log In</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>        
      </div>
    )
  }
}

Register.propTypes={
  registerUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
  
}

//this.props.errors
const mapStateToProps =(state)=>({
  auth:state.auth,
  errors:state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));