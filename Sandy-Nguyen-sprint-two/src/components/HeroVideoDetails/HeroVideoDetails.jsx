import React from 'react';
import HeroVideoText from '../HeroVideoText/HeroVideoText'

function HeroVideoDetails(props) {
        return (    
            <div className="main__video-details">
                {props.heroVideoDetails.map(currentVideoDetailsInfo => 
                <HeroVideoText key={currentVideoDetailsInfo.id} title={currentVideoDetailsInfo.title} channel={currentVideoDetailsInfo.channel} date={currentVideoDetailsInfo.timestamp} views={currentVideoDetailsInfo.views} likes={currentVideoDetailsInfo.likes} description={currentVideoDetailsInfo.description} /> )}          
            </div>       
        );
};

export default HeroVideoDetails;