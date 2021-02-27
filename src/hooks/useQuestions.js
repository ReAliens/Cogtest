import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useQustions = (testID) => {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const questionsCallback = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/get-questions/${testID}`);
        setQuestions(response.data);
      } catch (err) {
        console.log(
          "=============== REQUEST ERROR =========================== "
        );
        console.log(err);
        return null;
      }
    };
    questionsCallback();
  }, [setQuestions, testID]);

  return {
    questions,
  };
};

export default useQustions;
