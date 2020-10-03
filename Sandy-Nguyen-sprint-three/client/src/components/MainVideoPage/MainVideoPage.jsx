import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import HeroVideo from '../HeroVideo/HeroVideo';
import HeroVideoDetails from '../HeroVideoDetails/HeroVideoDetails';
import CommentsSection from '../CommentsSection/CommentsSection';
import NextVideoQueue from '../NextVideoQueue/NextVideoQueue';

class MainVideoPage extends React.Component {

    state = {
        heroVideoDetails: [],
        nextVideoList: []
      };
    
    componentDidMount() {
        axios.get('/videos')
        .then(res => {
          this.setState({
              heroVideoDetails: [res.data[0]],
              nextVideoList: res.data.slice(-1)[0]
            });
        })
        .catch(err => console.log(err))
      };

    updateHero = (id) => {
      axios.get(`/videos/${id}`)
      .then(res => {  
        window.scrollTo(0, 0);

        this.setState({
          heroVideoDetails: [res.data]
        })
      })
      .catch(err => console.log(err));
    };
  
    componentDidUpdate(prevProps) {

      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.updateHero(this.props.match.params.id);
      };
    };

    render() {
        return (
          <>
            <Header />
            <HeroVideo heroVideoDetails={this.state.heroVideoDetails} />
            <div className="section-container">
                <section className="main-section">
                    <HeroVideoDetails heroVideoDetails={this.state.heroVideoDetails} />
                    <CommentsSection commentsList={this.state.heroVideoDetails} />
                </section>
                  <NextVideoQueue heroVideoDetails={this.state.heroVideoDetails} nextVideoList={this.state.nextVideoList} updateHero={this.updateHero} />
            </div>
          </>
        );
    };
};

export default MainVideoPage;