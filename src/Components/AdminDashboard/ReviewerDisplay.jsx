import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,Heading
} from "@chakra-ui/react";

const ReviewerDisplay = ({ reviewersToDisplay }) => {
    const [reviewersData, setReviewersData] = useState([]);

    const headers = [
        "Name",
        "Field",
        "Qualification",
        "Reviewed",
        "To Be Reviewed",
    ];
    const propsToDisplay = ["name", "field", "degree"];

    const GET_REVIEWER_BOOKS_URL = "http://localhost:5000/reviewer/getBooks";

    const getBooksByReviewerId = async (reviewerID) => {
        try {
            const response = await fetch(GET_REVIEWER_BOOKS_URL, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: reviewerID }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = reviewersToDisplay.map((reviewer) =>
                    getBooksByReviewerId(reviewer._id)
                );
                const responseAll = await Promise.all(promises);

                const updatedReviewersData = reviewersToDisplay.map(
                    (reviewer, index) => {
                        return {
                            ...reviewer,
                            reviewed: responseAll[index].reviewedBooks,
                            underReview: responseAll[index].tobereviewedBooks,
                        };
                    }
                );

                setReviewersData(updatedReviewersData);
            } catch (error) {
                console.error("Error fetching reviewer books:", error);
            }
        };

        if (reviewersToDisplay.length > 0 && reviewersData.length === 0) {
            fetchData();
        }
    }, [reviewersToDisplay, reviewersData]);

    return (
      <>
       

        {((reviewersToDisplay.length == 0)?<Heading color={"crimson"} fontSize={"x-large"}>No Reviewers Found</Heading>: <TableContainer
          style={{
            paddingBottom: "8rem",
            borderRadius: "8px",
            border: "1px solid grey",
          }}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                {headers.map((header, index) => (
                  <Th
                    className="bg-blue-100 border-r-4"
                    width="10%"
                    key={index}
                  >
                    {header}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {reviewersData.map((rowData, i) => (
                <Tr className={i % 2 === 0 ? "" : "bg-blue-100"} key={i}>
                  {propsToDisplay.map((prop, j) => (
                    <Td
                      key={j}
                      className={`border border-2 py-2 ${
                        j === 0
                          ? "border-white"
                          : "break-all overflow-wrap border-blue-400"
                      }`}
                    >
                      {rowData[prop]}
                    </Td>
                  ))}
                  <Td>
                    <ul>
                      {rowData.reviewed &&
                        rowData.reviewed.map(
                          (item, index) =>
                            item && (
                              <li key={index}>
                                <Link to={`/book/${item._id}`}>
                                  <Button
                                    mb={2}
                                    mr={2}
                                    className="font-medium text-xl hover:bg-blue-400"
                                  >
                                    {item.name}
                                  </Button>
                                </Link>
                              </li>
                            )
                        )}
                    </ul>
                  </Td>
                  <Td>
                    <ul>
                      {rowData.underReview &&
                        rowData.underReview.map(
                          (item, index) =>
                            item && (
                              <li key={index}>
                                <Link to={`/admin/book/${item._id}`}>
                                  <Button
                                    mb={2}
                                    mr={2}
                                    className="font-medium text-xl"
                                  >
                                    {item.name}
                                  </Button>
                                </Link>
                              </li>
                            )
                        )}
                    </ul>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Link to={"/admin/addReviewer"}>
          <Button colorScheme="blue" mt={4}>Add Reviewer</Button>
        </Link>
        </TableContainer>)}
      </>
    );
};

export default ReviewerDisplay;
