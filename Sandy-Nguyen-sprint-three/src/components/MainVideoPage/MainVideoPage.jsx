import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import HeroVideo from '../HeroVideo/HeroVideo';
import HeroVideoDetails from '../HeroVideoDetails/HeroVideoDetails';
import CommentsSection from '../CommentsSection/CommentsSection';
import NextVideoQueue from '../NextVideoQueue/NextVideoQueue';

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';
// const searchUrl = search =>
// `https://project-2-api.herokuapp.com/videos/search?api_key=${API_KEY}&q=${search}`;

class MainVideoPage extends React.Component {

    state = {
        heroVideoDetails: [],
        commentsList: [],
        nextVideoList: []
      };
    
    componentDidMount() {
      let URL1 = `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`;
      let URL2 = `https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`;
  
      const requestOne = axios.get(URL1);
      const requestTwo = axios.get(URL2);
  
      axios.all([requestOne, requestTwo])
          .then(
      axios.spread((...res) => {             
        this.setState({
          heroVideoDetails: [res[0].data],
          commentsList: res[0].data.comments,
          nextVideoList: res[1].data
        });
      })
    )
    .catch(err => {
      console.error(err);
    });
    };
  
    updateHero = (id) => {
      axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${API_KEY}`)
      .then(res => {  
        this.setState({
          heroVideoDetails: [res.data],
          commentsList: res.data.comments, 
        });
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
                    <CommentsSection commentsList={this.state.commentsList} />
                </section>
                  <NextVideoQueue heroVideoDetails={this.state.heroVideoDetails} nextVideoList={this.state.nextVideoList} />
            </div>
          </>
        );
    };
};

export default MainVideoPage;