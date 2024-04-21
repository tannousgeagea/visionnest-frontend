import React, { useState } from 'react';
import './FileUpload.css';

function SelectFiles (event) {
    const files = event.target.files;
    console.log(files);

    // const [images, setImages] = useState([]);

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files).map((file) =>
    //         URL.createObjectURL(file)
    //     );

    //     setImages((prevImages) => [...prevImages, ...files]);
    //     e.target.value = null;
    // };

    // return (
    //     <div className='file-uploader-container'>
    //         <input type='file' multiple onChange={handleFileChange} />
    //         <div className='image-gallery'>
    //             {images.map((image, index) =>
    //                 <img key={index} src={image} alt={'uploaded ${index}'} className='thumbnail' />
    //             )}
    //         </div>
    //     </div>
    // );
}


export default SelectFiles