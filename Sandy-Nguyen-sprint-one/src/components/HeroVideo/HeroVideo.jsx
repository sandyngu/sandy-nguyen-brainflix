import React from 'react';
import poster from '../../assets/images/video-list-0.jpg';
import play from '../../assets/icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/icons/SVG/Icon-volume.svg';
import line from '../../assets/icons/PNG/Icon-line.png';
import './hero-video.scss'

const HeroVideo = () => {
    return (
        <div className="main__video-container">
            <video /*controls*/ poster={poster} src="../../assets/video/BrainStation Sample Video.mp4" type="video/mp4" className="main__hero-video"/>
            <VideoControls />
        </div>
    )
}

export default HeroVideo;

const VideoControls = () => {
    return (
        <div className="main__hero-video-controls">
            <img src={play} className="main__hero-video-button main__hero-video-icon main__hero-video-controls-play" alt="Play Icon"/>
            <div className="main__hero-video-button main__hero-video-icon main__hero-video-controls-scrubber"></div>
            <div className="main__hero-video-button main__hero-video-fullscreen-volume-container">
                <img src={fullscreen} className="main__hero-video-icon main__hero-video-controls-fullscreen" alt="Fullscreen Icon"/>
                <img src={volume} className="main__hero-video-icon main__hero-video-controls-volume" alt="Volume Icon"/>
            </div>
        </div>
    )
}

