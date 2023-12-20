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
import { toast } from "react-toastify";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StatusCards from "../AdminDashboard/StatusCards";
import ReviewForm from "../ReviewForm";
import PieChart from "./PieChart";

const BooksAccordion = ({ data, toBeReviewed, reviewerID }) => (
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
            <Link href={`/book/${book._id}`}>
              <Button className="font-medium text-xl" colorScheme="blue">Preview Book</Button>
            </Link>
          ) : (
            <ReviewForm
              id={book._id}
              reviewerid={reviewerID}
              bookName={book.name}
            />
          )}
        </AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

const Accordian = ({ reviewerID }) => {
  const [toBeReviewed, setToBeReviewed] = useState([]);
  const [reviewed, setReviewed] = useState([]);
  const [graphData, setGraphData] = useState([{"label":"Unreviewed", "value":null},{"label":"Reviewed","value":null}]);

  const GET_REVIEWER_BOOKS_URL = "http://localhost:5000/reviewer/getBooks";
  let TOAST_ON = false;
  const getBooksByReviewerId = async () => {
    try {
      const response = await fetch(GET_REVIEWER_BOOKS_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ _id: reviewerID }),
      });
      const data = await response.json();
      console.log(">>>>>>>>>>>>>>", reviewerID);
      console.log(">>>>>>>>>>>>>>", data);
      if ("error" in data) {
        throw new Error(data.error);
      }
      setToBeReviewed(data.tobereviewedBooks);
      setReviewed(data.reviewedBooks);

      return;
    } catch (error) {
      if (!TOAST_ON) toast.error(error.message);
      TOAST_ON = true;

      console.log("Error fetching books:", error);
    }
  };
  useEffect(() => {
    getBooksByReviewerId();
  }, []);
  console.log({ toBeReviewed, reviewed });


  useEffect(() => {
    setGraphData((prevGraphData) => {
      const unreviewedData = {
        label: 'Unreviewed',
        value: toBeReviewed.length,
      };
  
      const reviewedData = {
        label: 'Reviewed',
        value: reviewed.length,
      };
  
      // Replace or add logic as needed to update graphData
      const updatedGraphData = prevGraphData.map((d) => {
        if (d.label === 'Unreviewed') {
          return unreviewedData;
        }
        if (d.label === 'Reviewed') {
          return reviewedData;
        }
        return d;
      });
  
      return updatedGraphData;
    });
  }, [toBeReviewed, reviewed]);
  console.log({graphData})

  return (
    <>
    <Tabs
      variant="soft-rounded"
      colorScheme="blue"
      className="mx-10 px-6 py-6 border-2 border-gray-300 rounded-lg"
    >
      <TabList className="overflow-x-auto">
        <Tab>To be Reviewed</Tab>
        <Tab>Reviewed</Tab>
        <Tab>Review Status</Tab>
      </TabList>

      <TabPanels className="md:px-2 lg:px-2">
        <TabPanel>
          <h1 className="text-2xl font-semibold mb-6">Books to be Reviewed</h1>
          <BooksAccordion
            data={toBeReviewed}
            toBeReviewed={true}
            reviewerID={reviewerID}
          />
          <StatusCards data={toBeReviewed} admin={false} ></StatusCards>
        </TabPanel>
        <TabPanel>
          <h1 className="text-2xl font-semibold mb-6">Reviewed Books</h1>
          <BooksAccordion
            data={reviewed}
            toBeReviewed={false}
            reviewerID={reviewerID}
          />
          <StatusCards data={reviewed} admin={false} ></StatusCards>
        </TabPanel>
        <TabPanel>
        <h2 className="text-2xl">Total Review Status</h2>
        <div className="piechart">
          <PieChart data={graphData}
            width={500}
            height={400}
            innerRadius={100}
            outerRadius={200}/>
        </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
  );
};

export default Accordian;
