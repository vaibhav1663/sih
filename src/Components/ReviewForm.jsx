import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EthicalIssues from "./ReviewForm/EthicalIssues";
import AuthorInfo from "./ReviewForm/AuthorInfo";
import PublisherCredibility from "./ReviewForm/PublisherCredibility";
import UniquenessRating from "./ReviewForm/UniquenessRating";
import PhysicalAppearanceRating from "./ReviewForm/PhysicalAppearanceRating";
import SubjectMatter from "./ReviewForm/SubjectMatter";
import Illustrations from "./ReviewForm/Illustrations";
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from "react";
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
    H: {
      H1:0,
      H2:0,
      H3:0,
    },
    A:{
      A1:0,
      A2:0,
      A3:0,
      A4:0,
      A5:0,
    },
    B:0,
    C: {
      C1:0,
      C2:0,
      C3:0,
      C4:0,
    },
    D:{
      D1:0,
      D2:0,
      D3:{D31:0, D32:0},
      D4:0,
      D5:0,
      D6:0,
      D7:{D71:0,D72:0,D73:0},
    },
    E:{
      E1:{E11 : 0,
        E12 : 0,
        E13 : 0,},
      E2:{E21 : 0,
        E22 : 0,
        E23 : 0,
        E24 : 0,},
      E3: 0,
      E4: 0,
      E5: 0,
      E61: 0,
      E62: 0,
      E7: 0,
      E8: 0,
      E9: 0,
      E10: 0,
      E11: 0,
      E12: 0,
      E13: 0,
      E14: 0,
      E15: 0,
    }, 
    G:{
      G1:0,
      G2:{G21:0,G22:0,G23:0},
      G3:0,
    }
  });

  const handlePublisherCredibilityChange = (selectedOption) => {
    setBookData((prevBookData) => ({
      ...prevBookData,
      B: selectedOption,
    }));
  };

  const handleUniquenessRatingChange = (value, question) => {
    ;
  }

  const handleSubmit = () => {
    ;
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
            <EthicalIssues />
          </TabPanel>
          <TabPanel>
            <AuthorInfo />
          </TabPanel>
          <TabPanel>
            <PublisherCredibility onRadioChange={handlePublisherCredibilityChange}/>
          </TabPanel>
          <TabPanel>
            <UniquenessRating onDataChange={handleUniquenessRatingChange}/>
          </TabPanel>
          <TabPanel>
            <PhysicalAppearanceRating />
          </TabPanel>
          <TabPanel>
            <SubjectMatter/>
          </TabPanel>
          <TabPanel>
            <Illustrations />
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
