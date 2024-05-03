import { useState } from "react";
import uplaodImages from "../components/api/upload-image";

function useUpload() {
    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFiles([...event.target.files]); // Capture all selected files
    };

    const handleUpload = async (file) => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file); // Assuming 'images' is the field expected by the server
        });

        try {
            const response = await uplaodImages(formData);
            setUploadStatus(`Upload file successful: ${file}`);
        } catch (error) {
            setUploadStatus('Upload failed; ' + error.message);
            console.error('Error uploading image:', error);
        }
    };

    return { uploadStatus, handleUpload , handleFileChange};
} 

export default useUpload