import { useState } from "react";
import uplaodImages from "../components/api/upload-image";

function useUpload() {
    const [uploadStatus, setUploadStatus] = useState('');

    const handleUpload = async (files) => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file); // Assuming 'images' is the field expected by the server
        });

        try {
            const response = await uplaodImages(formData);
            setUploadStatus(`Upload file successful: ${files}`);
        } catch (error) {
            setUploadStatus('Upload failed; ' + error.message);
            console.error('Error uploading image:', error);
        }
    };

    return { uploadStatus, handleUpload };
} 

export default useUpload