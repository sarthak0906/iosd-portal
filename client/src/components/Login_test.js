import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link } from "react-router-dom"
import { loginUser } from '../actions/authAction';
import TextFieldGroup from './common/TextFieldGroup'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const useStyles = makeStyles(theme => ({
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      // <div className="login">
      //   <div className="container mt-5">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Log In</h1>
      //         <p className="lead text-center">
      //           Sign in to your IOSD account
      //         </p>
      //         <form onSubmit={this.onSubmit}>
      //          <TextFieldGroup
      //             placeholder="Email Address"
      //             name="email"
      //             type="email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //             error={errors.email}
      //           />
      //          <TextFieldGroup
      //             placeholder="Password"
      //             name="password"
      //             type="password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //             error={errors.password}
      //           />
      //           <input type="submit" className="btn  btn-block mt-4" style={{backgroundColor:" cornflowerblue"}} />
      //           <p className="lead text-center">
      //            Don't have an account <Link to="/register">Sign Up</Link>
      //         </p>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Grid container component="main" style={{height: '100vh'}}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={{     
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',}} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="ml-3 mr-3"
        >
          <Avatar style={{
         marginTop:"50px",
         backgroundColor:" cornflowerblue"
        }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //color="primary"
              style={{
                backgroundColor:" cornflowerblue"
                //margin: theme.spacing(3, 0, 2)
              }}
            >
              Sign In
            </Button>
            <Grid container className="mt-4">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{color:"blue"}}to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
