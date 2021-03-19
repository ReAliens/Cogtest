import React, { useMemo, useState } from "react";
import useTrialQuestions from "../../../../../hooks/useTerial";
import useTests from "../../../../../hooks/useTests";
import { useHistory } from "react-router";
import TrialExam from "../../../../../components/TrialExam";
import Loader from "../../../../../components/Loader";

const StroopTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const history = useHistory();
  const { tests } = useTests();
  const trialStroopData = tests?.payload?.find(
    (load) => load?.code === "stroop"
  );
  const trialStroopID = trialStroopData?.id;
  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialStroopID
  );

  const correctAnswers = trialQuestions?.payload?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
  );

  const currentQuestionCorrectAnswer = useMemo(
    () => (correctAnswers ? correctAnswers[currQuestionIndex]?.answer : null),
    [correctAnswers, currQuestionIndex]
  );

  return (
    <>
      {trialQuestionLoading || !trialQuestions ? (
        <Loader />
      ) : (
        <TrialExam
          examName="stroop"
          trialQuestions={trialQuestions}
          answer={answer}
          currQuestionIndex={currQuestionIndex}
          currentQuestionCorrectAnswer={currentQuestionCorrectAnswer}
          setAnswer={setAnswer}
          onClick={() => {
            if (currQuestionIndex < trialQuestions?.payload.length - 1) {
              setCurrQuestionIndex(currQuestionIndex + 1);
            } else {
              history.push(`/tests/stroop/${trialStroopID}`);
            }
          }}
        />
      )}
    </>
  );
};

export default StroopTrial;
