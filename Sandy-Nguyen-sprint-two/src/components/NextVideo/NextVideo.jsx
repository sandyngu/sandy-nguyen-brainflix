import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './next-video.scss';


class NextVideoQueue extends React.Component {
    
    render() {
        return (
            <section className="sub-section">
                <p className="sub-section__heading">NEXT VIDEO</p>
                {this.props.videoList.map(videoInfo => 
                    <NextVideo key={videoInfo.id} id={videoInfo.id} image={videoInfo.image} title={videoInfo.title} channel={videoInfo.channel}/>)}
            </section>
        );
    };
};

export default NextVideoQueue;

function NextVideo(props) {
    return (
        <div className="sub-section__next-video">
            <img src={props.image} className="sub-section__next-video-image" alt="Video Thumbnail"/>
            <div className="sub-section__next-video-content">
                <h3 className="sub-section__next-video-title">{props.title}</h3>
                <h3 className="sub-section__next-video-author">{props.channel}</h3>
            </div>
        </div>
    );
}
