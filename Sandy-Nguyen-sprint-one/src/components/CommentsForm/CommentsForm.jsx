import React from 'react';
import './comments-form.scss';

const CommentsForm = () => {
    return (     
        <>
            <h2 className="comments-section__heading">3 Comments</h2>
            <div className="comments-section__container">
                    <div className="comments-section__photo"></div>
                    <form className="comments-section__form">
                        <label id="name" htmlFor="comment" className="comments-section__form-title">JOIN THE CONVERSATION</label>
                        <br/><textarea type="text" className="comments-section__form-input" name="comment" placeholder="Write comment here"></textarea>
                        <button className="button comments-section__button" type="submit">COMMENT</button>
                    </form> 
            </div>
            <div className="divider comments-section__guestbook-divider"></div>  
        </>
    )
}

export default CommentsForm;