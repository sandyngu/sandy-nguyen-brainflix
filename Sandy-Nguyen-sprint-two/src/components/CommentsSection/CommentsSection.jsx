import React from 'react';
import CommentsForm from '../CommentsForm/CommentsForm'
import CommentsBox from '../CommentsBox/CommentsBox'

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