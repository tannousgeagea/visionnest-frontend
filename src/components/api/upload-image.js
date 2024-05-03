import { UploadImageUrl } from "./base";

async function uplaodImages(formData) {
    try {
        const response = await fetch(`${UploadImageUrl}/upload_images/`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return await response.json();
    } catch (error) {
        console.error('Error uploading images:', error);
        throw error;
    }
}

export default uplaodImages