import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../api/baseUrl";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responce = await axios.get(baseUrl + url);           
      if (responce.statusText === "OK") {       
        setData(responce.data);
      }      
    } catch (error) {
      console.warn("Something went wrong!", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};
