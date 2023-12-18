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

  // const [reviewers, setReviewers] = useState([]);  // fetch available reviwers data here

  // useEffect(() => {
  //   setReviewers([
  //     {
  //       id: "asf3421",
  //       name: "Dummy Name1",
  //       specialisation: "Unani",
  //       college: "COEP",
  //     },
  //     {
  //       id: "ahkk13421",
  //       name: "Dummy Name2",
  //       specialisation: "Unani",
  //       college: "COEP",
  //     },
  //     {
  //       id: "hdkk13421",
  //       name: "Dummy Name3",
  //       specialisation: "Unani",
  //       college: "COEP",
  //     },
  //     {
  //       id: "ah3421",
  //       name: "Dummy Name4",
  //       specialisation: "Unani",
  //       college: "COEP",
  //     },
  //     {
  //       id: "kk13421",
  //       name: "Dummy Name5",
  //       specialisation: "Unani",
  //       college: "COEP",
  //     },
  //   ]);
  // }, []);

  let dataAyurveda = [
    {
      name: "Book Name 1",
      id: "abc",
      thumb:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 1",
      received: 2,
      allocated: true,
    },
    {
      name: "Book Name 2",
      id: "def",
      thumb:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 2",
      received: 0,
      allocated: false,
    },
    {
      name: "Book Name 3",
      id: "xyz",
      thumb:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 3",
      received: 3,
      allocated: true,
    },
    {
      name: "Book Name 4",
      id: "xyz",
      thumb:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 4",
      received: 0,
      allocated: false,
    },
    {
      name: "Book Name 5",
      id: "xyz",
      thumb:
        "https://m.media-amazon.com/images/I/51CFkZG8UjL._SX342_SY445_.jpg",
      author: "Author 5",
      received: 1,
      allocated: true,
    },
  ];
  //review cards data


  const dataReviewer = [
    {
      name: "John Doe",
      field: "Software Development",
      qualification: "Bachelor's in Computer Science",
      reviewed: ["Reviewer A", "Reviewer B"],
      underReview: ["Reviewer C", "Reviewer D"],
    },
    {
      name: "Jane Smith",
      field: "Data Science",
      qualification: "Master's in Statistics",
      reviewed: ["Reviewer X", "Reviewer Y"],
      underReview: ["Reviewer Z"],
    },
    {
      name: "Alice Johnson",
      field: "UX/UI Design",
      qualification: "Bachelor's in Design",
      reviewed: ["Designer P", "Designer Q"],
      underReview: ["Designer R", "Designer S"],
    },
    {
      name: "Bob Williams",
      field: "Marketing",
      qualification: "Master's in Business Administration",
      reviewed: ["Marketer M", "Marketer N"],
      underReview: ["Marketer O"],
    },
  
  ];

  
  const header1 = [
    "Book Name",
    "Book Desc",
    "Reviewer 1",
    "Reviewer 2",
    "Reviewer 3",
  ];
  const Data = [
    { bookId: 1, name: "Payal" },
    { bookId: 2, name: "Yash" },
  ]; //fetch books to be reviewed data here so admin can allocate

  const tableData = Data.map(({ bookId, name }) => [bookId, name]);

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
              <StatusCards data={dataAyurveda} />
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
