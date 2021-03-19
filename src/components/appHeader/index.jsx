import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useCurrentBreakpointName } from "react-socks";

const Header = ({ headerImage }) => {
  const breakPointName = useCurrentBreakpointName();

  return (
    <Box justifyContent="center" width="100%" dir="rtl">
      <Image
        fit="fill"
        w={
          breakPointName === "small" || breakPointName === "xsmall"
            ? "200px"
            : "300px"
        }
        src={headerImage}
      />
    </Box>
  );
};

export default Header;
