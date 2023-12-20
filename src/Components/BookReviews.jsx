import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Masonry from "react-layout-masonry";
// import textbox from chakra
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import StatusCards from "./AdminDashboard/StatusCards";
import { Link } from "react-router-dom";
let API_ROUTE = "http://localhost:5000/books/getBooks";
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

const BookReviews = () => {
  const [data, setData] = useState([]);
  const [pData, setPData] = useState([]);
  const searchRef = useRef("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTE);
        const json = await response.json()
        const nonZeroScoreBooks = json.filter((book) => book.totalScore!=0)
        
        setData(nonZeroScoreBooks);
        setPData(nonZeroScoreBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (data.length > 0) {
    return (
      <>
        <Navbar page="book-reviews" />
        <div className="p-2">
          <InputGroup className="max-w-screen-xl m-auto">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="black" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Books.."
              ref={searchRef}
              onChange={() => {
                if (searchRef.current.value === "") {
                  setData(pData);
                  return;
                }
                setData(pData);
                const filteredData = data.filter((book) => {
                  return book.name
                    .toLowerCase()
                    .includes(searchRef.current.value.toLowerCase());
                });
                setData(filteredData);
              }}
            />
          </InputGroup>
        </div>


        <StatusCards data={data} tags={false} />

      </>
    );
  } else {
    return (
      <>
        <Navbar page="book-reviews" />
        <div className="p-2">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="black" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Books.."
              ref={searchRef}
              onChange={() => {
                if (searchRef.current.value === "") {
                  setData(pData);
                  return;
                }
                setData(pData);
                const filteredData = data.filter((book) => {
                  return book.name
                    .toLowerCase()
                    .includes(searchRef.current.value.toLowerCase());
                });
                setData(filteredData);
              }}
            />
          </InputGroup>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-semibold">No Book Found :(</h1>
          <Link to={"/teacher"}>
            <button className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md shadow-blue-500/50 hover:bg-blue-600">
              Are you a teacher? Submit this book for review!
            </button>
          </Link>
        </div>
      </>
    );
  }
};

export default BookReviews;
