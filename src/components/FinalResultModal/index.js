import React from "react";
import { Modal, ModalContent, ModalBody, Text, Flex } from "@chakra-ui/react";
import StartTestButton from "../Button";

const FinalResultModal = ({ isOpen, onClose, endMessage, score }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalContent>
      <ModalBody>
        <Flex flexDir="column" padding="10px" justifyContent="center">
          <Flex justifyContent="center" mb="20px">
            <Text fontSize={["14px", "16px", "18px", "18px"]} fontWeight="bold">
              {endMessage}
            </Text>
          </Flex>
          <Flex justifyContent="center" mb="20px">
            <Text fontSize={["14px", "16px", "18px", "18px"]} fontWeight="bold">
              {score}
            </Text>
          </Flex>
          <Flex justifyContent="center" mt="10px">
            <StartTestButton
              buttonText=" تسجيل خروج"
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default FinalResultModal;
