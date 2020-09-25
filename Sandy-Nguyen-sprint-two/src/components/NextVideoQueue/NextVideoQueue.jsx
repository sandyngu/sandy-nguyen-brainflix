import React from 'react';
import axios from 'axios';
import NextVideo from '../NextVideo/NextVideo';

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';

class NextVideoQueue extends React.Component {

    state = {
        videoList: []
    }
    componentDidMount() {
        axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data)
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
                    <NextVideo key={videoInfo.id} id={videoInfo.id} image={videoInfo.image} title={videoInfo.title} channel={videoInfo.channel} updateHero={this.props.updateHero}/>)}
            </section>
        );
    };
};

export default NextVideoQueue;