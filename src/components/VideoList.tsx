import React  from 'react';
import {
    MDBInput,
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBBtnGroup,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    // MDBCard,
    // MDBCardBody,
    // MDBCardFooter,
    MDBIcon,
    MDBAnimation,
  } from "mdbreact";
import VideoItem from './VideoItem';

const VideoList = (props:any) => {
    const {vedioList,setVedioSelect} = props;
    const rturnVedioList = vedioList.map((video:any) => {
      return (
        <VideoItem
          key={video.id.videoId}
          setVedioSelect={setVedioSelect}
          video={video}
        />
      );
    }); //把從videos 拿到的 Array 每一個都進去 VideoItem 裡面跑
  
    return <div className='ui relaxed divided list'>{rturnVedioList}</div>;
  };
  
  export default VideoList;



//AIzaSyAXy8l36VJLdM5YJvFSsq_PTYJC1nwY6MM