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

class Navbar extends Component {
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
    this.props.getVideos();
    if (this.props.match.params.curr_url) {
       this.props.setCurrentUrl(this.props.match.params.curr_url);
     }
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

export default connect(mapStateToProps, {getVideos,setCurrentUrl})( Navbar)




// import React, { Component } from 'react'
// import { Player,
//   ControlBar,
//   ReplayControl,
//   ForwardControl,
//   CurrentTimeDisplay,
//   TimeDivider,
//   PlaybackRateMenuButton,
//   VolumeMenuButton,

//   Shortcut,
//   BigPlayButton,
  
// } from 'video-react';
// //import VideoThumbnail from 'react-video-thumbnail'
// //import Video from 'react-native-video';

// import "../../node_modules/video-react/dist/video-react.css"; 



// class Navbar extends Component {
//   componentDidMount() {
    
//     console.log(this.player4)
    
//     this.player4.playbackRate = 2;
//     //this.player4.video.props.player.videoWidth=20;
//     this.forceUpdate();

    
//   }

//   componentDidUpdate(){
//     console.log(this.player4.CurrentTimeDisplay);
//     if(this.player4.video.props.player.seekingTime>this.player4.video.props.player.duration-5){
//       console.log('reached last 10seconds')
//     }
//     console.log(this.player4.video.props.player)
//     console.log('seekingTime',this.player4.video.props.player.seekingTime);
//     console.log('duration',this.player4.video.props.player.duration);
//   }


//   constructor(props, context) {
//     super(props, context);

//     // add your own shortcuts
//     this.newShortcuts = [
//       // Press number 1 to jump to the postion of 10%
//       {
//         keyCode: 49, // Number 1
//         // handle is the function to control the player
//         // player: the player's state
//         // actions: the player's actions
//         handle: (player, actions) => {
          
//           const duration = player.duration;
//           console.log(duration)
//           // jump to the postion of 10%
//           actions.seek(duration * 0.1);
//         }
//       },
//       {
//         keyCode: 38, // Up arrow
//         handle: () => {
//           console.log('d')
//         } // override it's default handle
//       },
//       // Ctrl/Cmd + Right arrow to go forward 30 seconds
//       {
//         keyCode: 39, // Right arrow
//         ctrl: true, // Ctrl/Cmd
//         handle: (player, actions) => {
//           if (!player.hasStarted) {
//             return;
//           }

//           // this operation param is option
//           // helps to display a bezel
//           const operation = {
//             action: 'forward-30',
//             source: 'shortcut'
//           };
//           actions.forward(30, operation); // Go forward 30 seconds
//         }
//       }
//     ];
//   }

//   render() {
//     return (
//   <div className="container">
//         Navbar
//  1/////////////////////////////////////////////////////////
//     <Player
//       playsInline
//       autoPlay
//       poster="/assets/poster.png"
//       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      
//     /> <br/><br/>
// 2//////////////////////////////////////////////////////////////
//      <Player poster="/assets/poster.png">
//       <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
//       <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
//       <BigPlayButton position="center" />
//       <ControlBar autoHide={false}>
//         <ReplayControl seconds={10} order={1.1} />
//         <ForwardControl seconds={30} order={1.2} />
//         <CurrentTimeDisplay order={4.1} />
//         <TimeDivider order={5.2} />
//         <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
//         <VolumeMenuButton disabled />
//         <VolumeMenuButton vertical />
//       </ControlBar>
//     </Player>
// 3////////////////////////////////////////////////////////////
//     <Player src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
//         <Shortcut clickable={false} shortcuts={this.newShortcuts} />
//       </Player>
// 4///////////////////////////////////////////////////////////
// <Player
//         ref={c => {
//           this.player4 = c;
//         }}
     
//         playsInline
//         poster="https://video-react.js.org/assets/poster.png"
//       >
//         <source
//           src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//           type="video/mp4"
//         />
//         <ControlBar>
//           <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
//         </ControlBar>
//       </Player>
// 5/////////////////////////////////////////////////////////////////

// 6/////////////////////////////////////////////////////////

//   </div>
//     )
//   }
// }


// export default Navbar;