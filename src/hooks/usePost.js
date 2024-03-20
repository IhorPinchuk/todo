import axios from "axios";
import { useState } from "react";

export const usePost = () => {
  const [dataAdd, setDataAdd] = useState({});
  const [isLoadingAddData, setIsLoadingAddData] = useState(false);
  const [errorAddData, setErrorAddData] = useState(null);

  const postData = async (url, data) => {
    setIsLoadingAddData(true);
    try {
      const responce = await axios.post(url, data);
      if (responce.status === 201) {
        setDataAdd(responce.data);
      }
    } catch (error) {
      console.warn("Something went wrong!", error);
      setErrorAddData(error.message);
    } finally {
      setIsLoadingAddData(false);
    }
  };

  return { dataAdd, isLoadingAddData, errorAddData, postData };
};
