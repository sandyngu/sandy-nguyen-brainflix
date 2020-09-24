import React from 'react';
import axios from 'axios';
import './next-video.scss';

let API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';
let videosURL = `https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`;

class NextVideoQueue extends React.Component {

    state = {
        videoList: []
    }
    componentDidMount() {
        axios.get(videosURL)
        .then(res => {
          this.setState({
            videoList: res.data})
          })
        .catch(err => console.log(err));
    }

    
    render() {
        return (
            <section className="sub-section">
                <p className="sub-section__heading">NEXT VIDEO</p>
                {this.state.videoList.map(videoInfo => 
                    <NextVideo key={videoInfo.id} id={videoInfo.id} image={videoInfo.image} title={videoInfo.title} channel={videoInfo.channel}/>)}
            </section>
        );
    };
};

export default NextVideoQueue;

function NextVideo(props) {
    return (
    <div className="sub-section__next-video" /*onClick={() => changeToHero()}*/>
            <img src={props.image} className="sub-section__next-video-image" alt="Video Thumbnail"/>
            <div className="sub-section__next-video-content">
                <h3 className="sub-section__next-video-title">{props.title}</h3>
                <h3 className="sub-section__next-video-author">{props.channel}</h3>
            </div>
        </div>
    );
}
