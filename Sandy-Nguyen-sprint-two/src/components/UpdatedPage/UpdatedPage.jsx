import React from 'react';
import Header from '../Header/Header';
import HeroVideo from '../HeroVideo/HeroVideo';
import HeroVideoDetails from '../HeroVideoDetails/HeroVideoDetails';
import NextVideoQueue from '../NextVideoQueue/NextVideoQueue';
import CommentsSection from '../CommentsSection/CommentsSection';
import Upload from '../Upload/Upload';
import { Route } from 'react-router-dom';

class UpdatedPage extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <>
                <Header />
                  {/* <HeroVideo heroVideoDetails={this.props.heroVideoDetails}/>
                  <div className="section-container">
                      <section className="main-section">
                          <HeroVideoDetails heroVideoDetails={this.props.heroVideoDetails}/>
                          <CommentsSection heroVideoComments={this.props.commentsList}/>
                      </section>
                        <NextVideoQueue heroVideoDetails={this.props.heroVideoDetails} nextVideoList={this.props.nextVideoList} updateHero={this.props.updateHero} />
                  </div>
                  <Route path='/upload' component={Upload}/> */}
            </>
        )
    }
}

export default UpdatedPage;