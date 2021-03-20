import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import StartTestButton from "../../components/Button";

const FinishPage = ({ testName, type }) => {
  return (
    <Flex
      paddingTop="20px"
      h="100%"
      w="70vw"
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
          <Text dir="rtl">
            تم انتهاء الاختبار بنجاح الرجاء تسجيل الخروج ﻹتمام تسجيل الدرجة
          </Text>
        </Flex>
        <Flex marginTop="20px">
          <StartTestButton
            buttonText={
              type === "lastExam" ? "تسجيل خروج" : "ابدأ الاختبار التالى"
            }
            onClick={() => (window.location.href = "/")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FinishPage;
