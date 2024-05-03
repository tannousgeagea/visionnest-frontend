import React, { useRef } from 'react';
import './upload-button.css'

import fileUpload from '../../assets/icons/datei-upload.png'

const FileUploadButton = ({ onChange, onClick }) => {
    const fileInputRef = useRef(null);
    
    const handleClick = () => {
        // when the button is clicked, triger the file input click event
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <input 
                type='file'
                multiple
                id='fileInput'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={onChange}
            />

            <button id='selectFileButton' onClick={onClick} className='upload-file-button'>
                <span className='upload-button-text'>
                    <img src={fileUpload} alt="Button icon" className="button-icon"/>
                    select files
                </span>
            </button> 

        </>
    );
};

export default FileUploadButton