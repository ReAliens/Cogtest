import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
import useTests from "../../../../../hooks/useTests";

const Introduction = () => {
  const { tests } = useTests();
  const seventhTest = tests && tests.payload ? tests.payload[6] : null;

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
          <Text> {seventhTest?.name}</Text>
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
              اختبار {seventhTest?.name} أداة محترفة مُصممة للكشف عن مهارات سرعة
              المعالجة والوقت المستغرق لرد الفعل. تقيس هذه المهمة بشكل دقيق
              القدرة على استقبال ومعالجة محفز بسيط والإستجابة له.
            </Text>
          </Flex>
          <Flex>
            <Link to={`/tests/digit-symbol/${seventhTest?.id}`}>
              <StartTestButton buttonText="ابدأ الاختبار" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Introduction;
