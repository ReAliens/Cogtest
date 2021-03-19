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
  const trialLogicalData = tests?.payload?.find(
    (load) => load?.code === "logical-reasoning"
  );
  const trialLogicalID = trialLogicalData?.id;
  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialLogicalID
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
          examName="logicalReasoning"
          trialQuestions={trialQuestions}
          answer={answer}
          currQuestionIndex={currQuestionIndex}
          currentQuestionCorrectAnswer={currentQuestionCorrectAnswer}
          setAnswer={setAnswer}
          onClick={() => {
            if (currQuestionIndex < trialQuestions?.payload.length - 1) {
              setCurrQuestionIndex(currQuestionIndex + 1);
            } else {
              history.push(`/tests/logical-reasoning/${trialLogicalID}`);
            }
          }}
        />
      )}
    </>
  );
};

export default InhibitionTrial;
