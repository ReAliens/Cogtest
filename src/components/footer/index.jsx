import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ copyRignt }) => (
  <Box marginTop="20px" width="100%">
    <Text fontSize="16px" color="white">
      {copyRignt}
    </Text>
  </Box>
);

export default Footer;
