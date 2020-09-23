import React from 'react';
import axios from 'axios';
import ViewsIcon from '../../assets/icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/icons/SVG/Icon-likes.svg'
import './video-details.scss';

let videosURL = 'https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=110f950a-c58f-42c6-969e-3e58a775af61';

function HeroVideoText(props) {
    return (
        <div className="main__video-details">
            <h1 className="main__video-details-title">{props.title}</h1>
                <div className="main__video-details-container">
                    <div className="main__video-details-author-date">
                        <h2 className="main__video-details-author">{props.author}</h2>
                        <h3 className="main__video-details-date">{props.date}</h3>
                    </div>
                    <div className="main__video-details-views-likes">
                        <div className="main__video-details-views"><img src={ViewsIcon} alt="Views Logo" className="main__video-icon main__video-icon-views"/>{props.views}</div>
                        <div className="main__video-details-likes"><img src={LikesIcon} alt="Likes Logo" className="main__video-icon main__video-icon-likes"/>{props.likes}</div>    
                    </div>
                </div>
                <div className="divider main__video-details-divider"></div>
                <p className="main__video-details-description">{props.description}</p>
        </div>
    )
};

class HeroVideoDetails extends React.Component {
    
    state = {
        currentVideoDetails: [
    
            {
                id: 0,
                title: 'BMX Rampage: 2018 Highlights',
                author: 'By Red Cow',
                date: '12/18/2018',
                views: '1,001,023',
                likes: '110,985',
                description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title'
            }
        ]
    }

    render() {   
        return (    
            <div className="main__video-details">
                {this.state.currentVideoDetails.map(currentVideoDetailsInfo => 
                <HeroVideoText key={currentVideoDetailsInfo.id} title={currentVideoDetailsInfo.title} author={currentVideoDetailsInfo.author} date={currentVideoDetailsInfo.date} views={currentVideoDetailsInfo.views} likes={currentVideoDetailsInfo.likes} description={currentVideoDetailsInfo.description} /> )}          
            </div>       
        );
    };
};

export default HeroVideoDetails;

