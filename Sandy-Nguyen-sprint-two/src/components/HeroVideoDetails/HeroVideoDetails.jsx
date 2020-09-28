import React from 'react';
import HeroVideoText from '../HeroVideoText/HeroVideoText'

function HeroVideoDetails(props) {
        return (    
            <div className="main__video-details">
                {props.heroVideoDetails && 
                <>
                    {props.heroVideoDetails.map(videoDetails => 
                    <HeroVideoText key={videoDetails.id} title={videoDetails.title} channel={videoDetails.channel} date={videoDetails.timestamp} views={videoDetails.views} likes={videoDetails.likes} description={videoDetails.description} />)}          
                </>}
            </div>    
        );
};

export default HeroVideoDetails;