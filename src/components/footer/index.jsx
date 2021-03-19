import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ copyRignt }) => (
  <Box marginTop="20px" width="100%">
    <Text
      fontSize={["10px", "12px", "14px", "16px"]}
      color="white"
      fontWeight="bold"
    >
      {copyRignt}
    </Text>
  </Box>
);

export default Footer;
