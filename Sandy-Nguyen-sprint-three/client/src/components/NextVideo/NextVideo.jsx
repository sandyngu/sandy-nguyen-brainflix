import React from 'react';
import './next-video.scss';

function NextVideo(props) {
    const { image, title, channel, id, heroVideo } = props;
        
            return (   
                <> 
                    {heroVideo[0].id !== id &&
                    <div className="side-section__next-video">                     
                        <img src={image} className="side-section__next-video-image" alt="Video Thumbnail"/>
                        <div className="side-section__next-video-content">
                            <h3 className="side-section__next-video-title">{title}</h3>
                            <h3 className="side-section__next-video-author">{channel}</h3>
                        </div>
                    </div>
                    }
                </>
            );
}

export default NextVideo;
