import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  TableContainer,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";

const GET_REVIEWERS_URL = "http://localhost:5000/admin/getReviewers";




const AdminDashboard = () => {

  const [reviewersToDisplay, setReviewersToDisplay] = useState([])
  const getReviewers = async (needle) => {
    try {
      const response = await fetch(GET_REVIEWERS_URL);
      const data = await response.json();
      setReviewersToDisplay(data)
      return ;
    } catch (error) {
      console.error("Error fetching reviewers:", error);
    }
  };
  useEffect(() => {
    getReviewers()
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

  const header1 = ["Book Name", "Book Desc","Reviewer 1","Reviewer 2","Reviewer 3"]
  const Data = [{"bookId":1,"name":"Payal"},{"bookId":2,"name":"Yash"}] //fetch books to be reviewed data here so admin can allocate
  
  const tableData = Data.map(({ bookId, name }) => [bookId, name]);

  const initialReviewerData = Data.map(item => ({
    bookId: item.bookId,
    reviewer1: null,
    reviewer2: null,
    reviewer3: null,
  }));

  const [reviewerData, setReviewerData] = useState(initialReviewerData);

  const handleReviewer = (bid, value, id) => {
    setReviewerData(prevReviewerData => {
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

  console.log(reviewerData);   //reviwerData is array of objects containing bookId and three respective reviwers (no. of elements same as Data)

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <>
      <Navbar page="admin" />

      <div className="p-4 box text-center">
        <h1 className="mt-24 font-bold text-4xl">Admin Dashboard</h1>

        <div className="flex mt-16 ">
          <div className="w-1/4">
            <h1 className="mb-4 font-semibold text-2xl">Available Reviewers</h1>
            <Accordion allowToggle>
              {reviewersToDisplay.map((reviewer) => (
                <AccordionItem
                  key={reviewer.id}
                  className="mb-2 border border-black rounded-lg"
                >
                  <h2>
                    <AccordionButton className="bg-gray-200 rounded-lg">
                      <Box as="span" flex="1" textAlign="left">
                        {reviewer.name}
                      </Box>
                      <Box
                        as="span"
                        className="text-md cursor-pointer ml-2"
                        onClick={() => handleCopyId(reviewer.id)}
                      >
                        <FaRegCopy />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="text-left">
                    Specialisation : {reviewer.specialisation}
                    <br />
                    College : {reviewer.college}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-3/4">
            <h1 className="mb-4 font-semibold text-2xl">Books</h1>
            <TableContainer>
              <Table variant="simple" className="ml-16 border border-2 rounded-lg">
                <Thead>
                  <Tr>
                    {header1.map((x, i) => (
                      <Th key={i} width="20%"> {/* Set a fixed width or use responsive values like "20%" */}
                        {x}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData.map((rowData, i) => (
                    <Tr key={i}>
                      {rowData.map((col, j) => (
                        <Td key={j} width="20%"> {/* Set a fixed width or use responsive values like "20%" */}
                          {col}
                        </Td>
                      ))}
                      <Td key={2} width="20%">
                        <Input placeholder="Reviewer 1 Id" onChange={(e)=>handleReviewer(i,e.target.value,0)}></Input>
                      </Td>
                      <Td key={3} width="20%">
                        <Input placeholder="Reviewer 2 Id"onChange={(e)=>handleReviewer(i,e.target.value,1)}></Input>
                      </Td>
                      <Td key={4} width="20%">
                        <Input placeholder="Reviewer 3 Id"onChange={(e)=>handleReviewer(i,e.target.value,2)}></Input>
                      </Td>
                      <Td>{i}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
