import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect } from 'react-redux';
import {getVideos,setCurrentUrl} from '../actions/videoAction'
import Nav from './video_test1'
import Video from 'video-react/lib/components/Video';
import Spinner from './common/Spinner';
import { runInThisContext } from 'vm';


class Player extends Component {
    constructor(props){
        super(props);
        this.state={
            update:true
        }
      this.setVideoUrl=this.setVideoUrl.bind(this)
    }
    componentWillMount(){
    console.log('pp')
         this.props.getVideos();
         if (this.props.match.params.curr_url) {
            this.props.setCurrentUrl(this.props.match.params.curr_url);
          }
    }
  
    
setVideoUrl(){
// console.log('Set Video Url');

// console.log(this.props.match.params.curr_url)
// 1.this.props.setCurrentUrl(this.props.match.params.curr_url);

// this.setState({
//     update:!this.state.update
// })
//2.this.props.history.push(`course/${flow.curr_url}`)//(value)
//3.window.location.reload()
}
    render() {
      if(this.props.video.video!=null){
        console.log(this.props.video.video.data)
      }
      
        let VideoList
        if(this.props.video.data==null){
        VideoList=<Spinner />
        }
        else{
        VideoList = this.props.video.data.lesson_flow.map((flow) =>
        <li key={flow.curr_url} ><a href={`http://localhost:3000/course/${flow.curr_url}` } >{flow.title}</a></li>
        );
        }

        return (
       <div>
               <div className="uk-container">

        <div className="uk-child-width-expand@s uk-margin-top" uk-grid="true">
            <div className="uk-width-1-3@m">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1@s backg">
                    <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
                        <li className="uk-nav-header">Overview</li>
                        <li><Link to="#">About Course</Link></li>
                        <li className="uk-nav-header">Study</li>
                        <li className="uk-parent">
                            <Link to="#">Blogging & Web Analytics</Link>
                            <ul className="uk-nav-sub">
                                <li><Link to="#">Introduction</Link></li>
                                <li><Link to="#">Creating a blog</Link></li>
                                <li><Link to="#">Creating a Google Analytics Account and linking to Blog account</Link>
                                </li>

                            </ul>
                        </li>
                        <li className="uk-parent">
                            <Link to="#">Search Engine Optimisation</Link>
                            <ul className="uk-nav-sub">
                                <li><Link to="#">Sub item</Link></li>
                                <li><Link to="#">Sub item</Link></li>
                            </ul>
                        </li>
                        <li className="uk-nav-header">Progress</li>
                        <li><Link to="#">Progress Tracker</Link></li>

                        <li className="uk-nav-header">Video</li>
                        
                        {VideoList}

                    </ul>
                </div>
            </div>
            <div className="uk-width-expand@s">
               {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/_cPHiwPqbqo" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe> */}
              <Nav />
                <br/>
                <br/>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m backg">
                    <h3 className="uk-card-title" style={{fontSize:'18px',color:'#fff'}}>Default</h3>
                    <p style={{fontSize:'14px',marginTop:'-10px'}}>Lorem ipsum <Link to="#">dolor</Link> sit amet, consectetur
                        adipiscing elit,
                        sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                        <h3 className="uk-card-title" style={{fontSize:'18px',color:'#fff'}}>Default</h3>
                        <p style={{fontSize:'14px',marginTop:'-10px'}}>Lorem ipsum <Link to="#">dolor</Link> sit amet, consectetur
                            adipiscing elit,
                            sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>
    </div>
    </div>
        )
    }
}
const mapStateToProps=state=>({
    video:state.video
 })
export default connect(mapStateToProps, {getVideos,setCurrentUrl})(Player);