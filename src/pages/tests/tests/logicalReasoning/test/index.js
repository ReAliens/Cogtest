import { Box, useToast } from "@chakra-ui/react";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import useTests from "../../../../../hooks/useTests";
import TimeIsUpPage from "../../../../../components/timeIsUP";
import FinishPage from "../../../../../components/TestFinishPage";
import useAnswer from "../../../../../hooks/useAnswer";
import { UserInfoContext } from "../../../../../contexts/userContext";
import Loader from "../../../../../components/Loader";
import Test from "../../../../../components/Exam";

const LogicalReasoningTest = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTimeout, setIsTimeOut] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const params = useParams();
  const { tests } = useTests();
  const toast = useToast();

  const nextTest = tests && tests.payload ? tests?.payload[9] : null;
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );

  const { submitAnswerTest } = useAnswer();

  const onSubmitAnswertTest = useCallback(() => {
    try {
      const answersPayload = [];
      Object.keys(answers).forEach((key) => {
        const questionID = allQuestions.payload[key].id;
        answersPayload.push({
          question_id: questionID,
          answer_id: answers[key],
        });
      });
      const testAnswerPayload = {
        cogtest_id: params.testID,
        answers: answersPayload,
        user_id: userInfo?.payload?.id,
      };
      submitAnswerTest(testAnswerPayload);
      toast({
        position: "top-right",
        description: "تم تسجيل الاجابات بنجاح",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  }, [answers, params, userInfo, submitAnswerTest, allQuestions, toast]);

  const correctAnswers = allQuestions?.payload?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
  );

  const testDuration = useMemo(
    () => (tests && tests?.payload ? tests?.payload[8]?.duration : null),
    [tests]
  );

  return (
    <>
      {questionLoading || !allQuestions ? (
        <Loader />
      ) : (
        <Box margin="auto">
          {isTimeout === false && isFinish === false ? (
            <Test
              examName="logicalReasoning"
              allQuestions={allQuestions}
              onComplete={() => {
                if (testDuration) {
                  onSubmitAnswertTest();
                  setIsTimeOut(true);
                }
              }}
              duration={testDuration}
              currQuestionIndex={currQuestionIndex}
              setCurrQuestionIndex={setCurrQuestionIndex}
              setAnswers={setAnswers}
              answers={answers}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
              setWrongAnswers={setWrongAnswers}
              onExamFail={() => {
                onSubmitAnswertTest();
                setIsFinish(true);
              }}
              onExamComplete={() => {
                onSubmitAnswertTest();
                setIsFinish(true);
              }}
            />
          ) : isTimeout === true ? (
            <TimeIsUpPage type="lastExam" testName={nextTest?.code} />
          ) : isFinish === true ? (
            <FinishPage type="lastExam" />
          ) : (
            ""
          )}
        </Box>
      )}
    </>
  );
};

export default LogicalReasoningTest;
