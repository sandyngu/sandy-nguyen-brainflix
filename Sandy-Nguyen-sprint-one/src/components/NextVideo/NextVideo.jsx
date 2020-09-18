import React from 'react';
import './next-video.scss';

function NextVideo(props) {
    return (
        <div className="sub-section__next-video">
            <img src={props.thumbnail} className="sub-section__next-video-thumbnail" alt="Video Thumbnail"/>
            <div className="sub-section__next-video-content">
                <h3 className="sub-section__next-video-title">{props.title}</h3>
                <h3 className="sub-section__next-video-author">{props.author}</h3>
            </div>
        </div>
    );
}

export default NextVideo;