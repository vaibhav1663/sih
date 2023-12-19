import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { Textarea } from "@chakra-ui/react";

const RejectComp = ({ _id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const [deadline, setDeadline] = useState(30);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      setErrorMessage("Message is required.");
      return;
    }

    const rejectData = {
      _id,
      message,
      deadline,
    };
    console.log("Reject Data : ", rejectData);

    onClose();
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    setErrorMessage(""); // Clear the error message when the user starts typing
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Reject
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent my="auto">
          <ModalHeader>Book Rejection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!errorMessage}>
              <FormLabel>Message for Author</FormLabel>
              <Textarea
                placeholder="We are sending this book back to you because..."
                required
                value={message}
                onChange={handleTextareaChange} // Use the new handler
                height="16rem"
                maxH="16rem"
              />
              <Text color="red.500" fontSize="sm" mt={1}>
                {errorMessage}
              </Text>
            </FormControl>
            <FormControl pt={2}>
              <FormLabel>Deadline for Revision</FormLabel>
              <NumberInput
                min={0}
                defaultValue={30}
                value={deadline + " days"}
                onChange={(value) => setDeadline(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleSend}>
              Send
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RejectComp;
