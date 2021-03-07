import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useTests = () => {
  const [tests, setTests] = useState({});
  const [testLoading, setTestLoading] = useState(false);

  useEffect(() => {
    const testCallback = async () => {
      setTestLoading(true);
      try {
        const response = await axios.get(`${API_ROOT}/cogtests`);
        setTests(response.data);
        setTestLoading(false);
      } catch (err) {
        console.log(
          "=============== REQUEST ERROR =========================== "
        );
        console.log(err);
        setTestLoading(false);
        return null;
      }
    };
    testCallback();
  }, [setTests]);

  return {
    tests,
    testLoading,
  };
};

export default useTests;
