import axios from "axios";
import { useState } from "react";
import baseUrl from "../api/baseUrl";

const usePut = () => {
  const [dataChange, setDataChange] = useState(null);
  const [isLoadingChangeData, setIsLoadingChangeData] = useState(false);
  const [errorChangeData, setErrorChangeData] = useState(null);

  const putData = async (url, data) => {
    setIsLoadingChangeData(true);
    try {
      const responce = await axios.put(baseUrl + url, data);
      if (responce.data) {
        setDataChange(responce.data);
      }
    } catch (error) {
      console.warn("Something went wrong!", error);
      setErrorChangeData(error.message);
    } finally {
      setIsLoadingChangeData(false);
    }
  };

  return { dataChange, isLoadingChangeData, errorChangeData, putData };
};

export default usePut;
