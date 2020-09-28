import React from 'react';
import ViewsIcon from '../../assets/icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/icons/SVG/Icon-likes.svg'
import './hero-video-text.scss';

function HeroVideoText(props) {
    const { title, channel, date, views, likes, description } = props;
    let time = new Date(date);
    let formattedDate = time.toLocaleDateString();

    return (
        <div className="main__video-details">
            <h1 className="main__video-details-title">{title}</h1>
                <div className="main__video-details-container">
                    <div className="main__video-details-channel-date">
                        <h2 className="main__video-details-channel">By {channel}</h2>
                        <h3 className="main__video-details-date">{formattedDate}</h3>
                    </div>
                    <div className="main__video-details-views-likes">
                        <div className="main__video-details-views"><img src={ViewsIcon} alt="Views Logo" className="main__video-icon main__video-icon-views"/>{views}</div>
                        <div className="main__video-details-likes"><img src={LikesIcon} alt="Likes Logo" className="main__video-icon main__video-icon-likes"/>{likes}</div>    
                    </div>
                </div>
                <div className="divider main__video-details-divider"></div>
                <p className="main__video-details-description">{description}</p>
        </div>
    );
};

export default HeroVideoText;