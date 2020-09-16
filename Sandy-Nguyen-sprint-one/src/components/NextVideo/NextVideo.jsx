import React from 'react';

function NextVideo(props) {
    return (
        <div className="sub-section__next-video">
            <img src={props.thumbnail} className="sub-section__next-video-thumbnail" alt="Video Thumbnail"/>
            <div className="sub-section__next-video-content">
                <p className="sub-section__video-title">{props.title}</p>
                <p className="sub-section__video-author">{props.author}</p>
            </div>
        </div>
    );
}

export default NextVideo;