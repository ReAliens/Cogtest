import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useTrialQuestions = (testID) => {
  const [trialQuestions, setTrialQuestions] = useState({});
  const [trialQuestionLoading, setTrialQuestionLoading] = useState(false);

  useEffect(() => {
    const questionsCallback = async () => {
      setTrialQuestionLoading(true);
      try {
        const response = await axios.get(
          `${API_ROOT}/trial-questions/${testID}`
        );
        setTrialQuestions(response.data);
        setTrialQuestionLoading(false);
      } catch (err) {
        console.log(err);
        setTrialQuestionLoading(false);
        return null;
      }
    };
    questionsCallback();
  }, [setTrialQuestions, testID]);

  return {
    trialQuestions,
    trialQuestionLoading,
  };
};

export default useTrialQuestions;
