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
import {toast} from "react-toastify"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import ReviewerAllocationTable from "./AdminDashboard/table";
import ReviewerDisplay from "./AdminDashboard/ReviewerDisplay";
const GET_REVIEWERS_URL = "http://localhost:5000/admin/getReviewers";
const GET_BOOKS_TO_REVIEW_URL =
  "http://localhost:5000/admin/getRecommendations";
const GET_BOOKS = "http://localhost:5000/books/getBooks";
const AdminDashboard = () => {
  const [reviewersToDisplay, setReviewersToDisplay] = useState([]);
  const [books, setBooks] = useState([]);
  const [booksToBeMapped, setBooksToBeMapped] = useState([]);
  const getReviewers = async (needle) => {
    try {
      const response = await fetch(GET_REVIEWERS_URL);
      const data = await response.json();
      if("error" in data) {
        toast.error(data.error);
        return
      }
      setReviewersToDisplay(data);
      return;
    } catch (error) {
      console.error("Error fetching reviewers:", error);
    }
  };

  const getBooks = async (needle) => {
    try {
      const response = await fetch(GET_BOOKS  );
      const data = await response.json();
      data && setBooks(data);
      return;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    getReviewers();
    getBooks();
  }, []);
  function convertUrl(originalUrl) {
    // Extract the book ID from the original URL
    const bookIdRegex = /id=([^&]+)/;
    const match = originalUrl.match(bookIdRegex);
    const bookId = match ? match[1] : null;

    if (bookId) {
      // Create a new URL with the extracted book ID
      const newUrl = `https://books.google.com/books/publisher/content?id=${bookId}&printsec=frontcover&img=1&zoom=3&edge=curl`;
      return newUrl;
    } else {
      console.log("Unable to extract book ID from the URL");
      return originalUrl;
    }
  }
  useEffect(() => {
    let arr = books;
    arr = arr.map((item) => {
      return {
        name: item.name,
        _id: item._id,
        imageLink: convertUrl(item.imageLink),
        author: "Anonymous",
        received: item.reviewerResponse.length,
        allocated: item.reviewerAlloted.length ? true : false,
      };
    });
    // setBooks(arr);
    setBooksToBeMapped(arr);
  }, [books]);

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

  

  return (
    <>
      <Navbar page="admin" />

      <div className="p-4 box text-center">
        <h1 className="mt-4 font-bold text-4xl mb-8">Admin Dashboard</h1>
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          className="mx-2 md:mx-6 lg:mx-10 py-6 border-2 border-gray-300 rounded-md"
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

              <div className="mt-4 flex flex-col lg:flex-row">
                <div className="w-full">
                  <ReviewerAllocationTable handleReviewer={handleReviewer} />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <h1 className="text-2xl font-semibold">Review Status</h1>
              <StatusCards data={booksToBeMapped} admin={true}/>
            </TabPanel>

            <TabPanel>
              <h1 className="text-2xl font-semibold mb-6">Reviewers</h1>

              <div className="mt-4 flex flex-col lg:flex-row">
                <div className="w-full">
                <ReviewerDisplay reviewersToDisplay={reviewersToDisplay} />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};
export default AdminDashboard;
