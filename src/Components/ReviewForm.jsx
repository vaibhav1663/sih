import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EthicalIssues from "./ReviewForm/EthicalIssues";
import AuthorInfo from "./ReviewForm/AuthorInfo";
import PublisherCredibility from "./ReviewForm/PublisherCredibility";
import UniquenessRating from "./ReviewForm/UniquenessRating";
import PhysicalAppearanceRating from "./ReviewForm/PhysicalAppearanceRating";
import SubjectMatter from "./ReviewForm/SubjectMatter";
import Illustrations from "./ReviewForm/Illustrations";
import {
  Heading,
  Select,
  Input,
  Button,
  Textarea,
  Stack,
  Box,
  Divider,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

const SuccessModal = ({ isOpen, onClose, handleExplore }) => (
  <AlertDialog isOpen={isOpen} onClose={onClose}>
    <AlertDialogOverlay />
  
    <AlertDialogContent>
      <AlertDialogHeader fontSize="2xl" fontWeight="bold" mx="auto" mt={2}>
        Book Review Successful.
      </AlertDialogHeader>
  
      {/* <AlertDialogCloseButton /> */}
  
      <AlertDialogBody textAlign="center">
        Thank you for your review!
      </AlertDialogBody>
    </AlertDialogContent>
  </AlertDialog>
  
  
);


const ReviewForm = (id) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const handleNext = () => {
    setCurrentTab((prevTab) => Math.min(prevTab + 1, 5));
  };

  const handlePrev = () => {
    setCurrentTab((prevTab) => Math.max(prevTab - 1, 0));
  };

  const [bookData, setBookData] = useState({
    H:[null, null, null],
    A:[null,null,null,null,null],
    B:null,
    C:[null,null,null,null],
    D:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    E:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    G:[null,null,null,null,null],
  });

  const handleEthicalIssuesChange = (id,value) => {
    if(id==="fabrication"){
      const newBookData = { ...bookData };
      newBookData.H[0] = value;
      setBookData(newBookData);
    }
    else if(id==="plagiarism"){
      const newBookData = { ...bookData };
      newBookData.H[1] = value;
      setBookData(newBookData);
    }
    else if(id==="citation"){
      const newBookData = { ...bookData };
      newBookData.H[2] = value;
      setBookData(newBookData);
    }
  }

  const handleAuthorInfo = (value, id) => {
    const newBookData = { ...bookData };
    newBookData.A[id] = Number(value);
    setBookData(newBookData);
  }

  const handlePublisherCredibilityChange = (selectedOption) => {
    setBookData((prevBookData) => ({
      ...prevBookData,
      B: selectedOption,
    }));
  };

  const handleUniquenessRatingChange = (value, question) => {
    if(question==="uniquenessLevel"){
      const newBookData = { ...bookData };
      newBookData.C[0] = Number(value);
      setBookData(newBookData);
    }
    else if(question==="clarityOfClaim"){
      const newBookData = { ...bookData };
      newBookData.C[1] = Number(value);
      setBookData(newBookData);
    }
    else if(question==="focusOnUniqueness"){
      const newBookData = { ...bookData };
      newBookData.C[2] = Number(value);
      setBookData(newBookData);
    }
    else if(question==="curriculumAndSyllabus"){
      const newBookData = { ...bookData };
      newBookData.C[3] = Number(value);
      setBookData(newBookData);
    }
  }

  const handlePhysicalAppearanceRating = (value, id) => {
    const newBookData = { ...bookData };
    newBookData.D[id] = Number(value);
    setBookData(newBookData);
  }

  const handleSubjectMatterChange = (value,id) => {
    const newBookData = { ...bookData };
    newBookData.E[id] = Number(value);
    setBookData(newBookData);
  }

  const handleIllustrationsChange = (value,id) => {
    const newBookData = { ...bookData };
    newBookData.G[id] = Number(value);
    setBookData(newBookData);
  }

  const handleSubmit = () => {
    console.log(bookData);
    setSuccessModalOpen(true);
    onClose();
  }

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <>
      <Button onClick={onOpen}>Review</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="7xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
      <h1 className="text-3xl mx-auto my-6">Book Review</h1>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        className="mx-10 border rounded px-2 py-4"
        index={currentTab}
        onChange={handleTabChange}
      >
        <TabList className="overflow-x-auto">
          <Tab onClick={() => handleTabChange(0)}>Ethical Issues</Tab>
          <Tab onClick={() => handleTabChange(1)}>Authors</Tab>
          <Tab onClick={() => handleTabChange(2)}>Publisher</Tab>
          <Tab onClick={() => handleTabChange(3)}>Uniqueness</Tab>
          <Tab onClick={() => handleTabChange(4)}>Appearance</Tab>
          <Tab onClick={() => handleTabChange(5)}>Subject Matter</Tab>
          <Tab onClick={() => handleTabChange(6)}>Illustrations</Tab>
        </TabList>

        <Divider className="mt-4 mx-0" borderColor="gray.300" />

        <TabPanels className="px-10">
          <TabPanel>
            <EthicalIssues OnDataChange={handleEthicalIssuesChange}/>
          </TabPanel>
          <TabPanel>
            <AuthorInfo OnDataChange={handleAuthorInfo}/>
          </TabPanel>
          <TabPanel>
            <PublisherCredibility OnRadioChange={handlePublisherCredibilityChange}/>
          </TabPanel>
          <TabPanel>
            <UniquenessRating onDataChange={handleUniquenessRatingChange}/>
          </TabPanel>
          <TabPanel>
            <PhysicalAppearanceRating OnDataChange={handlePhysicalAppearanceRating}/>
          </TabPanel>
          <TabPanel>
            <SubjectMatter OnDataChange={handleSubjectMatterChange}/>
          </TabPanel>
          <TabPanel>
            <Illustrations OnDataChange={handleIllustrationsChange}/>
          </TabPanel>
        </TabPanels>

        <Divider className="mb-4" />

        <div className="mt-4">
          <Button
            onClick={handlePrev}
            disabled={currentTab === 0}
            colorScheme="teal"
            variant="outline"
            className="mx-2"
          >
            Previous
          </Button>

          {currentTab == 6 ? (
            <>
              <Button
                onClick={handleSubmit}
                disabled={currentTab !== 6}
                colorScheme="teal"
                variant="outline"
                className="mx-2"
              >
                Submit
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={handleNext}
                disabled={currentTab === 5}
                colorScheme="teal"
                variant="outline"
                className="mx-2"
              >
                Next
              </Button>
            </>
          )}
        </div>
      </Tabs>
      </ModalBody>
      </ModalContent>
      </Modal>
      <SuccessModal
        isOpen={successModalOpen}
        onClose={closeSuccessModal}
      />
    </>
  );
};

export default ReviewForm;
