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

const VideoView = (props:any) => {
    const { vedioSelect } = props;
    if (!vedioSelect) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${vedioSelect.id.videoId}`;

    return(
        <div>
            <div className='ui embed'>
            <iframe
                // allowfullscreen='true'
                src={videoSrc}
                title={vedioSelect.snippet.title}
            />
            </div>
            <div className='ui segment'>
            <h4 className='ui header'>{vedioSelect.snippet.title}</h4>
            <p>{vedioSelect.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoView;



