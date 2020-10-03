import React from 'react';
import { Link } from 'react-router-dom';
import NextVideo from '../NextVideo/NextVideo';

class NextVideoQueue extends React.Component {

    render() {
        return (
            <section className="side-section">
                <p className="side-section__heading">NEXT VIDEO</p>
                    {this.props.nextVideoList.map(videoInfo => 
                        <Link key={videoInfo.id} to={`/video/${videoInfo.id}`} className="side-section__next-video-link">
                            <NextVideo id={videoInfo.id} image={videoInfo.image} title={videoInfo.title} channel={videoInfo.channel} heroVideo={this.props.heroVideoDetails} updateHero={this.props.updateHero}/>
                        </Link>
                    )}                            
            </section>
        );
    };
};

export default NextVideoQueue;