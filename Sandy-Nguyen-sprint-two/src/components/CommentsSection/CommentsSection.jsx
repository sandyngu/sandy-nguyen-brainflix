import React from 'react';
import CommentsForm from '../CommentsForm/CommentsForm'
import './comments-section.scss';

const commentsList = [
    {
        id: 1,
        name: 'Michael Lyons',
        date: '12/18/2018',
        text: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        id: 2,
        name: 'Gary Wong',
        date: '12/18/2018',
        text: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        id: 3,
        name: 'Theodore Duncan',
        date: '11/15/2018',
        text: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }
];

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

function CommentsSection() {

    return (
        <section className="sub-section">
            <CommentsForm />
            {commentsList.map(commentsInfo => 
                <CommentsBox key={commentsInfo.id} name={commentsInfo.name} date={commentsInfo.date} text={commentsInfo.text}/>)}
        </section>
    );
};

export default CommentsSection;