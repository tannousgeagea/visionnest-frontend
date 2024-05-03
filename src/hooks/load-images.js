import { useState } from "react";
import { useEffect } from "react";
import fetchImages from "../components/api/fetch-image";

const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const loadImages = async () => {
      setLoading(true);
      try {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
        setError(null);
      } catch (error) {
        setError(error.message);
        setImages([]);
      } finally {
        setLoading(false);
      }
  
    };

    useEffect(() => {
        loadImages();
    }, []);

    return { images, loading, error };
};

export default useFetchImages;