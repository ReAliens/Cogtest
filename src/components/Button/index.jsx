import { Button, Text } from "@chakra-ui/react";
import React from "react";

const StartTestButton = ({ type, onClick, buttonText, disabled, ...props }) => (
  <Button
    type={type}
    disabled={disabled}
    _hover={
      type === "next" && {
        bg: "#68D391",
      }
    }
    bg="#2B6CB0"
    onClick={onClick}
    {...props}
  >
    <Text color="white">{buttonText}</Text>
  </Button>
);

export default StartTestButton;
