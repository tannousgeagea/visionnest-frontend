// api.js
const baseURL = 'http://192.168.0.142:8000';

export const uploadImage = (formData) => {
  return fetch(`${baseURL}/upload`, {
    method: 'POST',
    body: formData,
  }).then(response => response.json());
};

export const fetchImages = () => {
  return fetch(`${baseURL}/api/images/`)
    .then(response => response.json())
    .then(data => {
      const imageUrls = data.map(item => ({
        url:item.image_url,
        annotations: item.annotations
      }));
    });
};
