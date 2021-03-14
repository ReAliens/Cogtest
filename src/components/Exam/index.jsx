import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReactCountdownClockownClock from "react-countdown-clock";
import StartTestButton from "../Button";

const Test = ({
  allQuestions,
  onComplete,
  duration,
  currQuestionIndex,
  setAnswers,
  answers,
  correctAnswers,
  wrongAnswers,
  setWrongAnswers,
  setCurrQuestionIndex,
  onExamFail,
  onExamComplete,
  examName,
}) => {
  return (
    <>
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
          <Text> {allQuestions?.message}</Text>
          <ReactCountdownClockownClock
            seconds={duration}
            color="red"
            alpha={0.9}
            size={50}
            onComplete={onComplete}
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
          {examName === "stroop" ? (
            <>
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
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
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
                          answers[currQuestionIndex] === option?.id
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswers({
                            ...answers,
                            [currQuestionIndex]: option?.id,
                          });
                        }}
                      >
                        <Text>{option.answer}</Text>
                      </Box>
                    )
                  )}
              </Grid>
            </>
          ) : examName === "flanker" ? (
            <>
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
                  <Image
                    fit="cover"
                    width="100px"
                    src={allQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr">
                {allQuestions?.payload &&
                  allQuestions?.payload[currQuestionIndex].answers.map(
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
                          answers[currQuestionIndex] === option?.id
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswers({
                            ...answers,
                            [currQuestionIndex]: option?.id,
                          });
                        }}
                      >
                        <Text>{option.answer}</Text>
                      </Box>
                    )
                  )}
              </Grid>
            </>
          ) : examName === "digitSymbol" ? (
            <>
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
                  <Image
                    fit="cover"
                    width="100px"
                    src={allQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
                {allQuestions?.payload &&
                  allQuestions?.payload[currQuestionIndex].answers.map(
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
                          answers[currQuestionIndex] === option?.id
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswers({
                            ...answers,
                            [currQuestionIndex]: option?.id,
                          });
                        }}
                      >
                        <Text>{option.answer}</Text>
                      </Box>
                    )
                  )}
              </Grid>
            </>
          ) : examName === "inhibtion" ? (
            <>
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
                  <Image
                    fit="cover"
                    // width="0px"
                    src={allQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr">
                {allQuestions?.payload &&
                  allQuestions?.payload[currQuestionIndex].answers.map(
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
                          answers[currQuestionIndex] === option?.id
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswers({
                            ...answers,
                            [currQuestionIndex]: option?.id,
                          });
                        }}
                      >
                        <Image margin="auto" src={option?.answer_image} />
                      </Box>
                    )
                  )}
              </Grid>
            </>
          ) : examName === "logicalReasoning" ? (
            <>
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
                  <Image
                    fit="cover"
                    width="100px"
                    src={allQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
                {allQuestions?.payload &&
                  allQuestions?.payload[currQuestionIndex].answers.map(
                    (option) => (
                      <Box
                        justifyContent="center"
                        alignItems="center"
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
                          answers[currQuestionIndex] === option?.id
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswers({
                            ...answers,
                            [currQuestionIndex]: option?.id,
                          });
                        }}
                      >
                        <Image margin="auto" src={option.answer_image} />
                      </Box>
                    )
                  )}
              </Grid>
            </>
          ) : (
            ""
          )}

          <Flex justifyContent="center" width="100%" marginTop="20px">
            <StartTestButton
              width="200px"
              type="next"
              disabled={!answers[currQuestionIndex]}
              buttonText="التالى"
              onClick={() => {
                if (currQuestionIndex < allQuestions?.payload.length - 1) {
                  const userAnswer = answers[currQuestionIndex];
                  if (
                    userAnswer !== correctAnswers[currQuestionIndex]?.answer
                  ) {
                    setWrongAnswers(wrongAnswers + 1);
                  }
                  if (wrongAnswers === 1) {
                    onExamFail();
                  }
                  setCurrQuestionIndex(currQuestionIndex + 1);
                } else {
                  onExamComplete();
                }
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Test;
