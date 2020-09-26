import React from 'react';
import HeroVideoControls from '../HeroVideoControls/HeroVideoControls'
import './hero-video.scss'

function HeroVideo(props) {

    return ( 
        <section className="hero">
            <div className="main__hero-video-container">
            {props.heroVideoDetails[0] && 
                <>
                <video poster={props.heroVideoDetails[0].image} src="../../assets/video/BrainStation Sample Video.mp4" type="video/mp4" className="main__hero-video"/>
                <HeroVideoControls heroVideoDetails={props.heroVideoDetails}/> 
                </>}
            </div>          
        </section>      
    )
}

export default HeroVideo;
