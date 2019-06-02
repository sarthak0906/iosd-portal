import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link } from "react-router-dom"
import { addAssignment } from '../../actions/formAction';
//import TextFieldGroup from './common/TextFieldGroup'
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

import moment from "moment";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

class AddAssignment extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      prerequisite:'',
      description:'',
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount(){
  //   if(this.props.auth.isAuthenticated){
  //     this.props.history.push('/dashboard');
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }

  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }
  onSubmit(e) {
    e.preventDefault();
    const assignmentData = {
        title:this.state.title,
        prerequisite:this.state.prerequisite,
        description:this.state.description
    };
    this.props.addAssignment(assignmentData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
 
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
      }}>
       
        <Typography component="h1" variant="h5" className="mt-5">
Add Assignment
</Typography>
<form style={{width: '100%'
  //marginTop: theme.spacing(1),
}} 
onSubmit={this.onSubmit}
noValidate>
<TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="title"
  label="Title"
  name="title"
  autoComplete="title"
  autoFocus
  value={this.state.title}
  onChange={this.onChange}
  error={errors.title}
/>
<TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  name="prerequisite"
  label="Prerequisite"
  id="prerequisite"
  autoComplete="current-prerequisite"
  value={this.state.prerequisite}
  onChange={this.onChange}
  error={errors.prerequisite}
/>

<TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="description"
  type="description"
  label="Description"
  name="description"
  autoComplete="description"
  autoFocus
  value={this.state.description}
  onChange={this.onChange}
  error={errors.description}
/>

<Button 
  type="submit"
  fullWidth
  variant="contained"
  //color="primary"
  style={{
    backgroundColor:" cornflowerblue",
    color:"white"
    //margin: theme.spacing(3, 0, 2)
  }}
  className="mt-2"
>
  Submit
</Button>

</form>
      </div>
      
    </Container>
    );
  }
}

AddAssignment.propTypes = {

};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addAssignment })(AddAssignment);
