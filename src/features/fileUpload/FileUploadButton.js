import React, { useRef } from 'react';
import './FileUploadButton.css'

import fileUpload from '../../assets/icons/datei-upload.png'

const FileUploadButton = ({ onFileSelect }) => {
    const fileInputRef = useRef(null);
    const handleClick = () => {
        // when the button is clicked, triher the file input click event
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <input 
                type='file'
                id='fileInput'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={onFileSelect}
            />

            <button id='selectFileButton' onClick={handleClick} className='button-36'>
                <span className='button-text'>
                    <img src={fileUpload} alt="Button icon" className="button-icon"/>
                    select file
                </span>
            </button> 

        </>
    );
};

export default FileUploadButton