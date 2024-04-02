import axios from "axios";
import { useState } from "react";

const useDelete = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(null);

  const deleteData = async (url, onSuccess) => {
    setIsLoadingDelete(true);
    try {
        await axios.delete(url);
        onSuccess();        
    } catch (error) {
        console.warn("Something went wrong!", error);
        setErrorDelete(error.message);
    } finally {
        setIsLoadingDelete(false);
    }
  }

  return {isLoadingDelete, errorDelete, deleteData};
}

export default useDelete;