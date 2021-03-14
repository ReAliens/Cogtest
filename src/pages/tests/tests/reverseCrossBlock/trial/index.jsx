import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import CrossBlockGrid from "../../../../../components/CrossBlockGrid";
import StartTestButton from "../../../../../components/Button";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";
import useTrialQuestions from "../../../../../hooks/useTerial";

const ReverseCrossBlockTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  // const [wrongAnswersNumbers, setWrongAnswersNumbers] = useState(0);
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
            minW={["300px", "600px", "800px", "1000px"]}
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
                  minW={["300px", "600px", "700px", "1000px"]}
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
                    newAnswers[currQuestionIndex] = newAnswers[
                      currQuestionIndex
                    ].map((item) => item + 1);

                    setAnswers(newAnswers);
                    if (
                      currQuestionIndex >=
                      trialQuestions?.payload.length - 1
                    ) {
                      history.push(
                        `/tests/reverse-corsi/${trialReverseCrossBlockID}`
                      );
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

export default ReverseCrossBlockTrial;
