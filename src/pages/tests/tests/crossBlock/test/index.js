import { Box, Grid, Flex, Spinner } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
// import { questions } from "./data";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import CrossBlockGrid from "../../../../../components/CrossBlockGrid";
import StartTestButton from "../../../../../components/Button";

const CrossBlockTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const params = useParams();
  const history = useHistory();
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
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
      allQuestions && allQuestions.payload
        ? allQuestions.payload[currQuestionIndex]
        : null,
    [allQuestions, currQuestionIndex]
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
      {questionLoading || !allQuestions ? (
        <Box
          top="0"
          left="0"
          bottom="0"
          display="flex"
          width="100%"
          justifyContent="center"
          zIndex="2"
          position="absolute"
          background="#003374"
        >
          <Spinner
            marginTop="20%"
            height="200px"
            width="200px"
            color="red.500"
            thickness="4px"
            speed="0.9s"
            emptyColor="gray.200"
          />
        </Box>
      ) : (
        <Box margin="auto">
          {currentQuestion && (
            <Grid
              marginTop="10%"
              h="100%"
              w="1140px"
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
                    if (currQuestionIndex >= allQuestions?.payload.length - 1) {
                      history.push("/tests/reverse-corsi");
                    } else {
                      setStarted(false);
                      setCurrQuestionIndex(currQuestionIndex + 1);
                    }
                  }}
                />
              </Flex>
            </Grid>
          )}
        </Box>
      )}
    </>
  );
};

export default CrossBlockTest;
