import React from 'react';
import CommentsForm from '../CommentsForm/CommentsForm'
import CommentsBox from '../CommentsBox/CommentsBox'

function CommentsSection(props) {
    return (
        <section className="sub-section">
            <CommentsForm commentsList={props.commentsList} id={props.commentsList.id} addComment={props.addComment} /*handleSubmit={props.handleSubmit}*//>
            {props.commentsList.map(commentsInfo => 
                <CommentsBox key={commentsInfo.id} name={commentsInfo.name} date={commentsInfo.timestamp} text={commentsInfo.comment}/>)}
        </section>
    );
};

export default CommentsSection;