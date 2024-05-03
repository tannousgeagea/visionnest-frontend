import { baseURL } from "./base";

async function fetchImages() {
    try {
        const response = await fetch(`${baseURL}/api/v1/images`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.map(item => item.image_url);
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}


export default fetchImages
