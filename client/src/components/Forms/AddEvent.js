import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link } from "react-router-dom"
import { addEvent } from '../../actions/formAction';
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


import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import moment from "moment";
import { DatePicker, version } from "antd";
import "antd/dist/antd.css";

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      organising_chapter: '',
      description:'',
      url:'',
      date1: moment(),
      date2:moment(),
      type:'',
      errors: {}
    };
    this.handleRadio=this.handleRadio.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

handleChange(newValue){
  this.setState({
    date1:newValue
  })
}
handleChange2(newValue){
  this.setState({
    date2:moment(newValue)
  })
}
handleRadio(newValue){
  this.setState({
    type:newValue.target.value
  })
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

    const eventData = {
      title: this.state.title,
      description: this.state.description,
      url:this.state.url,
      date1:this.state.date1._d,
      date2:this.state.date2._d,
      organising_chapter:this.state.organising_chapter,
      type:this.state.type
    };

    this.props.addEvent(eventData);
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
Add Event
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
  label="Event Tile"
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
  name="organising_chapter"
  label="Organising Chapter"
  id="organising_chapter"
  autoComplete="current-organising_chapter"
  value={this.state.organising_chapter}
  onChange={this.onChange}
  error={errors.organising_chapter}
/>

{/* Date */}
From:
<DatePicker
name="date1"
className="mr-2"
style={{width:"150px "}}
value={moment(this.state.date1)}
onChange={this.handleChange}
defaultValue={moment()} />
To:
<DatePicker
name="date2"
style={{width:"150px "}}
className="ml-1"
value={moment(this.state.date2)}
onChange={this.handleChange2}
defaultValue={moment()} />
{/* Date/ */}


<TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="url"
  type="url"
  label="Link"
  name="url"
  autoComplete="url"
  autoFocus
  value={this.state.url}
  onChange={this.onChange}
  error={errors.url}
/>
<TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="description"
  label="Description"
  name="description"
  autoComplete="description"
  autoFocus
  value={this.state.description}
  onChange={this.onChange}
  error={errors.description}
  multiline={true}
  rows={1}
  rowsMax={4}
/>

<div style={{display: 'flex',size:"30px"}} className="justify-content-center" >
<FormControl component="fieldset" className="d-flex flex-row" >
        <FormLabel component="legend" className="d-flex flex-column">Event Type</FormLabel>
        <RadioGroup
          aria-label="type"
          name="type"
          value={this.state.value}
          onChange={this.handleRadio}
          className="d-flex flex-column"
        >
          <FormControlLabel value="SIG" control={<Radio />} label="SIG" />
          <FormControlLabel value="Workshop" control={<Radio />} label="Workshop" />
          <FormControlLabel value="Fest" control={<Radio />} label="Fest" />
        </RadioGroup>
      </FormControl>
  </div>

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
  Add Event
</Button>

</form>
      </div>
      
    </Container>
    );
  }
}

AddEvent.propTypes = {

};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addEvent })(AddEvent);
