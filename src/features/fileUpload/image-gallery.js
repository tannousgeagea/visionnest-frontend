import React from 'react';

const ImageGallery = ({ images }) => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Uploaded ${index}`} className="thumbnail" />
            ))}
        </div>
    );
};

export default ImageGallery;