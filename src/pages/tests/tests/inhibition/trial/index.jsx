import React, { useMemo, useState } from "react";
import useTrialQuestions from "../../../../../hooks/useTerial";
import useTests from "../../../../../hooks/useTests";
import { useHistory } from "react-router";
import Loader from "../../../../../components/Loader";
import TrialExam from "../../../../../components/TrialExam";

const InhibitionTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const history = useHistory();
  const { tests } = useTests();
  const trialInhibitionData = tests?.payload?.find(
    (load) => load?.code === "inhibition"
  );
  const trialInhibitionID = trialInhibitionData?.id;
  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialInhibitionID
  );

  const correctAnswers = trialQuestions?.payload?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
  );

  const currentQuestionCorrectAnswer = useMemo(
    () =>
      correctAnswers ? correctAnswers[currQuestionIndex]?.answer_image : null,
    [correctAnswers, currQuestionIndex]
  );

  return (
    <>
      {trialQuestionLoading || !trialQuestions ? (
        <Loader />
      ) : (
        <TrialExam
          examName="inhibition"
          trialQuestions={trialQuestions}
          answer={answer}
          currQuestionIndex={currQuestionIndex}
          currentQuestionCorrectAnswer={currentQuestionCorrectAnswer}
          setAnswer={setAnswer}
          onClick={() => {
            if (currQuestionIndex < trialQuestions?.payload.length - 1) {
              setCurrQuestionIndex(currQuestionIndex + 1);
            } else {
              history.push(`/tests/inhibition/${trialInhibitionID}`);
            }
          }}
        />
      )}
    </>
  );
};

export default InhibitionTrial;
