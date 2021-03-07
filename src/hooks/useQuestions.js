import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useQustions = (testID) => {
  const [questions, setQuestions] = useState({});
  const [questionLoading, setQuestionLoading] = useState(false);

  useEffect(() => {
    const questionsCallback = async () => {
      setQuestionLoading(true);
      try {
        const response = await axios.get(`${API_ROOT}/get-questions/${testID}`);
        setQuestions(response.data);
        setQuestionLoading(false);
      } catch (err) {
        console.log(err);
        setQuestionLoading(false);
        return null;
      }
    };
    questionsCallback();
  }, [setQuestions, testID]);

  return {
    questions,
    questionLoading,
  };
};

export default useQustions;
