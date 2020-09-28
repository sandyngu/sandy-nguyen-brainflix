import React from 'react';
import HeroVideoControls from '../HeroVideoControls/HeroVideoControls'
import './hero-video.scss'

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';

function HeroVideo(props) {
    return ( 
        <section className="hero">
            <div className="main__hero-video-container">
            {props.heroVideoDetails[0] && 
            <>
                <video poster={props.heroVideoDetails[0].image} src={`${props.heroVideoDetails[0].video}?api_key=${API_KEY}`} type="video/mp4" className="main__hero-video"/>
                <HeroVideoControls heroVideoDetails={props.heroVideoDetails}/> 
            </>
            }
            </div>          
        </section>      
    );
};

export default HeroVideo;
