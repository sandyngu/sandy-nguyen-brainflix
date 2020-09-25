import React from 'react';
import './next-video.scss';

function NextVideo(props) {
const { image, title, channel, id } = props;
    return (
    <div className="sub-section__next-video" onClick={() => props.updateHero(id)}>
            <img src={image} className="sub-section__next-video-image" alt="Video Thumbnail"/>
            <div className="sub-section__next-video-content">
                <h3 className="sub-section__next-video-title">{title}</h3>
                <h3 className="sub-section__next-video-author">{channel}</h3>
            </div>
        </div>
    );
}

export default NextVideo;
