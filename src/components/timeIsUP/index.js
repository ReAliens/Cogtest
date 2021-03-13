import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../components/Button";

const TimeIsUpPage = ({ testName, type }) => {
  return (
    <Flex
      paddingTop="20px"
      h="100%"
      minW={["300px", "600px", "800px", "1000px"]}
      flexDir="column"
      borderRadius="20px"
    >
      <Flex
        justifyContent="center"
        borderRadius="20px"
        paddingBottom="20px"
        alignItems="center"
        marginTop="30px"
        bg="#E4E6EF"
        paddingX="20px"
        h="100%"
        flexDir="column"
        dir="rtl"
      >
        <Flex
          padding="20px"
          marginTop="50px"
          justifyContent="center"
          w="100%"
          borderRadius="10px"
          bg="white"
          dir="rtl"
        >
          <Text dir="rtl">عفواً انتهى الوقت المخصص لهذا الاختبار</Text>
        </Flex>
        <Flex marginTop="20px">
          {type === "lastExam" ? (
            <StartTestButton
              buttonText="تسجيل خروج"
              onClick={() => (window.location.href = "/")}
            />
          ) : (
            <Link to={`/tests/${testName}`}>
              <StartTestButton
                buttonText={
                  type === "lastExam" ? "تسجيل خروج" : "ابدأ الاختبار التالى"
                }
              />
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TimeIsUpPage;
