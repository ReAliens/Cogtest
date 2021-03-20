import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import CrossBlockGrid from "../../../../../components/CrossBlockGrid";
import StartTestButton from "../../../../../components/Button";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";
import useTrialQuestions from "../../../../../hooks/useTerial";
import TrialConfirmModal from "../../../../../components/trialConfirmationModal/idex";

const ReverseCrossBlockTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { tests } = useTests();

  const trialReverseCrossBlockData = tests?.payload?.find(
    (load) => load?.code === "reverse-corsi"
  );

  const trialReverseCrossBlockID = trialReverseCrossBlockData?.id;

  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialReverseCrossBlockID
  );

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
      trialQuestions && trialQuestions.payload
        ? trialQuestions.payload[currQuestionIndex]
        : null,
    [trialQuestions, currQuestionIndex]
  );

  const activeCards = useMemo(
    () =>
      currentQuestion
        ? JSON.parse(currentQuestion.show_order).map((item) => item - 1)
        : [],
    [currentQuestion]
  );

  const currentCorrectAnswer = useMemo(
    () =>
      currentQuestion ? JSON.parse(currentQuestion.answers[0].answer) : null,
    [currentQuestion]
  );

  const isCurrQuestionCorrect = useMemo(() => {
    if (
      !currentQuestion ||
      !currentCorrectAnswer ||
      !answers[currQuestionIndex]
    )
      return false;

    return (
      JSON.stringify(currentCorrectAnswer) ===
      JSON.stringify(answers[currQuestionIndex].map((ans) => ans + 1))
    );
  }, [currentQuestion, currentCorrectAnswer, answers, currQuestionIndex]);

  const hideAnswerStatus = useMemo(
    () =>
      !answers[currQuestionIndex] ||
      answers[currQuestionIndex]?.length < currentCorrectAnswer?.length,
    [answers, currQuestionIndex, currentCorrectAnswer]
  );

  return (
    <>
      {trialQuestionLoading || !trialQuestions ? (
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
              <Text> {trialQuestions?.message} التجريبية</Text>
              {hideAnswerStatus ? (
                ""
              ) : isCurrQuestionCorrect ? (
                <Text
                  fontSize={["large", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="green.400"
                >
                  إجابة صحيحة
                </Text>
              ) : (
                <Text
                  fontSize={["large", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="red.400"
                >
                  إجابة خاطئة
                </Text>
              )}
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
                  w="auto"
                  h="100%"
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
                    timeBetweenFlashes={700}
                  />
                </Flex>
              )}
              <Flex marginTop="20px" justifyContent="center">
                <StartTestButton
                  buttonText={
                    hideAnswerStatus || isCurrQuestionCorrect
                      ? "التالى"
                      : "اعد المحاولة"
                  }
                  disabled={
                    !started ||
                    !answers[currQuestionIndex] ||
                    answers[currQuestionIndex].length === 0
                  }
                  onClick={() => {
                    if (isCurrQuestionCorrect) {
                      const newAnswers = answers.slice();
                      newAnswers[currQuestionIndex] = newAnswers[
                        currQuestionIndex
                      ].map((item) => item + 1);

                      setAnswers(newAnswers);
                      if (
                        currQuestionIndex >=
                        trialQuestions?.payload.length - 1
                      ) {
                        onOpen();
                      } else {
                        setStarted(false);
                        setCurrQuestionIndex(currQuestionIndex + 1);
                      }
                    } else {
                      const newAnswers = answers.slice();
                      newAnswers[currQuestionIndex] = [];
                      setAnswers(newAnswers);
                    }
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
          <TrialConfirmModal
            isOpen={isOpen}
            onClose={onClose}
            onClick={() =>
              history.push(`/tests/reverse-corsi/${trialReverseCrossBlockID}`)
            }
          />
        </Box>
      )}
    </>
  );
};

export default ReverseCrossBlockTrial;
