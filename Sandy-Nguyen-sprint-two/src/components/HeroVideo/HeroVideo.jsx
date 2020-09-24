import React from 'react';
import Poster from '../../assets/images/video-list-0.jpg';
import HeroVideoControls from '../HeroVideoControls/HeroVideoControls'
import './hero-video.scss'

class HeroVideo extends React.Component {
    render() {
        return (
            <div className="main__hero-video-container">
                <video poster={Poster} src="../../assets/video/BrainStation Sample Video.mp4" type="video/mp4" className="main__hero-video"/>
                <HeroVideoControls />
            </div>
        )
    }
}

export default HeroVideo;
