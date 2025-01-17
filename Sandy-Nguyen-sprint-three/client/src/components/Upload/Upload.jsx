import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import Header from '../Header/Header';
import UploadImage from '../../assets/images/Upload-video-preview.jpg';
import Video from '../../assets/video/BrainStation Sample Video.mp4';
import './upload.scss';

class Upload extends React.Component {

    cancelForm() {
        const uploadForm = document.querySelector('.upload-section__form');
        uploadForm.reset();
    };

    uploadVideo = (e) => {
        e.preventDefault();
        this.cancelForm();
        window.scrollTo(0, 0);

        const time = new Date().getTime();
        const generatedId = `${uuid.v4()}`
  
        const newNextVideo = {
            id: generatedId,
            title: e.target.title.value,
            channel: 'BrainStation',
            image: UploadImage
        }
        
        const newHeroVideo = {
            id: generatedId,
            title: e.target.title.value,
            channel: 'BrainStation',
            image: UploadImage,
            description: e.target.description.value,
            views: '123,456',
            likes: '789,110',
            duration: "3:45",
            video: Video,
            timestamp: time,
            comments: [
                {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                },
                {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                },
                {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                }
            ]         
        }
  
    axios.post('/videos', {newNextVideo, newHeroVideo})
        .catch(err => console.log(err));

        alert('New Video Successfully Uploaded!');
    };

    render() {
        return (
            <>
                <Header />
                <div className="divider upload-section__divider--thin"></div>
                <div className="upload-section">
                    <h1 className="upload-section__heading">Upload Video</h1>
                    <div className="divider upload-section__divider upload-section__divider--hidden"></div>
                    <div className="upload-section__container">
                        <div className="upload-section__video-form-container">
                            <div className="upload-section__video">
                                <h4 className="upload-section__video-title">VIDEO THUMBNAIL</h4>
                                <img src={UploadImage} className="upload-section__video-thumbnail" alt="Bicycle Thumbnail"/>
                            </div>
                            <div className="upload-section__form-container">
                                <form className="upload-section__form" onSubmit={this.uploadVideo}>
                                    <label className="upload-section__form-title">TITLE YOUR VIDEO</label>
                                    <br/><input type="text" name="title" className="upload-section__form-input upload-section__form-input-title" placeholder="Add a title to your video"/>
                                    <br/><label className="upload-section__form-title">ADD A VIDEO DESCRIPTION</label>
                                    <br/><textarea type="text" name="description" className="upload-section__form-input upload-section__form-input-description" placeholder="Add a description of your video"/>
                                    <div className=" upload-section__form-options">
                                        <button className="upload-section__form-options-publish">PUBLISH</button>
                                        <h3 className="upload-section__form-options-cancel" onClick={this.cancelForm}>CANCEL</h3>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="divider upload-section__divider upload-section__form-divider upload-section__divider--hidden upload-section__divider--hidden-bottom"></div>
                    </div>
                </div>
            </>
        );
    };
};  

export default Upload;