import React, { useMemo, useState } from "react";
import { Box, Flex, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import useTrialQuestions from "../../../../../hooks/useTerial";
import useTests from "../../../../../hooks/useTests";
import StartTestButton from "../../../../../components/Button";
import { useHistory } from "react-router";

const InhibitionTrial = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const history = useHistory();
  const { tests } = useTests();
  const trialInhibitionData = tests?.payload?.find(
    (load) => load?.code === "inhibition"
  );
  const trialInhibitionID = trialInhibitionData?.id;
  const { trialQuestions, trialQuestionLoading } = useTrialQuestions(
    trialInhibitionID
  );

  const correctAnswers = trialQuestions?.payload?.map((question) =>
    question?.answers?.find((answer) => answer.is_correct === true)
  );

  const currentQuestionCorrectAnswer = useMemo(
    () =>
      correctAnswers ? correctAnswers[currQuestionIndex]?.answer_image : null,
    [correctAnswers, currQuestionIndex]
  );

  return (
    <>
      {trialQuestionLoading || !trialQuestions ? (
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
              <Text> {trialQuestions?.message} التجريبية</Text>
              {!answer[currQuestionIndex] ? (
                ""
              ) : answer[currQuestionIndex] === currentQuestionCorrectAnswer ? (
                <Text fontSize="3xl" fontWeight="bold" color="green.400">
                  إجابة صحيحة
                </Text>
              ) : (
                <Text fontSize="3xl" fontWeight="bold" color="red.400">
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
                {trialQuestions?.payload && (
                  <Image
                    fit="cover"
                    width="100px"
                    src={trialQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr 1fr">
                {trialQuestions?.payload &&
                  trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                          answer[currQuestionIndex] === option?.answer_image
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswer({
                            ...answer,
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
                  type="next"
                  disabled={!answer[currQuestionIndex]}
                  buttonText="التالى"
                  onClick={() => {
                    if (
                      currQuestionIndex <
                      trialQuestions?.payload.length - 1
                    ) {
                      setCurrQuestionIndex(currQuestionIndex + 1);
                    } else {
                      history.push(`/tests/inhibition/${trialInhibitionID}`);
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

export default InhibitionTrial;
