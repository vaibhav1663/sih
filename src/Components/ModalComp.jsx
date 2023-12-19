import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogFooter,
  } from "@chakra-ui/react";
  import { useRef } from "react";
  
  const ModalComp = ({ heading, message, isOpen, onClose }) => {
    const cancelRef = useRef();
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
  
        <AlertDialogContent my="auto">
          <AlertDialogHeader
            fontSize="2xl"
            fontWeight="bold"
            mx="auto"
            mt={2}
          >
            {heading}
          </AlertDialogHeader>
  
          <AlertDialogCloseButton />
  
          <AlertDialogBody textAlign="center" pb="2rem">
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default ModalComp;
  