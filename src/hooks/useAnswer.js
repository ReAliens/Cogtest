import axios from "axios";
import { useCallback, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useAnswer = () => {
  const [submitTestAnswerLoading, setSubmitTestAnswerLoading] = useState(false);

  const submitAnswerTest = useCallback(
    async (userInfo) => {
      setSubmitTestAnswerLoading(true);
      try {
        const res = await axios.post(`${API_ROOT}/add-user`, userInfo);
        setSubmitTestAnswerLoading(false);
        return res.data;
      } catch (err) {
        console.log(err);
        setSubmitTestAnswerLoading(false);
        throw err;
      }
    },
    [setSubmitTestAnswerLoading]
  );

  return {
    submitAnswerTest,
    submitTestAnswerLoading,
  };
};

export default useAnswer;
