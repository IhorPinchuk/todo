import { useCallback, useState } from "react";
import axios from "axios";
import baseUrl from "../api/baseUrl";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData =useCallback(async (url) => {
    setIsLoading(true);
    try {
      const responce = await axios.get(baseUrl + url);           
      if (responce.data) {       
        setData(responce.data);
      }      
    } catch (error) {
      console.warn("Something went wrong!", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, fetchData };
};


