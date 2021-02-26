import { Box, Image } from "@chakra-ui/react";
import React from "react";
import headerImage from "../../images/header-logo.png";

const Header = () => (
  <Box width="100%" height="80px" dir="rtl">
    <Image src={headerImage} />
  </Box>
);

export default Header;
