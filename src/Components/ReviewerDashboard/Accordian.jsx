import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import ReviewForm from "../ReviewForm";

const BooksAccordion = ({ data, toBeReviewed }) => (
  <Accordion allowToggle>
    {data.map((book, index) => (
      <AccordionItem
        key={index}
        className="mb-2 border border-black rounded-lg"
      >
        <h2>
          <AccordionButton className="bg-gray-200 rounded-lg">
            <Box as="span" flex="1" textAlign="left">
              {book.name}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="text-left">
          <p>Author: {book.name}</p>
          <p className="mb-4">Description: {book.desc}</p>
          {!toBeReviewed ? (
            <Link href={`/book/${book.id}`} >
              <Button className="font-medium text-xl">
              Preview Book
              </Button>
            </Link>
          ) : (
            <ReviewForm id={book._id}  bookName={book.name} />
          )}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

const Accordian = (id) => {
  const [booksToDisplay, setBooksToDisplay] = useState([]);

  let data1 = [
    {
      name: "Ayurvedic Healing Guide",
      desc: "Explore the ancient wisdom of Ayurveda for holistic healing and well-being.",
      id: "abc123",
      thumb: "http://example.com/thumb1.jpg",
      publicRating: 4.5,
    },
    {
      name: "Ayurvedic Recipes for Vitality",
      desc: "Discover nourishing recipes based on Ayurvedic principles to boost your energy.",
      id: "def456",
      thumb: "http://example.com/thumb2.jpg",
      publicRating: 4.2,
    },
    {
      name: "Ayurvedic Beauty Rituals",
      desc: "Unlock the secrets of Ayurvedic beauty practices for radiant and glowing skin.",
      id: "xyz789",
      thumb: "http://example.com/thumb3.jpg",
      publicRating: 4.7,
    },
    {
      name: "Ayurvedic Yoga for Balance",
      desc: "Integrate Ayurveda and Yoga for a balanced and harmonious life.",
      id: "ghi321",
      thumb: "http://example.com/thumb4.jpg",
      publicRating: 4.8,
    },
    {
      name: "Ayurvedic Herbal Remedies",
      desc: "Learn about powerful herbal remedies from Ayurveda to support your health.",
      id: "jkl987",
      thumb: "http://example.com/thumb5.jpg",
      publicRating: 4.4,
    },
  ];
  

  let data2 = [
    {
      name: "Ayurvedic Healing Guide",
      desc: "Explore the ancient wisdom of Ayurveda for holistic healing and well-being.",
      id: "abc123",
      thumb: "http://example.com/thumb1.jpg",
      publicRating: 4.5,
    },
    {
      name: "Ayurvedic Recipes for Vitality",
      desc: "Discover nourishing recipes based on Ayurvedic principles to boost your energy.",
      id: "def456",
      thumb: "http://example.com/thumb2.jpg",
      publicRating: 4.2,
    },
    {
      name: "Ayurvedic Beauty Rituals",
      desc: "Unlock the secrets of Ayurvedic beauty practices for radiant and glowing skin.",
      id: "xyz789",
      thumb: "http://example.com/thumb3.jpg",
      publicRating: 4.7,
    },
    {
      name: "Ayurvedic Yoga for Balance",
      desc: "Integrate Ayurveda and Yoga for a balanced and harmonious life.",
      id: "ghi321",
      thumb: "http://example.com/thumb4.jpg",
      publicRating: 4.8,
    },
    {
      name: "Ayurvedic Herbal Remedies",
      desc: "Learn about powerful herbal remedies from Ayurveda to support your health.",
      id: "jkl987",
      thumb: "http://example.com/thumb5.jpg",
      publicRating: 4.4,
    },
  ];
  

  const GET_REVIEWER_BOOKS_URL = "http://localhost:5000/reviewer/getBooks";

  const getBooksByReviewerName = async (needle) => {
    try {
      const response = await fetch(GET_REVIEWER_BOOKS_URL);
      const data = await response.json();
      setBooksToDisplay(data);
      return;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    getBooksByReviewerName(id);
  }, []);

  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="green"
      className="mx-10 px-6 py-6 border-2 border-gray-300 rounded-lg"
    >
      <TabList className="overflow-x-auto">
        <Tab>To be Reviewed</Tab>
        <Tab>Reviewed</Tab>
      </TabList>

      <TabPanels className="md:px-12 lg:px-16">
        <TabPanel>
          <h1 className="text-2xl font-semibold mb-6">Books to be Reviewed</h1>
          <BooksAccordion data={data1} toBeReviewed={true} />
        </TabPanel>
        <TabPanel>
          <h1 className="text-2xl font-semibold mb-6">Reviewed Books</h1>
          <BooksAccordion data={data2} toBeReviewed={false} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Accordian;
