import { Box, Flex, Input, Progress, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
// import StartTestButton from "../../../../../components/Button";
// import { questions } from "./data";
// import ReactCountdownClockownClock from "react-countdown-clock";
import { useHistory, useParams } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
// import useQuestions from "../../../../../hooks/useQuestions";
import { questions } from "./data";

function DigitSpan({ symbols, onChange, speedMS }) {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [ready, setReady] = useState(false);

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setReady(false);
    setPercentage(0);
    setAnswer("");
    setCurrentNumber(null);
    symbols.forEach((symbol, index) => {
      setTimeout(() => {
        setCurrentNumber(symbol);
        setPercentage(((index + 1) / symbols.length) * 100);
        if (index === symbols.length - 1) {
          setTimeout(() => {
            setPercentage(0);
            setReady(true);
          }, speedMS);
        }
      }, (index + 1) * speedMS);
    });
  }, [symbols, setCurrentNumber, setPercentage, setReady, speedMS]);

  return (
    <Flex
      background="white"
      p="20px"
      width="400px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>{ready ? "..." : currentNumber}</Text>
      <Progress
        colorScheme="blue"
        size="md"
        width="100%"
        dir="ltr"
        value={percentage}
      />

      <Input
        isDisabled={!ready}
        value={answer}
        type="number"
        onChange={(e) => {
          const a = e.target.value;
          const percentage = (a.toString().length / symbols.length) * 100;
          setAnswer(a);
          onChange(a);
          setPercentage(percentage > 100 ? 100 : percentage);
        }}
      />
      <Text>{symbols.length} رموز</Text>
    </Flex>
  );
}

const CrossBlockTest = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  // const [count, setCount] = useState(0);
  // const [wrongAnswers, setWrongAnswers] = useState(0);
  const history = useHistory();
  const params = useParams();
  // const { questions: allQuestions, questionLoading } = useQuestions(
  //   params.testID
  // );
  // const filteredQuestion = allQuestions?.payload?.filter(
  //   (question) => question.is_trial === false
  // );
  // console.log(filteredQuestion);
  // console.log(allQuestions);

  const allQuestions = questions;

  const currentSymbols = useMemo(
    () =>
      allQuestions && allQuestions[currQuestionIndex]
        ? JSON.parse(allQuestions[currQuestionIndex].number_series)
        : null,
    [allQuestions, currQuestionIndex]
  );

  return (
    <>
      {false ? (
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
          <Flex
            borderRadius="10px"
            paddingTop="20px"
            h="100%"
            w="1140px"
            bg="#f9f9fc"
            flexDir="column"
          >
            {/* <Flex
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
              onComplete={() => console.log("time is up")}
            />
          </Flex> */}
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
              {currentSymbols && (
                <DigitSpan
                  symbols={currentSymbols}
                  speedMS={1000}
                  onChange={(answer) => {
                    setAnswers({
                      ...answers,
                      [currQuestionIndex]: (answer || "").split(""),
                    });
                  }}
                />
              )}
              {/* <Flex
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
            </Flex> */}
              {/* <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
              {allQuestions?.payload &&
                allQuestions?.payload[currQuestionIndex].answers.map((option) => (
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
            </Grid> */}
              <Flex width="50%" marginTop="20px">
                <StartTestButton
                  width="200px"
                  type="next"
                  buttonText="التالى"
                  disabled={!answers[currQuestionIndex]}
                  onClick={() => {
                    if (currQuestionIndex < questions.length - 1) {
                      setCurrQuestionIndex(currQuestionIndex + 1);
                    } else {
                      console.log("ok ok ok");
                      history.push("/tests/digit-symbol");
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
