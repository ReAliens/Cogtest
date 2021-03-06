import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
import useTests from "../../../../../hooks/useTests";

const Introduction = () => {
  const { tests } = useTests();
  const thirdTest = tests && tests.payload ? tests.payload[2] : null;

  return (
    <Box alignItems="center" alignSelf="center" marginTop="10%">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="100%"
        w="1140px"
        bg="#f9f9fc"
        flexDir="column"
      >
        <Flex marginX="20px" dir="rtl">
          <Text> {thirdTest?.name}</Text>
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="20px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          h="100%"
          flexDir="column"
          dir="rtl"
          borderRadius="10px"
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
            <Text dir="rtl">{thirdTest?.desc}</Text>
          </Flex>
          <Flex justifyContent="center" marginTop="20px">
            <Link to={`/tests/corsi/${thirdTest?.id}`}>
              <StartTestButton width="200px" buttonText="ابدأ الاختبار" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Introduction;
