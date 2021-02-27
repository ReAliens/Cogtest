import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useTests = () => {
  const [tests, setTests] = useState({});

  useEffect(() => {
    const testCallback = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/cogtests`);
        setTests(response.data);
      } catch (err) {
        console.log(
          "=============== REQUEST ERROR =========================== "
        );
        console.log(err);
        return null;
      }
    };
    testCallback();
  }, [setTests]);

  return {
    tests,
  };
};

export default useTests;
