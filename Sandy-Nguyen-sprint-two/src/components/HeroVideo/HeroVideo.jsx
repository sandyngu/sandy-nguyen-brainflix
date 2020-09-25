import React from 'react';
import HeroVideoControls from '../HeroVideoControls/HeroVideoControls'
import './hero-video.scss'

function HeroVideo(props) {
        return (
            <div className="main__hero-video-container">
                <video poster={props.image} src="../../assets/video/BrainStation Sample Video.mp4" type="video/mp4" className="main__hero-video"/>
                <HeroVideoControls duration={props.duration}/>
            </div>
        )
}

export default HeroVideo;
