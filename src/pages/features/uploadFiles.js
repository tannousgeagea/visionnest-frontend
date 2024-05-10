import React from "react";

import { useRef } from 'react';
import { useState } from "react";
import { Helmet } from 'react-helmet'
import './uploadFiles.css'

import TextLabel from '../../components/ui/label-text';
import ImageGallery from '../../features/fileUpload/image-gallery'
import FileSelectButton from "../../components/ui/select-button";
import useUpload from "../../hooks/use-upload";
import ImagePreview from '../../features/fileUpload/image-preview'
import useSelect from "../../hooks/selct-file";
import FileUploadButton from "../../components/ui/upload-button";

const UploadFilesPage = () => {
    const { files, images, handleFileSelect } = useSelect();
    const { uploadStatus, handleUpload } = useUpload();

    const upload = () => {
        handleUpload(files);
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

                {images.length === 0 ? (
                        <div className="upload-container-content">
                            <FileSelectButton onChange={handleFileSelect} />
                        </div>
                    ) : (

                        <div className="upload-container-content after" >
                            <div className="upload-buttom after">
                                <FileSelectButton onChange={handleFileSelect} />
                                <FileUploadButton onClick={handleUpload} files={files} />
                            </div>
                            <ImagePreview images={images} />
                        </div>
                    )}


                </div>
            </div> 
        </div>
    )
}


export default UploadFilesPage
