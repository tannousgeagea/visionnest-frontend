import React from "react";
import { Helmet } from 'react-helmet'
import SelectFiles from "../../features/fileUpload/FileUpload";
import './uploadFiles.css'

import TextLabel from '../../components/ui/label-text';
import Button from '../../components/ui/button';
import fileUpload from '../../assets/icons/datei-upload.png'
import folderUpload from '../../assets/icons/folder-upload.png'
import FileUploadButton from '../../features/fileUpload/FileUploadButton'


const UploadFilesPage = () => {
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
                    <div className="uploadButton">
                        <Button 
                            icon={fileUpload}
                            text='select file'
                        />
                        <Button 
                            icon={folderUpload}
                            text='select folder'
                        />

                    </div>

                    < FileUploadButton onFileSelect={SelectFiles} />
                </div>
            </div> 
        </div>
    )
}


export default UploadFilesPage
