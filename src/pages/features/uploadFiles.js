import React from "react";

import { useState } from "react";
import { Helmet } from 'react-helmet'
import SelectFiles from "../../features/fileUpload/FileUpload";
import './uploadFiles.css'

import TextLabel from '../../components/ui/label-text';
import Button from '../../components/ui/button';
import fileUpload from '../../assets/icons/datei-upload.png'
import folderUpload from '../../assets/icons/folder-upload.png'
import FileUploadButton from '../../features/fileUpload/FileUploadButton'
import ImageGallery from '../../features/fileUpload/image-gallery'

import UploadContainer from "../../features/fileUpload/upload-container";

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
                    <UploadContainer />
                    {/* <div className="uploadButton">
                        <UploadContainer />

                    </div> */}

                </div>
            </div> 
        </div>
    )
}


export default UploadFilesPage
