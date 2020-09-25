import React from 'react';
import CommentsForm from '../CommentsForm/CommentsForm'
import CommentsBox from '../CommentsBox/CommentsBox'

function CommentsSection(props) {

        return (
            <section className="sub-section">
                <CommentsForm heroVideoComments={props.heroVideoComments}/>
                {props.heroVideoComments.map(commentsInfo => 
                    <CommentsBox key={commentsInfo.id} name={commentsInfo.name} date={commentsInfo.timestamp} text={commentsInfo.comment}/>)}
            </section>
        );
};

export default CommentsSection;