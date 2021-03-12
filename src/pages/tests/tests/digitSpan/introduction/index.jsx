import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
import useTests from "../../../../../hooks/useTests";

const Introduction = () => {
  // const { tests } = useTests();
  // const seconedTest = tests && tests.payload ? tests.payload[1] : null;

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
        <Flex marginX="20px" dir="rtl">
          {/* <Text> {seconedTest?.name}</Text> */}
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="100px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          h="100%"
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
          >
            <Text dir="rtl">
              الفقرة الثانية :اختبار فلانكر للاصدار يعتمد على قياس تأثير
              الملعومات المتضاربة داخل مجموعة التحفيز يجب على الممتحن فى هذا
              الاختبار التركيز على الموضوع المحفز مع تجاهل المحفزات المجاورة
            </Text>
          </Flex>
          <Flex>
            <Link to={`/tests/digit-span/1`}>
              <StartTestButton buttonText="ابدأ الاختبار" />
            </Link>
          </Flex>
        </Flex>
        test cross block intro
      </Flex>
    </Box>
  );
};

export default Introduction;
