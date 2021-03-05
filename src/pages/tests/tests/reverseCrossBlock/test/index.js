import { Box, Grid, Button, Flex } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
// import { questions } from "./data";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import CrossBlockGrid from "../../../../../components/CrossBlockGrid";

const ReverseCrossBlockTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const params = useParams();
  const history = useHistory();

  const { questions: apiQuestions } = useQuestions(params.testID);
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
      apiQuestions && apiQuestions.payload
        ? apiQuestions.payload[currQuestionIndex]
        : null,
    [apiQuestions, currQuestionIndex]
  );

  const activeCards = useMemo(
    () =>
      currentQuestion
        ? JSON.parse(currentQuestion.show_order).map((item) => item - 1)
        : [],
    [currentQuestion]
  );

  return (
    <Box margin="auto">
      {currentQuestion && (
        <Grid
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
          <Flex>
            <Button
              disabled={
                !started ||
                !answers[currQuestionIndex] ||
                answers[currQuestionIndex].length === 0
              }
              onClick={() => {
                if (currQuestionIndex >= apiQuestions?.payload.length - 1) {
                  history.push("/tests/digit-symbol");
                } else {
                  const newAnswers = answers.slice();
                  newAnswers[currQuestionIndex] = newAnswers[
                    currQuestionIndex
                  ].map((item) => item + 1);
                  setAnswers(newAnswers);
                  setStarted(false);
                  setCurrQuestionIndex(currQuestionIndex + 1);
                }
              }}
            >
              Next
            </Button>
          </Flex>
        </Grid>
      )}
    </Box>
  );
};

export default ReverseCrossBlockTest;
