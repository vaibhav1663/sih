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
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from 'react';


const GET_AUTHOR_BOOKS_URL = "http://localhost:5000/author/getBooks";
const match = (a, b) => {
  return a.split(" ").some((word1) => {
    return b.split(" ").some((word2) => {
      return word1.indexOf(word2) == 0;
    });
  });
};
const filterByName = (book, query) =>
  match(String(book.recomendedBy).toLowerCase(), query);

function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid Date object");
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
const DataTable = (id) => {
  const [booksToDisplay, setBooksToDisplay] = useState([])
  const getBooksByTeacherName = async (needle) => {
    try {
      const response = await fetch(GET_AUTHOR_BOOKS_URL);
      const data = await response.json();
      setBooksToDisplay(data)
      return ;
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    getBooksByTeacherName(id)
 }, []);
  const header = ["Book Title","Author", "Submission Date",  "Status: underReview"];
  const propsToDisplay = ["name","author","date", "underReview"];
  console.log(">>",booksToDisplay);
  const tableData = (booksToDisplay).map((dataBook) =>
    propsToDisplay.map((x) => String(dataBook[x]))
  );
  console.log('tableData :>> ', tableData);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Book Review Status Table</TableCaption>
        <Thead>
          <Tr>
            {header.map((x,i) => (
              <Th key={i}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((rowData, i) => {
            return (
              <Tr key={i}>
                {rowData.map((col, j) => (
                  
                  <Td key={j}>{(j==2)?formatDate(new Date(col)):col}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
