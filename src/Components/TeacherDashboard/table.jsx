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
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";

const GET_AUTHOR_BOOKS_URL = "http://localhost:5000/author/getBooks";
const match = (a, b) => {
    console.log({ a, b });  
    return a.split(" ").some((word1) => {
        return b.split(" ").some((word2) => {
            return word1.indexOf(word2) == 0;
        });
    });
};

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
const DataTable = ({ recommenderID }) => {
    const [booksToDisplay, setBooksToDisplay] = useState([]);
    
    const getBooksByTeacherName = async (u) => {
        try {
            const response = await fetch(GET_AUTHOR_BOOKS_URL);
            const data = await response.json();
            setBooksToDisplay(
                data.filter((x) => {
                    return x.recomendedBy == u;
                })
            );
            return;
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBooksByTeacherName(String(recommenderID));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [recommenderID]);

    const handleChart=()=>{
        ;
    }

    const header = [
        "Book Title",
        "Submission Date",
        "Status: underReview",
    ];
    const propsToDisplay = ["name", "date", "underReview"];
    console.log(">>", booksToDisplay);
    const tableData = booksToDisplay.map((dataBook) =>
        propsToDisplay.map((x) => String(dataBook[x]))
    );
    console.log("tableData :>> ", tableData);
    return (
        <TableContainer style={{  borderRadius: "8px", border: "1px solid gray" }}>
        <Table variant="simple">
                <Thead>
                    <Tr>
                        {header.map((x, i) => (
                             <Th
                             className="bg-blue-300 border-r-4 text-gray-800"
                             width="10%"
                             key={i}
                         >{x}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((rowData, i) => {
                        return (
                            <>
                           <Tr key={i} className={i % 2 === 0 ? '' : 'bg-blue-100'}>
                                {rowData.map((col, j) => (
                                    <Td
                                    key={j}
                                    // border="2px solid white"
                                    style={{ maxWidth: '400px', textWrap: "balance" }}
                                    className={`border border-2 py-2 ${j === 0 ? 'border-white' : 'break-all overflow-wrap border-blue-400'}`}
                                  >
                                    {j === 1
                                      ? formatDate(new Date(col))
                                      : col.length < 40
                                      ? col
                                      : (
                                          <>
                                            {col}
                                          </>
                                        )}
                                  </Td>
                                  
                                ))}
                                { rowData[3]=="true" ? <Td><Button
                                onClick={handleChart}
                                colorScheme="blue">
                                More
                                </Button></Td> :<></>}
                            </Tr>
                            </>
                        );
                    })}
                </Tbody>
                <Tfoot></Tfoot>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
