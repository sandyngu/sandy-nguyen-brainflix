import React from 'react';

const CommentsSection = () => {
    return ( 
        <section className="main__comments">    
            <div className="main__comments-container">
                <h3 className="main__comments-heading">3 Comments</h3>
                <div className="main__author-date-container">
                    <div className="comments-section__photo"></div>
                    <form className="comments-section__form">
                        <label id="name" htmlFor="comment" className="comments-section__form-title">JOIN THE CONVERSATION</label>
                        <br/><textarea type="text" className="comments-section__form-input" name="comment" placeholder="Write comment here"></textarea>
                        <button className="button comments-section__button" type="submit">COMMENT</button>
                    </form> 
                </div>
            </div>
        </section>  
    )
}

export default CommentsSection;