import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useEffect } from "react";
import  Search  from "./Search";

const GET_BOOKS_TO_REVIEW_URL =
  "http://localhost:5000/admin/getRecommendations";
const ADD_BOOKS_TO_REVIEW_URL = "http://localhost:5000/admin/allocate";
const GET_REVIEWERS_URL = "http://localhost:5000/admin/getReviewers";

const SuccessModal = ({ isOpen, onClose}) => (
  <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay />

      <AlertDialogContent>
          <AlertDialogHeader
              fontSize="2xl"
              fontWeight="bold"
              mx="auto"
              mt={2}
          >
              Reviewer Allocation Successful
          </AlertDialogHeader>

          {/* <AlertDialogCloseButton /> */}

          <AlertDialogBody textAlign="center">
              Reviewers Allocated !
          </AlertDialogBody>
      </AlertDialogContent>
  </AlertDialog>
);

function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid Date object");
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
const DataTable = ({ handleReviewer }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const [reviewersToDisplay, setReviewersToDisplay] = useState([]);
  const getReviewers = async (needle) => {
    try {
      const response = await fetch(GET_REVIEWERS_URL);
      const data = await response.json();
      setReviewersToDisplay(data);
      return;
    } catch (error) {
      console.error("Error fetching reviewers:", error);
    }
  };
  useEffect(() => {
    getReviewers();
  }, []);

  const [booksToDisplay, setBooksToDisplay] = useState([]);

  const getBooks = async (u) => {
    try {
      const response = await fetch(GET_BOOKS_TO_REVIEW_URL);
      const data = await response.json();
      setBooksToDisplay(data);
      return;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };



  const validate = (bookID, reviewers) => {
    if (bookID && reviewers.length) return true;
    return false;
  };
  const handleAllocateReviewer = async function (e, bookID, reviewers) {
    e.preventDefault();
    // required data format:
    // // const {
    //     bookID,
    //      reviewers // Array of reviewer IDs
    //   }

    // //
    try {
      const isValidated = validate(bookID, reviewers);
      if (!isValidated) throw new Error("Invalid data format");

      const requestData = {
        id:bookID,
        reviewers,
      };
      submitData(requestData, (res) => {
        console.log(">>>", res);
        if(res.code===201){
          setSuccessModalOpen(true);
        }
      });
    } catch (e) {
      console.log(">>>", e);
    }
  };
  const submitData = async (data, callback) => {
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };

    const responseDT = await fetch(ADD_BOOKS_TO_REVIEW_URL, requestOptions);

    const responseJSON = await responseDT.json();
    console.log(responseJSON);
    callback(responseJSON);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBooks();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const header = [
    "Book Title",
    "Author",
    "Reviewer 1",
    "Reviewer 2",
    "Reviewer 3",
  ];
  const propsToDisplay = ["name", "author"];

  console.log(">>", booksToDisplay);
  const tableData = booksToDisplay.map((dataBook) =>
    propsToDisplay.map((x) => String(dataBook[x]))
  );

  console.log("tableData :>> ", tableData);

  const [reviewersData, setReviewersData] = useState([]);

  useEffect(() => {
    // Set the initial state using booksToDisplay only when reviewersData is empty
    if (reviewersData.length === 0) {
      setReviewersData(booksToDisplay.map((book) => ({ bookId: book._id, reviewers: [null, null, null] })));
    }
  }, [booksToDisplay, reviewersData]);

  const getBookIdByName=(bookName)=> {
    const foundBook = booksToDisplay.find(book => book.name === bookName);
    return foundBook._id;
  }

  // Function to update an element in the reviewers array based on bookId
  const updateReviewerData = (bookname, value, index) => {
    const bookId = getBookIdByName(bookname);
    console.log(bookId);
    setReviewersData((prevReviewersData) =>
      prevReviewersData.map((item) =>
        item.bookId === bookId ? { ...item, reviewers: item.reviewers.map((el, i) => (i === index ? value : el)) } : item
      )
    );
  };
  const getReviewersByBookId = (bookID) => {
    const data = reviewersData.find(reviewData=>reviewData.bookId===bookID);
    return data.reviewers;
  }

  return (
    <>
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {header.map((x, i) => (
              <Th key={i}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        {tableData.map((rowData, i) => (
          <Tr key={i}>
            {rowData.map((col, j) => (
              <Td key={j} width="20%">
                {" "}
                {/* Set a fixed width or use responsive values like "20%" */}
                {col}
              </Td>
            ))}
            <Td key={2} width="20%">
              <Search reviewers={reviewersToDisplay} onChange={updateReviewerData} bookname={rowData[0]} r={0} ></Search>
            </Td>
            <Td key={3} width="20%">
            <Search reviewers={reviewersToDisplay} onChange={updateReviewerData} bookname={rowData[0]} r={1} ></Search>
            </Td>
            <Td key={4} width="20%">
            <Search reviewers={reviewersToDisplay} onChange={updateReviewerData} bookname={rowData[0]} r={2} ></Search>
            </Td>
            <Td>
              {" "}
              <Button
                key={5}
                onClick={(e) => {
                  const bookID = getBookIdByName(rowData[0]);
                  const reviewers = getReviewersByBookId(bookID);
                  console.log(bookID, reviewers);
                  handleAllocateReviewer(e, bookID, reviewers);
                }}
                colorScheme="blue"
              >
                Allocate Reviewer
              </Button>
            </Td>
          </Tr>
        ))}
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
    <SuccessModal
          isOpen={successModalOpen}
          onClose={closeSuccessModal}
      />
    </>
  );
};

export default DataTable;
