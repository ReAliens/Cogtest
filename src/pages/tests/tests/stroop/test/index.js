import { Box, useToast } from "@chakra-ui/react";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import TimeIsUpPage from "../../../../../components/timeIsUP";
import useTests from "../../../../../hooks/useTests";
import useAnswer from "../../../../../hooks/useAnswer";
import { UserInfoContext } from "../../../../../contexts/userContext";
import Loader from "../../../../../components/Loader";
import Test from "../../../../../components/Exam";

const StroopTest = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTimeout, setIsTimeOut] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const history = useHistory();
  const params = useParams();
  const { tests } = useTests();
  const toast = useToast();

  const nextTest = tests && tests.payload ? tests?.payload[1] : null;
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );

  const testDuration = useMemo(
    () => (tests && tests?.payload ? tests?.payload[0]?.duration : null),
    [tests]
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

  return (
    <>
      {questionLoading || !allQuestions ? (
        <Loader />
      ) : (
        <Box margin="auto">
          {isTimeout === false ? (
            <Test
              examName="stroop"
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
                history.push("/tests/flanker");
              }}
              onExamComplete={() => {
                onSubmitAnswertTest();
                history.push("/tests/flanker");
              }}
            />
          ) : (
            <TimeIsUpPage testName={nextTest?.code} />
          )}
        </Box>
      )}
    </>
  );
};

export default StroopTest;
