import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EthicalIssues from "./ReviewForm/EthicalIssues";
import AuthorInfo from "./ReviewForm/AuthorInfo";
import PublisherCredibility from "./ReviewForm/PublisherCredibility";
import UniquenessRating from "./ReviewForm/UniquenessRating";
import PhysicalAppearanceRating from "./ReviewForm/PhysicalAppearanceRating";
import SubjectMatter from "./ReviewForm/SubjectMatter";
import Illustrations from "./ReviewForm/Illustrations";
import { Button } from '@chakra-ui/react'
import { useState } from "react";
import { Divider } from "@chakra-ui/react";

const ReviewForm = () => {
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
    newBookData.A[id] = value;
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
      newBookData.C[0] = value;
      setBookData(newBookData);
    }
    else if(question==="clarityOfClaim"){
      const newBookData = { ...bookData };
      newBookData.C[1] = value;
      setBookData(newBookData);
    }
    else if(question==="focusOnUniqueness"){
      const newBookData = { ...bookData };
      newBookData.C[2] = value;
      setBookData(newBookData);
    }
    else if(question==="curriculumAndSyllabus"){
      const newBookData = { ...bookData };
      newBookData.C[3] = value;
      setBookData(newBookData);
    }
  }

  const handlePhysicalAppearanceRating = (value, id) => {
    const newBookData = { ...bookData };
    newBookData.D[id] = value;
    setBookData(newBookData);
  }

  const handleSubjectMatterChange = (value,id) => {
    const newBookData = { ...bookData };
    newBookData.E[id] = value;
    setBookData(newBookData);
  }

  const handleIllustrationsChange = (value,id) => {
    const newBookData = { ...bookData };
    newBookData.G[id] = value;
    setBookData(newBookData);
  }

  const handleSubmit = () => {
    console.log(bookData);
  }

  return (
    <>
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
        
        <Button onClick={handlePrev} disabled={currentTab === 0} colorScheme='teal' variant='outline' className="mx-2">Previous</Button>
        <Button onClick={handleNext} disabled={currentTab === 5} colorScheme='teal' variant='outline' className="mx-2">Next</Button>
        </div>
        <div className="mt-4">
        <Button onClick={handleSubmit} disabled={currentTab !== 5} colorScheme='teal' variant='outline' className="mx-2">Submit</Button>
        </div>
      </Tabs>
    </>
  );

};

export default ReviewForm;
