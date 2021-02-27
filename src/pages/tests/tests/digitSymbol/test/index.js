import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import StartTestButton from "../../../../../components/Button";
// import { questions } from "./data";
import ReactCountdownClockownClock from "react-countdown-clock";
import { useParams } from "react-router-dom";
import useQuestions from "../../../../../hooks/useQuestions";

const DigitSymbolTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  // const [count, setCount] = useState(0);
  // const [wrongAnswers, setWrongAnswers] = useState(0);
  // const history = useHistory();
  const params = useParams();
  const { questions: apiQuestions } = useQuestions(params.testID);

  console.log(apiQuestions);
  console.log("45646532186");
  return (
    <Box margin="auto">
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
          <Text> {apiQuestions?.message}</Text>
          <ReactCountdownClockownClock
            seconds={45}
            color="red"
            alpha={0.9}
            size={50}
            onComplete={() => console.log("time is up")}
          />
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="100px"
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
            {apiQuestions?.payload && (
              <Image
                fit="cover"
                width="100px"
                src={apiQuestions?.payload[currQuestionIndex]?.photo}
              />
            )}
            {/* {apiQuestions?.payload && (
              <Text
                fontSize="5xl"
                color={apiQuestions?.payload[currQuestionIndex]?.color}
              >
                {apiQuestions?.payload[currQuestionIndex]?.color_text}
              </Text>
            )} */}
          </Flex>
          <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
            {apiQuestions?.payload &&
              apiQuestions?.payload[currQuestionIndex].answers.map((option) => (
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
              ))}
          </Grid>
          <Flex width="50%" marginTop="20px">
            <StartTestButton
              width="200px"
              type="next"
              buttonText="التالى"
              onClick={() => {
                if (currQuestionIndex >= apiQuestions?.payload.length - 1) {
                  console.log("ok ok ok");
                  // const userAnswer = answers[currQuestionIndex];
                  // if (
                  //   userAnswer === questions[currQuestionIndex].correctAnswer
                  // ) {
                  //   setCount(count + 1);
                  // } else {
                  //   setWrongAnswers(wrongAnswers + 1);
                  // }
                  // if (wrongAnswers === 5) {
                  //   history.push("/");
                } else {
                  setCurrQuestionIndex(currQuestionIndex + 1);
                }
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DigitSymbolTest;
