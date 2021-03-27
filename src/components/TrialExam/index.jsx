import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import StartTestButton from "../Button";
import { Breakpoint } from "react-socks";

const TrialExam = ({
  trialQuestions,
  answer,
  currQuestionIndex,
  currentQuestionCorrectAnswer,
  setAnswer,
  onClick,
  examName,
}) => {
  return (
    <Box margin="auto">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="100%"
        w="70vw"
        bg="#f9f9fc"
        flexDir="column"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          marginX="20px"
          dir="rtl"
        >
          <Text fontSize={["14px", "18px", "18px", "18px"]} fontWeight="bold">
            {trialQuestions?.message} التجريبية
          </Text>
          {!answer[currQuestionIndex] ? (
            ""
          ) : answer[currQuestionIndex] === currentQuestionCorrectAnswer ? (
            <Text
              fontSize={["large", "3xl", "3xl", "3xl"]}
              fontWeight="bold"
              color="green.400"
            >
              إجابة صحيحة
            </Text>
          ) : (
            <Text
              fontSize={["large", "3xl", "3xl", "3xl"]}
              fontWeight="bold"
              color="red.400"
            >
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
          h={
            examName === "inhibition"
              ? ""
              : examName === "logicalReasoning"
              ? ""
              : examName === "flanker"
              ? ""
              : examName === "digitSymbol"
              ? ""
              : "500px"
          }
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
                {trialQuestions?.payload && (
                  <Text
                    fontSize="5xl"
                    color={trialQuestions?.payload[currQuestionIndex]?.color}
                  >
                    {trialQuestions?.payload[currQuestionIndex]?.color_text}
                  </Text>
                )}
              </Flex>
              <Breakpoint medium up>
                <Grid
                  gap={5}
                  marginTop="20px"
                  templateColumns="1fr 1fr 1fr 1fr"
                >
                  {trialQuestions?.payload &&
                    trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                            answer[currQuestionIndex] === option?.answer
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswer({
                              ...answer,
                              [currQuestionIndex]: option?.answer,
                            });
                          }}
                        >
                          <Text>{option.answer}</Text>
                        </Box>
                      )
                    )}
                </Grid>
              </Breakpoint>
              <Breakpoint small down>
                <Grid gap={5} marginTop="20px" templateRows="1fr 1fr 1fr 1fr">
                  {trialQuestions?.payload &&
                    trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                            answer[currQuestionIndex] === option?.answer
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswer({
                              ...answer,
                              [currQuestionIndex]: option?.answer,
                            });
                          }}
                        >
                          <Text>{option.answer}</Text>
                        </Box>
                      )
                    )}
                </Grid>
              </Breakpoint>
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
                {trialQuestions?.payload && (
                  <Image
                    marginY="20px"
                    fit="fill"
                    height="300px"
                    width="500px"
                    src={trialQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr">
                {trialQuestions?.payload &&
                  trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                          answer[currQuestionIndex] === option?.answer
                            ? "#68D391"
                            : null
                        }
                        px={5}
                        py={3}
                        onClick={() => {
                          setAnswer({
                            ...answer,
                            [currQuestionIndex]: option?.answer,
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
                {trialQuestions?.payload && (
                  <Image
                    marginY="20px"
                    fit="fill"
                    height="300px"
                    width="500px"
                    src={trialQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Breakpoint medium up>
                <Grid
                  gap={5}
                  marginTop="20px"
                  templateColumns="1fr 1fr 1fr 1fr"
                >
                  {trialQuestions?.payload &&
                    trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                            answer[currQuestionIndex] === option?.answer
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswer({
                              ...answer,
                              [currQuestionIndex]: option?.answer,
                            });
                          }}
                        >
                          <Text>{option.answer}</Text>
                        </Box>
                      )
                    )}
                </Grid>
              </Breakpoint>
              <Breakpoint small down>
                <Grid gap={5} marginTop="20px" templateRows="1fr 1fr 1fr">
                  {trialQuestions?.payload &&
                    trialQuestions?.payload[currQuestionIndex]?.answers?.map(
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
                            answer[currQuestionIndex] === option?.answer
                              ? "#68D391"
                              : null
                          }
                          px={5}
                          py={3}
                          onClick={() => {
                            setAnswer({
                              ...answer,
                              [currQuestionIndex]: option?.answer,
                            });
                          }}
                        >
                          <Text>{option.answer}</Text>
                        </Box>
                      )
                    )}
                </Grid>
              </Breakpoint>
            </>
          ) : examName === "inhibition" ? (
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
                {trialQuestions?.payload && (
                  <Image
                    marginY="20px"
                    fit="fill"
                    height="300px"
                    width="500px"
                    src={trialQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Breakpoint medium up>
                <Grid gap={5} marginTop="20px" templateColumns="1fr 1fr 1fr">
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
              </Breakpoint>
              <Breakpoint small down>
                <Grid gap={2} marginTop="20px" templateRows="1fr 1fr 1fr">
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
                          <Image margin="auto" src={option?.answer_image} />
                        </Box>
                      )
                    )}
                </Grid>
              </Breakpoint>
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
                {trialQuestions?.payload && (
                  <Image
                    marginY="20px"
                    fit="fill"
                    height="300px"
                    width="500px"
                    src={trialQuestions?.payload[currQuestionIndex]?.photo}
                  />
                )}
              </Flex>
              <Breakpoint medium up>
                <Grid
                  gap={5}
                  marginTop="20px"
                  templateColumns="1fr 1fr 1fr 1fr"
                >
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
              </Breakpoint>
              <Breakpoint small down>
                <Grid gap={2} marginTop="20px" templateRows="1fr 1fr 1fr 1fr">
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
              </Breakpoint>
            </>
          ) : (
            ""
          )}

          <Flex justifyContent="center" width="100%" marginTop="20px">
            <StartTestButton
              marginBottom="20px"
              width="200px"
              type="next"
              disabled={
                !answer[currQuestionIndex] ||
                currentQuestionCorrectAnswer !== answer[currQuestionIndex]
              }
              buttonText="التالى"
              onClick={onClick}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TrialExam;
