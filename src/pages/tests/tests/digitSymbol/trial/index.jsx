import React, { useMemo, useState } from "react";
import useTrialQuestions from "../../../../../hooks/useTerial";
import useTests from "../../../../../hooks/useTests";
import { useHistory } from "react-router";
import Loader from "../../../../../components/Loader";
import TrialExam from "../../../../../components/TrialExam";

const DigitSymbolTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const history = useHistory();
  const { tests } = useTests();
  const trialDigitSymbolData = tests?.payload?.find(
    (load) => load?.code === "digit-symbol"
  );
  const trialDigitSymbolID = trialDigitSymbolData?.id;
  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialDigitSymbolID
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
          examName="digitSymbol"
          trialQuestions={trialQuestions}
          answer={answer}
          currQuestionIndex={currQuestionIndex}
          currentQuestionCorrectAnswer={currentQuestionCorrectAnswer}
          setAnswer={setAnswer}
          onClick={() => {
            if (currQuestionIndex < trialQuestions?.payload.length - 1) {
              setCurrQuestionIndex(currQuestionIndex + 1);
            } else {
              history.push(`/tests/digit-symbol/${trialDigitSymbolID}`);
            }
          }}
        />
      )}
    </>
  );
};

export default DigitSymbolTrial;
