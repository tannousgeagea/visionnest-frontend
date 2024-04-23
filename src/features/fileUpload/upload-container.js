import React, { useState } from 'react';
import ImageGallery from './image-gallery';
import './upload-container.css';

const UploadContainer = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (event) => {
        processFiles(event.target.files);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
        processFiles(event.dataTransfer.files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isDragging) {
            setIsDragging(true);
        }
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
    };

    const processFiles = (fileList) => {
        const filesArray = Array.from(fileList).map(file => URL.createObjectURL(file));
        setFiles(filesArray);
    };

    return (
        <div className="upload-container"
             onDrop={handleDrop}
             onDragOver={handleDragOver}
             onDragLeave={handleDragLeave}>

            {files.length === 0 ? (
                <button onClick={() => document.getElementById('fileInput').click()}
                        className="select-file-button">
                    Select Files
                </button>
            ) : (
                <ImageGallery images={files} />
            )}

            <input type="file" id="fileInput" style={{ display: 'none' }} multiple onChange={handleFileSelect} />
        </div>
    );
};

export default UploadContainer;
