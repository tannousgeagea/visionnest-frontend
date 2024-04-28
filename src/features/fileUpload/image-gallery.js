import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './image-gallery.css'


const ImageGallery = () => {
    const [images, setImages] = useState([]);

    const loadImages = async () => {
        try {
          const response = await fetch('http://192.168.0.142:8000/api/images/');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Raw API response:', data); // Check what the raw API response is
      
          if (Array.isArray(data) && data.length) {
            setImages(data.map(item => item.image_url)); // Adjust according to your API response
          } else {
            console.log('No images found in the response');
          }
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      
      useEffect(() => {
        console.log('useEffect triggered');
        loadImages();
      }, []);
    // const calculateProgress = () => {
    //     const loadedCount = loadedStatus.filter(isLoaded => isLoaded).length;
    //     return (loadedCount / images.length) * 100;
    // };

    return (

        <div class="image-gallery-container">
            
            <div className="image-gallery">
                <img 
                    key='1'
                    src='http://192.168.0.142:8000/media/images/gml-luh_2024-04-02_08-25-55_jpg.rf.9d5ef0f4c32065896a2ce7f206674b5b.jpg'
                    alt={`Uploaded ${images.length}`} 
                    className='thumbnail'                   
                />

                <span>Lenght of Images: {images.length}</span>
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src='http://192.168.0.142:8000/media/images/gml-luh_2024-04-02_08-25-55_jpg.rf.9d5ef0f4c32065896a2ce7f206674b5b.jpg'
                        alt={`Uploaded ${index}`} 
                        className='thumbnail'                   
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;