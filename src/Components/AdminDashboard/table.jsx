import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";

const GET_BOOKS_TO_REVIEW_URL =
  "http://localhost:5000/admin/getRecommendations";
const ADD_BOOKS_TO_REVIEW_URL = "http://localhost:5000/admin/allocate";

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
        bookID,
        reviewers,
      };
      submitData(requestData, (res) => {
        console.log(">>>", res);
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
  return (
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
              <Input
                placeholder="Reviewer 1 Id"
                onChange={(e) => handleReviewer(i, e.target.value, 0)}
              ></Input>
            </Td>
            <Td key={3} width="20%">
              <Input
                placeholder="Reviewer 2 Id"
                onChange={(e) => handleReviewer(i, e.target.value, 1)}
              ></Input>
            </Td>
            <Td key={4} width="20%">
              <Input
                placeholder="Reviewer 3 Id"
                onChange={(e) => handleReviewer(i, e.target.value, 2)}
              ></Input>
            </Td>
            <Td>
              {" "}
              <Button
                key={5}
                onClick={(e) => {
                  const reviewers = null;
                  const bookID = null;
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
  );
};

export default DataTable;
