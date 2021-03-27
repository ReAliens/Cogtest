import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useCallback, useContext, useMemo, useState } from "react";
import ReactCountdownClockownClock from "react-countdown-clock";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import CrossBlockGrid from "../../../../../components/CrossBlockGrid";
import StartTestButton from "../../../../../components/Button";
import Loader from "../../../../../components/Loader";
import { UserInfoContext } from "../../../../../contexts/userContext";
import useAnswer from "../../../../../hooks/useAnswer";
import useTests from "../../../../../hooks/useTests";

const CrossBlockTest = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const [wrongAnswersNumbers, setWrongAnswersNumbers] = useState(0);
  const params = useParams();
  const history = useHistory();
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );
  const { tests } = useTests();
  const toast = useToast();

  const { submitAnswerTest } = useAnswer();

  const onSetSelectedCards = useCallback(
    (cards) => {
      const newAnswers = answers.slice();
      newAnswers[currQuestionIndex] = cards;
      setAnswers(newAnswers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setAnswers, currQuestionIndex]
  );
  const currentQuestion = useMemo(
    () =>
      allQuestions && allQuestions.payload
        ? allQuestions.payload[currQuestionIndex]
        : null,
    [allQuestions, currQuestionIndex]
  );

  const testDuration = useMemo(
    () => (tests && tests?.payload ? tests?.payload[2]?.duration : null),
    [tests]
  );

  const activeCards = useMemo(
    () =>
      currentQuestion
        ? JSON.parse(currentQuestion.show_order).map((item) => item - 1)
        : [],
    [currentQuestion]
  );

  const onSubmitAnswertTest = useCallback(() => {
    try {
      const answersPayload = [];
      Object.keys(answers).forEach((key) => {
        const questionID = allQuestions.payload[key].id;
        answersPayload.push({
          question_id: questionID,
          answer_array: answers[key],
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

  return (
    <>
      {questionLoading || !allQuestions ? (
        <Loader />
      ) : (
        <Box margin="auto">
          <Flex
            borderRadius="10px"
            paddingTop="20px"
            h="100%"
            w="70vw"
            bg="#f9f9fc"
            flexDir="column"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              marginX="20px"
              dir="rtl"
            >
              <Text> {allQuestions?.message}</Text>
              <ReactCountdownClockownClock
                seconds={testDuration}
                color="transparent"
                alpha={0.9}
                size={50}
                onComplete={() => {
                  if (testDuration) {
                    onSubmitAnswertTest();
                    history.push("/tests/reverse-corsi");
                  }
                }}
              />
            </Flex>
            <Flex
              justifyContent="center"
              paddingBottom="10px"
              borderRadius="10px"
              marginTop="30px"
              bg="#E4E6EF"
              paddingX="20px"
              flexDir="column"
              dir="rtl"
            >
              {currentQuestion && (
                <Flex
                  // flexWrap="wrap"
                  margin="20px"
                  h="100%"
                  w="auto"
                  borderRadius="10px"
                  padding="20px"
                  bg="#f9f9fc"
                >
                  <CrossBlockGrid
                    key={currQuestionIndex}
                    selectedCards={answers[currQuestionIndex]}
                    setSelectedCards={onSetSelectedCards}
                    numberOfCards={currentQuestion.boxes_count}
                    activeCards={activeCards}
                    started={started}
                    setStarted={setStarted}
                  />
                </Flex>
              )}
              <Flex marginTop="20px" justifyContent="center">
                <StartTestButton
                  buttonText="التالى"
                  disabled={
                    !started ||
                    !answers[currQuestionIndex] ||
                    answers[currQuestionIndex].length === 0
                  }
                  onClick={() => {
                    const newAnswers = answers.slice();
                    let newWrongAnswersNumbers = wrongAnswersNumbers;
                    newAnswers[currQuestionIndex] = newAnswers[
                      currQuestionIndex
                    ].map((item) => item + 1);
                    const currentCorrectAnswer = currentQuestion.answers.find(
                      (answer) => answer.is_correct
                    );

                    const correctAnsArray = JSON.parse(
                      currentCorrectAnswer.answer
                    );
                    if (
                      correctAnsArray.join("") !==
                      newAnswers[currQuestionIndex].join("")
                    ) {
                      newWrongAnswersNumbers += 1;
                    } else {
                      newWrongAnswersNumbers = 0;
                    }

                    setWrongAnswersNumbers(newWrongAnswersNumbers);
                    if (newWrongAnswersNumbers >= 3) {
                      onSubmitAnswertTest();
                      history.push("/tests/reverse-corsi");
                    }

                    setAnswers(newAnswers);
                    if (currQuestionIndex >= allQuestions?.payload.length - 1) {
                      onSubmitAnswertTest();
                      history.push("/tests/reverse-corsi");
                    } else {
                      setStarted(false);
                      setCurrQuestionIndex(currQuestionIndex + 1);
                    }
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default CrossBlockTest;
