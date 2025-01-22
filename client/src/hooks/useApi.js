import { useEffect, useState } from "react";
import api from "../axios/axiosInstance";


const useApi = (url, method, option = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api({ url, method, ...option });
                setData(response.data);
            } catch (err) {
                setError(err.response ? err.response.data : err.message);
            } finally {
                setLoading(false);
            }
        };

        if (url) fetchData(); // Only fetch if a URL is provided
    }, [url, method, option]);

    return { data, error, loading };

}

export default useApi
