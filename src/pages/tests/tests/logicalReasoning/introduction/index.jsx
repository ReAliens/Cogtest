import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import Introduction from "../../../../../components/Introduction";
import useTests from "../../../../../hooks/useTests";

const LogicalReasoningIntroduction = () => {
  const { tests, testLoading } = useTests();
  const ninthTest = tests && tests.payload ? tests.payload[8] : null;

  return (
    <>
      {testLoading || !tests ? (
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
        <Introduction
          testName={ninthTest?.name}
          testDesc={ninthTest?.desc}
          testLink={`/tests/logical-reasoning/${ninthTest?.id}`}
        />
      )}
    </>
  );
};

export default LogicalReasoningIntroduction;
