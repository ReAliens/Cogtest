import React from "react";
import { IconButton } from "@chakra-ui/react";

const SocialIconButton = ({
  id,
  isActive,
  platform,
  onClick,
  ordIconCol,
  ...props
}) => (
  <IconButton
    id={id}
    isRound
    icon={platform}
    variantColor={isActive ? "blue" : "teal"}
    colorScheme={ordIconCol && isActive ? "blue" : "teal"}
    size="40px"
    padding={2}
    marginX={1}
    cursor="pointer"
    onClick={() => onClick(platform)}
    {...props}
  />
);

export default SocialIconButton;
