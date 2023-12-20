import React from 'react';
import PieChart from "../ReviewerDashboard/PieChart";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Divider,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const WidgetToggle = ({ data }) => {
  if(data){
    return(
      <div className="pic p-6 rounded-lg">
      
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        className="mx-2 md:mx-6 lg:mx-10 py-6 border-2 border-gray-300 rounded-md"
      >
        <TabList className="overflow-x-auto px-6">
          <Tab>Plagiarism Score</Tab>
          <Tab>Source</Tab>
          <Tab>Citation</Tab>
        </TabList>

        <Divider className="mt-4 mx-0" borderColor="gray.300" />

        <TabPanels className="">
          <TabPanel>
            <h1 className="text-2xl font-semibold mb-6">
              Plagiarism Score
            </h1>
            <PieChart
              data={[{ label: "", value: 100 - (data?.plagiarismResult?.percentPlagiarism) }, { label: "", value: data?.plagiarismResult?.percentPlagiarism }]}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </TabPanel>

          
          <TabPanel>
            <h1 className="text-2xl font-semibold mb-6">Sources</h1>
            <Accordion allowToggle>
              {data?.plagiarismResult?.sources.map((source, index) => (
                <AccordionItem
                  key={index}
                  className="mb-2 border border-black rounded-lg"
                >
                  <h2>
                    <AccordionButton className="bg-gray-200 rounded-lg">
                      <Box as="span" flex="1" textAlign="left">
                        Source : {source.title}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="text-left">
                    <p>Score:{source.matches.score}</p>
                    <p className="mb-4">Url:{source.url}</p>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    )
  }
  return (
    <></>
  );
};

export default WidgetToggle;