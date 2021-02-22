import { Button, Text } from "@chakra-ui/react";
import React from "react";

const StartTestButton = ({ onClick, buttonText }) => (
  <Button bg="#181C32" onClick={onClick}>
    <Text color="white">{buttonText}</Text>
  </Button>
);

export default StartTestButton;
