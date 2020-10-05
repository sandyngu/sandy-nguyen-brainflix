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
              nextVideoList: res.data[res.data.length-1]
            });
        })
        .catch(err => console.log(err))
      };

    updateHero = (id) => {
      axios.get(`/videos/${id}`)
      .then(res => {  
        window.scrollTo(0, 0);

        let commentsForm = document.querySelector('.comments-section__form');
        commentsForm.reset();
        
        this.setState({
          heroVideoDetails: [res.data]
        });
      })
      .catch(err => console.log(err));
    };
  
    componentDidUpdate(prevProps) {

      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.updateHero(this.props.match.params.id);
      };
    };

    returnToHome() {
      axios.get('/videos')
        .then(res => {
          this.setState({
              heroVideoDetails: [res.data[0]],
              nextVideoList: res.data[res.data.length-1]
            });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
          <>
            <Header returnToHome={this.state.returnToHome} />
            <HeroVideo heroVideoDetails={this.state.heroVideoDetails} />
            <div className="section-container">
                <section className="main-section">
                    <HeroVideoDetails heroVideoDetails={this.state.heroVideoDetails} />
                    <CommentsSection commentsList={this.state.heroVideoDetails} />
                </section>
                  <NextVideoQueue heroVideoDetails={this.state.heroVideoDetails} nextVideoList={this.state.nextVideoList} />
            </div>              
          </>
        );
    };
};

export default MainVideoPage;