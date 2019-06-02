import React, { Component } from 'react'
import {Link } from "react-router-dom"
import PropTypes from  'prop-types'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/authAction'
import {clearCurrentProfile,clearAllUsers} from '../../actions/authAction';

 class Bar extends Component {

  onLogoutClick(e){
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    this.props.clearAllUsers();

  }
  
  render() {

    const {isAuthenticated,user} =this.props.auth;
    const guestLinks=(
      <div class="ml-3 mr-sm-2">
                          <button class=" btn bg-danger " style={{borderRadius: "30px 0px 0px 30px", color: "white",height:"35px",textAlign: "center"}}>
                            <div class="align-middle"><a href="https://iosd.tech/" style={{color:"white",textDecoration:"none"}}>IOSD</a></div>
                          </button>
                          <button class=" btn bg-primary" style={{borderRadius: "0px 30px 30px 0px", color: "white",height:"35px",textAlign: "center"}}>
                            <div class="align-middle"><Link to="/login" style={{color:"white",textDecoration:"none"}}>login</Link></div>
                          </button>
                        </div>   
    );

    const authLinks=(
      <div class="ml-3 mr-sm-2">
                          <button class=" btn bg-danger " style={{borderRadius: "30px 0px 0px 30px", color: "white",height:"35px",textAlign: "center"}}>
                            <div class="align-middle"><a href="https://iosd.tech/" style={{color:"white",textDecoration:"none"}}>IOSD</a></div>
                          </button>
                          <button class=" btn bg-primary" style={{borderRadius: "0px 30px 30px 0px", color: "white",height:"35px",textAlign: "center"}}>
                            <div class="align-middle"><a href="" onClick={this.onLogoutClick.bind(this)} style={{color:"white",textDecoration:"none"}}>logout</a></div>
                          </button>
                        </div>   
     
    );

    return (
      <div>
   <nav class="navbar  navbar-expand-lg navbar-light bg-white shadow">
            <img src="/img/iosd.PNG" style={{height: "40px",width: "140px"}}/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active ml-3 mr-3">
                  <Link class="nav-link" to="/" style={{fontWeight: "bolder"}}>Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active dropdown ml-3 mr-3">
                  <a style={{fontWeight: "bolder"}}class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Courses
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item active dropdown ml-3 mr-3">
                        <a style={{fontWeight: "bolder"}}class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Career Tracks<sup style={{color: "lightseagreen"}}> New</sup>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                     {isAuthenticated ?
                      <li class="nav-item active ml-3 mr-3">
                      <Link style={{fontWeight: "bolder"}}class="nav-link" to="/enrollment">Dashboard <span class="sr-only">(current)</span></Link>
                    </li>:
                  <div></div>}
                          <li class="nav-item active ml-3 mr-3">
                                <a class="nav-link" href="#"style={{fontWeight: "bolder"}}>Events <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item active ml-3 mr-3">
                                    <a class="nav-link" href="#" style={{fontWeight: "bolder"}}>Campus ---- <span class="sr-only">(current)</span></a>
                                  </li>
                              <li class="nav-item active ml-3 mr-3">
                                    <a class="nav-link" href="#" style={{fontWeight: "bolder"}}>Placement Cell <span class="sr-only">(current)</span></a>
                                  </li>
                                  {user.priority==1?
                                <li class="nav-item active ml-3 mr-3">
                                <Link class="nav-link" to="/manage-users" style={{fontWeight: "bolder"}}>Manage Users <span class="sr-only">(current)</span></Link>
                              </li>:
                              <div></div>  
                                }
                                
              </ul>
              <form class="form-inline my-2 my-lg-0">
              {isAuthenticated ?authLinks:guestLinks}
                                           
              </form>
            </div>
          </nav>

      </div>
    )
  }
}

Bar.propTypes={
    logoutUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  }

const mapStateToProps=state=>({
    auth:state.auth
})


export default connect(mapStateToProps,{logoutUser,clearCurrentProfile,clearAllUsers})(Bar);