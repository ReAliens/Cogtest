import { Box, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import StartTestButton from "../../../../../components/Button";
import ReactCountdownClockownClock from "react-countdown-clock";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import TimeIsUpPage from "../../../../../components/timeIsUP";
import useTests from "../../../../../hooks/useTests";

const StroopTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTimeout, setIsTimeOut] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const history = useHistory();
  const params = useParams();
  const { tests } = useTests();

  const nextTest = tests && tests.payload ? tests?.payload[1] : null;
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );

  const correctAnswers = allQuestions?.payload?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
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
          {isTimeout === false ? (
            <Flex
              borderRadius="10px"
              paddingTop="20px"
              h="100%"
              w="1140px"
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
                  seconds={45}
                  color="red"
                  alpha={0.9}
                  size={50}
                  onComplete={() => setIsTimeOut(true)}
                />
              </Flex>
              <Flex
                justifyContent="center"
                paddingBottom="10px"
                borderRadius="10px"
                marginTop="30px"
                bg="#E4E6EF"
                paddingX="20px"
                h="500px"
                flexDir="column"
                dir="rtl"
              >
                <Flex
                  padding="20px"
                  marginTop="20px"
                  justifyContent="center"
                  w="100%"
                  borderRadius="10px"
                  bg="white"
                  dir="rtl"
                  height="60%"
                  alignItems="center"
                  flexDir="column"
                >
                  {allQuestions?.payload && (
                    <Text
                      fontSize="5xl"
                      color={allQuestions?.payload[currQuestionIndex]?.color}
                    >
                      {allQuestions?.payload[currQuestionIndex]?.color_text}
                    </Text>
                  )}
                </Flex>
                <Grid
                  gap={5}
                  marginTop="20px"
                  templateColumns="1fr 1fr 1fr 1fr"
                >
                  {allQuestions?.payload &&
                    allQuestions?.payload[currQuestionIndex]?.answers?.map(
                      (option) => (
                        <Box
                          justifyContent="center"
                          alignItems="center"
                          as="buton"
                          cursor="pointer"
                          borderWidth="1px"
                          borderRadius="md"
                          boxShadow="md"
                          _hover={{
                            bg: "#68D391",
                          }}
                          bg={
                            answers[currQuestionIndex] === option?.answer
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswers({
                              ...answers,
                              [currQuestionIndex]: option?.answer,
                            });
                          }}
                        >
                          <Text>{option.answer}</Text>
                        </Box>
                      )
                    )}
                </Grid>
                <Flex justifyContent="center" width="100%" marginTop="20px">
                  <StartTestButton
                    width="200px"
                    type="next"
                    disabled={!answers[currQuestionIndex]}
                    buttonText="التالى"
                    onClick={() => {
                      if (
                        currQuestionIndex <
                        allQuestions?.payload.length - 1
                      ) {
                        const userAnswer = answers[currQuestionIndex];
                        if (
                          userAnswer !==
                          correctAnswers[currQuestionIndex]?.answer
                        ) {
                          setWrongAnswers(wrongAnswers + 1);
                        }
                        if (wrongAnswers === 1) {
                          history.push("/tests/flanker");
                        }
                        setCurrQuestionIndex(currQuestionIndex + 1);
                      } else {
                        history.push("/tests/flanker");
                      }
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <TimeIsUpPage testName={nextTest?.code} />
          )}
        </Box>
      )}
    </>
  );
};

export default StroopTest;
