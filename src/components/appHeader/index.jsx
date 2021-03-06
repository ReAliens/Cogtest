import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Header = ({ headerImage }) => (
  <Box justifyContent="center" width="100%" dir="rtl">
    <Image fit="fill" w="300px" src={headerImage} />
  </Box>
);

export default Header;
