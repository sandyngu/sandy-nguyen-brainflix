import React from 'react';
// import { Link } from 'react-router-dom';
import './next-video.scss';

function NextVideo(props) {
    const { image, title, channel, id, heroVideo } = props;
        
            return (    
                <div className="side-section__next-video">   
                {heroVideo[0].id !== id &&
                    <>
                        <img src={image} className="side-section__next-video-image" alt="Video Thumbnail"/>
                        <div className="side-section__next-video-content">
                            <h3 className="side-section__next-video-title">{title}</h3>
                            <h3 className="side-section__next-video-author">{channel}</h3>
                        </div>
                    </>
                }
                </div>
            );
}

export default NextVideo;
