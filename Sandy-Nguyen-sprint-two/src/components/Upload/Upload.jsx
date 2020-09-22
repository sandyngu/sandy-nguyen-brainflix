import React from "react";
import Header from "../Header/Header";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import "./upload.scss";

function Upload() {
    return (
        <>
            <Header />
            <div className="divider upload-section__divider--thin"></div>
            <div className="upload-section">
                <h1 className="upload-section__heading">Upload Video</h1>
                <div className="divider upload-section__divider upload-section__divider--hidden"></div>
                <div className="upload-section__video">
                    <h4 className="upload-section__video-title">VIDEO THUMBNAIL</h4>
                    <img src={UploadImage} className="upload-section__video-thumbnail" alt="Bicycle Thumbnail"/>
                </div>
                <div className="upload-section__form-container">
                    <form className="upload-section__form">
                        <label className="upload-section__form-title">TITLE YOUR VIDEO</label>
                        <br/><input type="text" className="upload-section__form-input upload-section__form-input-title" placeholder="Add a title to your video"/>
                        <br/><label className="upload-section__form-title">ADD A VIDEO DESCRIPTION</label>
                        <br/><textarea type="text" className="upload-section__form-input upload-section__form-input-description" placeholder="Add a description of your video"/>
                        <div className="divider upload-section__divider upload-section__divider--hidden"></div>
                        <div className=" upload-section__form-options">
                            <button className="upload-section__form-options-publish">PUBLISH</button>
                            <h3 className="upload-section__form-options-cancel">CANCEL</h3>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Upload;