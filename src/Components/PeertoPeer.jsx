import React, { useState, useEffect } from "react";
import Search from "./AdminDashboard/Search";
import StatusCards from "./AdminDashboard/StatusCards";
import BarChart from "./TeacherDashboard/BarChart";
import { HStack, Center, Button,Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

let COMPARE_BOOKS_URL = "http://localhost:5000/books/compareBooksById";
let REVIEWED_BOOK_URL = "http://localhost:5000/books/getReviewedBooks"


const PeerToPeer = () => {
    const [compare, setCompare] = useState(false)
    const [books, setBooks] = useState([null,null]);
    const [bookname, setBookNames] = useState([null,null]);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(REVIEWED_BOOK_URL);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    console.log(data);

    const handleCompare = () => {
        setCompare(true);

            const giveCompare = async () => {
            const response = await fetch(
                `http://localhost:5000/books/compareBooksById/`,
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                   id1:books[0],
                   id2:books[1],

                }),
                }
            );
            const responseJSON = await response.json()
            console.log({responseJSON})
            setData1(responseJSON)
            };
            giveCompare();
    }

    const handleChange = (bname,value, r) => {
        setBooks((prevBooks) => {
            const updatedBooks = [...prevBooks];
            if (r >= 0 && r < updatedBooks.length) {
                updatedBooks[r] = value;
            }
            return updatedBooks;
        });
    };

    

  console.log(">b>", books);

  function filterData(data, books) {
    if (!Array.isArray(books) || books.every((id) => id === null)) {
      // If books is not an array or all elements are null, return the original data
      return data;
    }

    // Filter data based on the presence of non-null values in the books array
    const filteredData = data.filter((item) => {
      // Replace 'id' with the actual property you want to compare
      return !books.includes(item._id);
    });

    return filteredData;
  }


  function getBookName(bookId) {
    const book = data.find((d) => d._id === bookId);
    return book ? book.name : null;
  }

  

  return (
    <>
      <Navbar page="peer-to-peer" />

      <div className="p-4 box text-center">
        <h1 className="mt-4 font-bold text-4xl m4-8">Compare Books</h1>
        <Center>
          <Stack>
          <HStack>
            <Search
              reviewers={filterData(data, books)}
              onChange={handleChange}
              bookname=""            
              r="0"
              placeholder="Select Book"
            ></Search>
            <img src="/img/vsFinal.png" className="w-12 h-24 mx-4" alt="Flowbite Logo" />
            <Search
              reviewers={filterData(data, books)}
              onChange={handleChange}
              bookname=""            
              r="1"
              placeholder="Select Book"
            ></Search>
            </HStack>
            <Button colorScheme="blue" onClick={handleCompare}>
                Compare
            </Button>
            </Stack>
          </Center>
        </div>
        <div>
            {compare?<>
            <BarChart books={data1} bname1={getBookName(books[0])} bname2={getBookName(books[1])}/>
            </>:<></>}
        </div>
        <div>
            <StatusCards data={data} admin={false}></StatusCards>
        </div>
    </>)
}

export default PeerToPeer;
