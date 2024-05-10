import './upload-button.css'
import fileUpload from '../../assets/icons/datei-upload.png'


const FileUploadButton = ( { onClick, files } ) => {
    
    console.log(files)
    return (
        <button id='selectFileButton' onClick={() => onClick(files)} className='upload-file-button'>
            <span className='upload-button-text'>
                <img src={fileUpload} alt="Button icon" className="button-icon"/>
                save files
            </span>
    </button> 
    );
};

export default FileUploadButton