import React, { useState } from 'react';
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

let data={
    "plagiarismResult": {
      "sources": [
        {
          "url": "https://shop.himalayaninstitute.org/products/textbook-of-ayurveda-vol-2",
          "scholarResult": false,
          "title": "Textbook of Ayurveda Vol. 2",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 330,
              "matchText": "Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying the mysteries of ayurveda from the classical Sanskrit texts. This text builds upon the information in Volume One , imparting the essential elements of clinical assessment.",
              "context": {
                "before": "Vasant Lad, BAMS, MASc ",
                "after": " Vasant Lad describes the many"
              },
              "score": 43.02439024390244
            }
          ]
        },
        {
          "url": "https://books.google.com/books/about/Textbook_of_Ayurveda.html?id=hJIeAQAAIAAJ",
          "scholarResult": false,
          "title": "Textbook of Ayurveda, Book 1 - Vasant Lad",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 330,
              "matchText": "\"Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying the mysteries of Ayurveda from the classical Sanskrit texts. This text builds upon the information in Volume One, imparting the essential elements of clinical assessment.",
              "context": {
                "before": "Ayurvedic - 334 pages ",
                "after": " Vasant Lad describes the many"
              },
              "score": 43.02439024390244
            }
          ]
        },
        {
          "url": "https://books.google.com/books/about/Textbook_of_Ayurveda_General_principles.html?id=uOQtnwEACAAJ",
          "scholarResult": false,
          "title": "Textbook of Ayurveda: General principles of management ...",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 330,
              "matchText": "\"Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying the mysteries of Ayurveda from the classical Sanskrit texts. This text builds upon the information in Volume One, imparting the essential elements of clinical assessment.",
              "context": {
                "before": "Ayurvedic - 668 pages ",
                "after": " Vasant Lad describes the many"
              },
              "score": 43.02439024390244
            }
          ]
        },
        {
          "url": "https://sevantiinstitute.com/books/textbook-of-ayurveda-vol-2-a-complete-guide-to-clinical-assessment/",
          "scholarResult": false,
          "title": "Textbook of Ayurveda Vol 2: A Complete Guide to Clinical ...",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 330,
              "matchText": "Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying the mysteries of Ayurveda from the classical Sanskrit texts. This text builds upon the information in Volume One, imparting the essential elements of clinical assessment.",
              "context": {
                "before": "ISBN: 1883725119 ",
                "after": " Vasant Lad describes the m"
              },
              "score": 43.02439024390244
            }
          ]
        },
        {
          "url": "https://www.isbns.fm/author/Angele_Werneke",
          "scholarResult": false,
          "title": "Angele Werneke > Compare Discount Book Prices & Save up to 90 ...",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 159,
              "matchText": "\"Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying...",
              "context": {},
              "score": 19.047619047619047
            }
          ]
        },
        {
          "url": "https://sevantiinstitute.com/bookstore/",
          "scholarResult": false,
          "title": "Bookstore ‣ Sevanti Institute",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 159,
              "matchText": "Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots, clarifying...",
              "context": {},
              "score": 19.047619047619047
            }
          ]
        },
        {
          "url": "https://www.worldcat.org/zh-tw/title/textbook-of-ayurveda/oclc/44039309",
          "scholarResult": false,
          "title": "Textbook of Ayurveda | WorldCat.org",
          "matches": [
            {
              "inputStart": 0,
              "inputEnd": 148,
              "matchText": "\"Vasant Lad presents this ages-old science in a framework that is clearly accessible to the modern student while remaining true to its ancient roots,...",
              "context": {},
              "score": 18.05
            }
          ]
        },
        {
          "url": "https://www.amazon.com/Textbook-Ayurveda-Two-Complete-Assessment/dp/1883725119",
          "scholarResult": false,
          "title": "Textbook of Ayurveda, Volume Two: A Complete Guide to ...",
          "matches": []
        }
      ],
      "percentPlagiarism": 50,
      "citations": [
        {
          "title": "Textbook of Ayurveda Vol 2: A Complete Guide to Clinical ...",
          "url": "https://sevantiinstitute.com/books/textbook-of-ayurveda-vol-2-a-complete-guide-to-clinical-assessment/",
          "sentenceEndIndex": 329,
          "score": 43,
          "matchedContentStartIndex": 0,
          "matchedContentEndIndex": 330
        }
      ]
    }
  }

const WidgetToggle = () => {

  return (
          <div className="pic bg-blue-100 p-6 rounded-lg">
            <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          className="mx-2 md:mx-6 lg:mx-10 py-6 border-2 border-gray-300 rounded-md"
        >
          <TabList className="overflow-x-auto px-6">
            <Tab>Plagiarism Score</Tab>
            <Tab>Citations</Tab>
            <Tab>Sources</Tab>
          </TabList>

          <Divider className="mt-4 mx-0" borderColor="gray.300" />

          <TabPanels className="">
            <TabPanel>
              <h1 className="text-2xl font-semibold mb-6">
                Plagiarism Score
              </h1>
              <PieChart
            data={[{label:"",value:100-(data.plagiarismResult.percentPlagiarism)},{label:"",value:data.plagiarismResult.percentPlagiarism}]}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
            />
            </TabPanel>

            <TabPanel>
              <h1 className="text-2xl font-semibold">Plagiarism Score</h1>
              <Accordion allowToggle>
                {data.plagiarismResult.citations.map((cite, index) => (
                <AccordionItem
                    key={index}
                    className="mb-2 border border-black rounded-lg"
                >
        <h2>
          <AccordionButton className="bg-gray-200 rounded-lg">
            <Box as="span" flex="1" textAlign="left">
              Citations
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="text-left">
          <p>Title:{cite.title}</p>
          <p className="mb-4">Url:{cite.url}</p>
        </AccordionPanel>
                </AccordionItem>
            ))}
         </Accordion>
            </TabPanel>
            <TabPanel>
            <h1 className="text-2xl font-semibold mb-6">Sources</h1>
            <Accordion allowToggle>
                {data.plagiarismResult.sources.map((source, index) => (
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
  );
};

export default WidgetToggle;