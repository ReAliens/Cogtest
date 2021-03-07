import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";
import useTests from "../../../../../hooks/useTests";

const Introduction = () => {
  const { tests, testLoading } = useTests();
  const eightsTest = tests && tests.payload ? tests.payload[7] : null;

  return (
    <>
      {testLoading ? (
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
              <Text> {eightsTest?.name}</Text>
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
                <Text dir="rtl">{eightsTest?.desc}</Text>
              </Flex>
              <Flex justifyContent="center" marginTop="20px">
                <Link to={`/tests/inhibition/${eightsTest?.id}`}>
                  <StartTestButton width="200px" buttonText="ابدأ الاختبار" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Introduction;
