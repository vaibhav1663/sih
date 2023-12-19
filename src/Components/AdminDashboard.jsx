import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  Box,
} from "@chakra-ui/react";
import StatusCards from "./AdminDashboard/StatusCards";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import ReviewerAllocationTable from "./AdminDashboard/table";
import ReviewerDisplay from "./AdminDashboard/ReviewerDisplay";
const GET_REVIEWERS_URL = "http://localhost:5000/admin/getReviewers";
const GET_BOOKS_TO_REVIEW_URL =
  "http://localhost:5000/admin/getRecommendations";

const AdminDashboard = () => {
  const [reviewersToDisplay, setReviewersToDisplay] = useState([]);
  const getReviewers = async (needle) => {
    try {
      const response = await fetch(GET_REVIEWERS_URL);
      const data = await response.json();
      setReviewersToDisplay(data);
      console.log("set :", data);
      return;
    } catch (error) {
      console.error("Error fetching reviewers:", error);
    }
  };
  useEffect(() => {
    getReviewers();
  }, []);

  let dataAyurveda = [
    {
      name: "Book Name 1",
      _id: "abc",
      imageLink:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 1",
      received: 2,
      allocated: true,
    },
    {
      name: "Book Name 2",
      _id: "def",
      imageLink:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 2",
      received: 0,
      allocated: false,
    },
    {
      name: "Book Name 3",
      _id: "xyz",
      imageLink:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 3",
      received: 3,
      allocated: true,
    },
    {
      name: "Book Name 4",
      _id: "xyz",
      imageLink:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 4",
      received: 0,
      allocated: false,
    },
    {
      name: "Book Name 5",
      _id: "xyz",
      imageLink:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 5",
      received: 1,
      allocated: true,
    },
  ];
  //review cards data

  const Data = [
    { bookId: 1, name: "Payal" },
    { bookId: 2, name: "Yash" },
  ]; //fetch books to be reviewed data here so admin can allocate

  const initialReviewerData = Data.map((item) => ({
    bookId: item.bookId,
    reviewer1: null,
    reviewer2: null,
    reviewer3: null,
  }));

  const [reviewerData, setReviewerData] = useState(initialReviewerData);
  const handleReviewer = (bid, value, id) => {
    setReviewerData((prevReviewerData) => {
      const newReviewerData = [...prevReviewerData];
      const reviewerData = { ...newReviewerData[bid] };
      console.log("Triigger");
      console.log({ reviewerData });
      if (id === 0) {
        reviewerData.reviewer1 = value;
      } else if (id === 1) {
        reviewerData.reviewer2 = value;
      } else if (id === 2) {
        reviewerData.reviewer3 = value;
      }
      newReviewerData[bid] = reviewerData;
      return newReviewerData;
    });
  };

  console.log(reviewerData); //reviwerData is array of objects containing bookId and three respective reviwers (no. of elements same as Data)

  const handleCopyId = async (id) => {
    try {
      console.log(id);
      await navigator.clipboard.writeText(id);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Navbar page="admin" />

      <div className="p-4 box text-center">
        <h1 className="mt-8 font-bold text-4xl mb-8">Admin Dashboard</h1>
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          className="mx-2 md:mx-6 lg:mx-10 py-6 border-2 border-gray-300 rounded-lg"
        >
          <TabList className="overflow-x-auto px-6">
            <Tab>Reviewer Allocation</Tab>
            <Tab>Review Status</Tab>
            <Tab>Reviewers</Tab>
          </TabList>

          <Divider className="mt-4 mx-0" borderColor="gray.300" />

          <TabPanels className="">
            <TabPanel>
              <h1 className="text-2xl font-semibold mb-6">
                Reviewer Allocation
              </h1>

              <div className="mt-16 flex flex-col lg:flex-row">
                <div className="w-full">
                  <ReviewerAllocationTable handleReviewer={handleReviewer} />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <h1 className="text-2xl font-semibold mb-6">Review Status</h1>
              <StatusCards data={dataAyurveda} admin={true} />
            </TabPanel>

            <TabPanel>
              <h1 className="text-2xl font-semibold mb-6">Reviewers</h1>
              <div className="w-full">
                <ReviewerDisplay reviewersToDisplay={reviewersToDisplay} />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};
export default AdminDashboard;
