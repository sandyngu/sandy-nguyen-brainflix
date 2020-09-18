import React from 'react';
import viewsIcon from '../../assets/icons/SVG/Icon-views.svg'
import likesIcon from '../../assets/icons/SVG/Icon-likes.svg'
import './video-details.scss';

const VideoDetails = () => {
    return (
        <div className="main__video-details">
            <h1 className="main__video-details-title">BMX Rampage: 2018 Highlights</h1>
            <div className="main__video-details-container">
                <div className="main__video-details-author-date">
                    <h2 className="main__video-details-author">By Red Cow</h2>
                    <h3 className="main__video-details-date">12/18/2018</h3>
                </div>
                <div className="main__video-details-views-likes">
                    <div className="main__video-details-views"><img src={viewsIcon} alt="Views Logo" className="main__video-icon main__video-icon-views"/> 1,001,023</div>
                    <div className="main__video-details-likes"><img src={likesIcon} alt="Likes Logo" className="main__video-icon main__video-icon-likes"/> 110,985</div>    
                </div>
            </div>
            <div className="divider main__video-details-divider"></div>
            <p className="main__video-details-description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </div>
    );
};

export default VideoDetails;

