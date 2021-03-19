import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useCurrentBreakpointName } from "react-socks";

const Loader = () => {
  const breakPointName = useCurrentBreakpointName();
  return (
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
        marginTop={
          breakPointName === "small" || breakPointName === "xsmall"
            ? "60%"
            : breakPointName === "medium"
            ? "40%"
            : "20%"
        }
        height="200px"
        width="200px"
        color="red.500"
        thickness="4px"
        speed="0.9s"
        emptyColor="gray.200"
      />
    </Box>
  );
};
export default Loader;
