import React from 'react';
import './image-gallery.css'
import useFetchImages from '../../hooks/load-images';

const ImageGallery = () => {
  const { images, loading, error } = useFetchImages();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error loding images: {error.message}</p>
  
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image}
            alt={`Uploaded ${image}`} 
            className='thumbnail'                   
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;