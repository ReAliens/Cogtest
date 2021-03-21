import { Box, Flex, Input, Progress, Text, useToast } from "@chakra-ui/react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactCountdownClockownClock from "react-countdown-clock";
import { useHistory, useParams } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
import Loader from "../../../../../components/Loader";
import { UserInfoContext } from "../../../../../contexts/userContext";
import useAnswer from "../../../../../hooks/useAnswer";
import useQuestions from "../../../../../hooks/useQuestions";
import useTests from "../../../../../hooks/useTests";

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
      width="100%"
      height="100%"
      marginTop="20px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
    >
      <Text dir="rtl">{ready ? "..." : currentNumber}</Text>
      <Progress
        marginTop="20px"
        colorScheme="blue"
        size="md"
        width="50%"
        dir="ltr"
        value={percentage}
      />
      <Input
        textAlign="center"
        width="50%"
        marginTop="20px"
        borderColor="blue"
        isDisabled={!ready}
        value={answer}
        type="number"
        onChange={(e) => {
          const a = e.target.value;
          if (a.toString().length > symbols.length) {
            return;
          }
          const percentage = (a.toString().length / symbols.length) * 100;
          setAnswer(a);
          onChange(a);
          setPercentage(percentage > 100 ? 100 : percentage);
        }}
      />
      <Text marginTop="20px" dir="rtl">
        عدد الرموز: {symbols.length}
      </Text>
    </Flex>
  );
}

const ReverseDigitSpanTest = () => {
  const { userInfo } = useContext(UserInfoContext);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const history = useHistory();
  const params = useParams();
  const { tests } = useTests();
  const toast = useToast();
  const { submitAnswerTest } = useAnswer();

  const { questions: allQuestions, questionLoading } = useQuestions(
    params.testID
  );

  const currentSymbols = useMemo(
    () =>
      allQuestions && allQuestions?.payload
        ? JSON.parse(allQuestions?.payload[currQuestionIndex]?.number_series)
        : null,
    [allQuestions, currQuestionIndex]
  );

  const testDuration = useMemo(
    () => (tests && tests?.payload ? tests?.payload[5]?.duration : null),
    [tests]
  );

  const onSubmitAnswertTest = useCallback(() => {
    try {
      const answersPayload = [];
      Object.keys(answers).forEach((key) => {
        const questionID = allQuestions.payload[key].id;
        answersPayload.push({
          question_id: questionID,
          answer_id: answers[key],
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
      {questionLoading ? (
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
              <Text> {allQuestions?.message} </Text>
              <ReactCountdownClockownClock
                seconds={testDuration}
                color="red"
                alpha={0.9}
                size={50}
                onComplete={() => {
                  if (testDuration) {
                    onSubmitAnswertTest();
                    history.push("/tests/digit-symbol");
                  }
                }}
              />
            </Flex>
            <Flex
              justifyContent="center"
              paddingBottom="20px"
              marginTop="30px"
              bg="#E4E6EF"
              paddingX="20px"
              // h="500px"
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
              <Flex justifyContent="center" width="100%" marginTop="20px">
                <StartTestButton
                  width="200px"
                  type="next"
                  buttonText="التالى"
                  disabled={!answers[currQuestionIndex]}
                  onClick={() => {
                    const isCorrectAnswer =
                      answers[currQuestionIndex].join("") ===
                      currentSymbols.join("");
                    console.log({ isCorrectAnswer });
                    if (isCorrectAnswer) {
                      setWrongAnswers(0);
                    } else {
                      const newWrong = wrongAnswers + 1;
                      setWrongAnswers(newWrong);
                      if (newWrong >= 3) {
                        onSubmitAnswertTest();
                        history.push("/tests/digit-symbol");
                      }
                    }

                    if (currQuestionIndex < allQuestions?.payload.length - 1) {
                      setCurrQuestionIndex(currQuestionIndex + 1);
                    } else {
                      onSubmitAnswertTest();
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

export default ReverseDigitSpanTest;
