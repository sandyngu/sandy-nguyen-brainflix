import React from 'react';
import axios from 'axios';
import CommentsForm from '../CommentsForm/CommentsForm'
import './comments-section.scss';

function CommentsBox(props) {
    return ( 
        <div className="comments-section__guestbook">
            <div className="comments-section__guestbook-container">
                <div className="comments-section__guestbook-photo"></div>
                <div className="comments-section__guestbook-entry">
                    <h4 className="comments-section__guestbook-name">{props.name}</h4>
                    <div className="comments-section__guestbook-date">{props.date}</div>
                    <div className="comments-section__guestbook-text">{props.text}</div>
                </div>
            </div>
            <div className="divider comments-section__guestbook-divider"></div>
        </div>
    )
}

let videosURL = 'https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=110f950a-c58f-42c6-969e-3e58a775af61';

class CommentsSection extends React.Component {

    state = {
        commentsList: []
    }
    componentDidMount() {
        axios.get(videosURL)
            .then(res => {
              this.setState({
                commentsList: res.data.comments
                })
            });
    }
    render() {
        return (
            <section className="sub-section">
                <CommentsForm />
                {this.state.commentsList.map(commentsInfo => 
                    <CommentsBox key={commentsInfo.id} name={commentsInfo.name} date={commentsInfo.timestamp} text={commentsInfo.comment}/>)}
            </section>
        );
    }
};

export default CommentsSection;