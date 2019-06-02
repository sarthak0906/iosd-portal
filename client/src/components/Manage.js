import React, { Component } from 'react'
import {getAllUsers} from '../actions/manageAction'
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import Spinner from './common/Spinner';
import {Link} from 'react-router-dom';


class Manage extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount(){
    if(this.props.auth.user.priority!='1'){
      this.props.history.push('/dashboard');
    }
    this.props.getAllUsers();
  }

  render() {
    
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default  connect(mapStateToProps,{getAllUsers})(Manage)