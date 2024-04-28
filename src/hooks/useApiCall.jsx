import { useState } from "react";
import axios from "axios";

const useApiCall = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const apiCall = async (method, url, { query, body } = {}) => {
    try {
      setLoading(true);

      // Axios configuration
      const config = {
        method,
        url: import.meta.env.VITE_API_URL + url,
        params: query,
        data: body,
        withCredentials: true,
      };

      // Make the API call
      let apiResponse = await axios(config);
      setResponse(apiResponse.data);
      return apiResponse.data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, apiCall };
};

export default useApiCall;
