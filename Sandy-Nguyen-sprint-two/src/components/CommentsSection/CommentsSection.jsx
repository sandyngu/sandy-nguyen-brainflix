import React from 'react';
import CommentsForm from '../CommentsForm/CommentsForm'
import './comments-section.scss';

function CommentsBox(props) {
    const { name, date, text } = props;
    return ( 
        <div className="comments-section__guestbook">
            <div className="comments-section__guestbook-container">
                <div className="comments-section__guestbook-photo"></div>
                <div className="comments-section__guestbook-entry">
                    <h4 className="comments-section__guestbook-name">{name}</h4>
                    <div className="comments-section__guestbook-date">{date}</div>
                    <div className="comments-section__guestbook-text">{text}</div>
                </div>
            </div>
            <div className="divider comments-section__guestbook-divider"></div>
        </div>
    )
}

class CommentsSection extends React.Component {

    render() {
        return (
            <section className="sub-section">
                <CommentsForm />
                {this.props.heroVideo.map(commentsInfo => 
                    <CommentsBox key={commentsInfo.id} name={commentsInfo.name} date={commentsInfo.timestamp} text={commentsInfo.comment}/>)}
            </section>
        );
    }
};

export default CommentsSection;