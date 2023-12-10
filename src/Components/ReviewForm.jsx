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
            <PublisherCredibility />
          </TabPanel>
          <TabPanel>
            <UniquenessRating />
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
      </Tabs>
    </>
  );
};

export default ReviewForm;
