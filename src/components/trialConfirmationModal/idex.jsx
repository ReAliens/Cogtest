import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import StartTestButton from "../Button";

const TrialConfirmModal = ({ isOpen, onClose, onClick }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent background="#f9f9fc">
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Box
            padding="10px"
            borderRadius="10px"
            justifyContent="center"
            w="100%"
            bg="white"
            marginY="20px"
          >
            <Text
              fontSize={["12px", "16px", "16px", "16px"]}
              fontWeight="bold"
              color="green.400"
              dir="rtl"
            >
              أحسنت الآن وقد فهمت الهدف من هذا الإختبار اضغط ابدأ الاختبار اذا
              كنت مستعداً
            </Text>
          </Box>
          <Flex justifyContent="center">
            <StartTestButton buttonText="ابدأ الإختبار" onClick={onClick} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TrialConfirmModal;
