import React, { useRef, useState } from 'react';
import { uploadImage } from '../../components/api/api';
import fileUpload from '../../assets/icons/datei-upload.png'
import './image-upload.css'

const ImageUploader = ({ handleFile }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!image) return;
  
      const formData = new FormData();
      formData.append('image', image);
  
      try {
        const data = await uploadImage(formData);
        console.log('Success:', data);
        // Optionally, trigger some global state or notifications
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className='upload-form'>
          <label htmlFor="file-upload" className="upload-file-button">
            <span className="upload-button-text">
              <img src={fileUpload} alt="Button icon" className="button-icon"/>
              Select files
            </span>
          </label>
          <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}/>
          {/* <button type="submit" className='upload-file-button'></button> */}
        </form>
      </div>
    );
};

export default ImageUploader
