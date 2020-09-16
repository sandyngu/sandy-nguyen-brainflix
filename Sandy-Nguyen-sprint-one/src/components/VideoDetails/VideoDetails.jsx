import React from 'react';

const VideoDetails = () => {
    return (
        <div className="main__video-details-container">
            <h2 className="main__video-name">BMX Rampage: 2018 Highlights</h2>
            <div className="main__author-date-container">
                <h3 className="main__video-author">By Red Cow</h3>
                <p className="date">12/18/2018</p>
            </div>
            <div className="main__views-likes-container">
                <div><img src="../../assets/icons/SVG/Icon-views.svg" alt="Views Logo"/> 1,001,023</div>
                <div><img src="../../assets/icons/SVG/Icon-likes.svg" alt="Likes Logo"/> 110,985</div>    
            </div>
            <div className="divider"></div>
            <p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </div>
    );
};

export default VideoDetails;

