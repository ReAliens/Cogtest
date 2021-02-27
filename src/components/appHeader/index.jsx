import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Header = ({ headerImage }) => (
  <Box width="100%" height="80px" dir="rtl">
    <Image fit="fill" h="100px" w="300px" src={headerImage} />
  </Box>
);

export default Header;
