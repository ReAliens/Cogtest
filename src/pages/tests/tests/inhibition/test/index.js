import { Box, Flex, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import StartTestButton from "../../../../../components/Button";
// import { questions } from "./data";
import ReactCountdownClockownClock from "react-countdown-clock";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";
import useTests from "../../../../../hooks/useTests";
import TimeIsUpPage from "../../../../../components/timeIsUP";

const InhibitionTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTimeout, setIsTimeOut] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const history = useHistory();
  const params = useParams();
  const { tests } = useTests();
  const nextTest = tests && tests.payload ? tests?.payload[8] : null;
  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );
  const filteredQuestion = allQuestions?.payload?.filter(
    (question) => question.is_trial === false
  );
  console.log(filteredQuestion);
  console.log(allQuestions);
  const correctAnswers = filteredQuestion?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
  );

  return (
    <>
      {questionLoading ? (
        <Spinner
          marginTop="20%"
          height="200px"
          width="200px"
          color="red.500"
          thickness="4px"
          speed="0.9s"
          emptyColor="gray.200"
        />
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
                  {filteredQuestion && (
                    <Image
                      fit="cover"
                      // width="0px"
                      src={filteredQuestion[currQuestionIndex]?.photo}
                    />
                  )}
                </Flex>
                <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr">
                  {filteredQuestion &&
                    filteredQuestion[currQuestionIndex].answers.map(
                      (option) => (
                        <Box
                          justifyContent="center"
                          alignItems="center"
                          margin="auto"
                          as="buton"
                          cursor="pointer"
                          borderWidth="1px"
                          borderRadius="md"
                          boxShadow="md"
                          background="white"
                          _hover={{
                            bg: "#68D391",
                          }}
                          bg={
                            answers[currQuestionIndex] === option?.answer_image
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswers({
                              ...answers,
                              [currQuestionIndex]: option?.answer_image,
                            });
                          }}
                        >
                          <Image margin="auto" src={option.answer_image} />
                        </Box>
                      )
                    )}
                </Grid>
                <Flex justifyContent="center" width="100%" marginTop="20px">
                  <StartTestButton
                    width="200px"
                    disabled={!answers[currQuestionIndex]}
                    type="next"
                    buttonText="التالى"
                    onClick={() => {
                      if (currQuestionIndex < filteredQuestion.length - 1) {
                        const userAnswer = answers[currQuestionIndex];
                        if (
                          userAnswer !==
                          correctAnswers[currQuestionIndex]?.answer
                        ) {
                          setWrongAnswers(wrongAnswers + 1);
                        }
                        if (wrongAnswers === 1) {
                          history.push("/tests/logical-reasoning");
                        }
                        setCurrQuestionIndex(currQuestionIndex + 1);
                      } else {
                        history.push("/tests/logical-reasoning");
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

export default InhibitionTest;
