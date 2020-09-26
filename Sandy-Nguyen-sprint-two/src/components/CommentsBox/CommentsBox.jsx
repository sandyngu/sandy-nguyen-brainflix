import React from 'react';
import './comments-box.scss';

function CommentsBox(props) {
    const { name, date, text } = props;
    let time = new Date(date);
    let formattedDate = time.toLocaleDateString();

    return ( 
        <div className="comments-section__guestbook">
            <div className="comments-section__guestbook-container">
                <div className="comments-section__guestbook-photo"></div>
                <div className="comments-section__guestbook-entry">
                    <h4 className="comments-section__guestbook-name">{name}</h4>
                    <div className="comments-section__guestbook-date">{formattedDate}</div>
                    <div className="comments-section__guestbook-text">{text}</div>
                </div>
            </div>
            <div className="divider comments-section__guestbook-divider"></div>
        </div>
    )
}

export default CommentsBox;