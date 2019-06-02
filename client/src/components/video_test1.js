import React, { Component } from 'react'
import { Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
    Shortcut,
    PlayToggle,
    BigPlayButton,
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import {connect } from 'react-redux';
import {getVideos,setCurrentUrl} from '../actions/videoAction'
import lock from './common/lock.jpg'
import Spinner from './common/Spinner'

class Nav extends Component {
  constructor(){
    super();
    this.state={
        player:null,
        completed:false,
        nextplayer:null
    };
    this.check = this.check.bind(this);
  }

  componentDidMount(){
    //1.Set Url to redux
  }
  componentDidUpdate(){
    console.log(this.player);
    //video completed
    if(this.player !=null){
      console.log('a')
      this.interval = setInterval(() => {
        if(this.player.video.props.player.currentTime>=this.player.video.props.player.duration*0.7||this.player.video.props.player.ended===true){
          console.log('Video Completed')
          this.setState({
            completed:true
          })
        }
        }, 5000);
        //Next video to be played
        this.interval = setInterval(() => {
          if(this.player.video.props.player.ended===true){
            console.log('Next Video to be played.')
            //this.nextplayer.play()
          }
        }, 5000);
    }
  }

  //clear interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //check function
  check(){
    console.log('check called ',this.player.video.props.player);
    if(this.player.video.props.player.currentTime>=this.player.video.props.player.duration*0.7||this.player.video.props.player.ended===true){
      console.log('Video Completed')
      this.setState({
        boolean:true
      })
    }
    console.log(this.player.video.props.player)
    console.log('currentTime',this.player.video.props.player.currentTime);
    console.log('duration',this.player.video.props.player.duration);
  }
  render() {


    let VideoUrl
    if(this.props.video.video==null){
    VideoUrl=<Spinner />
    }
    else{
      VideoUrl=<div>
      <Player 
      ref={c => {
        this.player = c;
        this.state.player=c;
      }}
      //poster="https://video-react.js.org/assets/poster.png"
      >
      <source src={this.props.video.video.data} />
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <PlayToggle />
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={5.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
    </div>
    }
    return (
      <div>
        {this.state.completed? <div>Video is completed</div>:<div></div>  }
        <div onClick={this.check}>
          {VideoUrl}
{/*{this.state.completed?
  <div >
  <Player 
  ref={d => {
    this.nextplayer = d;
    this.state.nextplayer=d;
  }}
  poster="https://video-react.js.org/assets/poster.png">
    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
    <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
  <BigPlayButton position="center" />
  <ControlBar autoHide={false}>
    <PlayToggle />
    <ReplayControl seconds={10} order={1.1} />
    <ForwardControl seconds={30} order={1.2} />
    <CurrentTimeDisplay order={4.1} />
    <TimeDivider order={5.2} />
    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
    <VolumeMenuButton disabled />
    <VolumeMenuButton vertical />
  </ControlBar>
</Player>
</div>
:
<div className="mb-5">
<img className="over" src={lock} style={{width:'50px',height:'50px'}}></img>
<img className="under" src="https://video-react.js.org/assets/poster.png"></img>

</div>  
} */}

 </div>
      </div>
     
    )
  }
}
const mapStateToProps=state=>({
  video:state.video
})

export default connect(mapStateToProps, {setCurrentUrl})( Nav)
