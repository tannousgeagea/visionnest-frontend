import React from "react";

import { useState } from "react";
import { Helmet } from 'react-helmet'
import './uploadFiles.css'

import TextLabel from '../../components/ui/label-text';
import ImageGallery from '../../features/fileUpload/image-gallery'


const UploadFilesPage = () => {

    const [images, setImages] = useState([]);

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        setImages((prevImages) => [...prevImages, ...files]);
        e.target.value = null;
    };

    return (

        <div className="upload-page-container">

            <Helmet>
                <title>VisionNest - upload files</title>
                <meta property="og:title" content="VisionNest: have a chat with your data" /> 
            </Helmet>

            <div className="upload-page-header">
                <h1>VisionNest</h1>
            </div>

            <div className="separator"></div>

            <div id="upload-page-content">
                <div className="pageHeader">
                    <TextLabel 
                        label='Batch Name'
                        placeholder='Enter batch name ...'
                    />
                    <TextLabel 
                        label='Tag'
                        placeholder='Enter tag ...'
                    />

                </div>

                <div id="uploadContainer">

                <div className="upload-container-content">
                    <ImageGallery />
                </div>

                {/* {images.length === 0 ? (
                        <div className="upload-container-content">
                            <FileUploadButton handleFile={handleFileSelect} />
                        </div>
                    ) : (

                        <div className="upload-container-content after" >
                            <div className="upload-buttom after">
                                <FileUploadButton handleFile={handleFileSelect} />
                            </div>
                            <ImageGallery />
                        </div>
                    )} */}


                </div>
            </div> 
        </div>
    )
}


export default UploadFilesPage
