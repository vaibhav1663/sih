import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Masonry from "react-layout-masonry";
// import textbox from chakra
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
let API_ROUTE = "http://localhost:5000/books/getBooks";

const BookReviews = () => {
    const [data, setData] = useState([]);
    const [pData, setPData] = useState([]);
    const searchRef = useRef("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_ROUTE);
                const json = await response.json();
                setData(json);
                setPData(json);
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
                                        .includes(
                                            searchRef.current.value.toLowerCase()
                                        );
                                });
                                setData(filteredData);
                            }}
                        />
                    </InputGroup>
                </div>

                <Masonry
                    columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }}
                    gap={16}
                >
                    {data.map((book, index) => {
                        return (
                            <div
                                className="box p-4 mt-3 bg-white rounded-lg shadow-md"
                                key={index}
                            >
                                <div className="flex flex-col md:flex-col">
                                    <div className="flex flex-col justify-center">
                                        <img
                                            src={book.imageLink}
                                            alt="Book Thumbnail"
                                            loading="lazy"
                                            className="w-full rounded-lg shadow-md m-auto"
                                        />
                                        <div className="flex flex-row mt-2">
                                            <svg
                                                className="w-6 h-6 text-yellow-400 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                            </svg>
                                            <span className="text-gray-600 ml-1">
                                                {book.publicRating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-start text-start">
                                        <h1 className="text-2xl font-semibold">
                                            {book.name}
                                        </h1>
                                        <p
                                            style={{
                                                maxHeight: "30vh",
                                                overflowY: "scroll",
                                            }}
                                            className="text-gray-600 mt-2"
                                        >
                                            {book.desc}
                                        </p>
                                        <a
                                            href={"/book/" + book._id}
                                            className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md shadow-blue-300/50 hover:bg-blue-600"
                                        >
                                            Read Review
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Masonry>
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
                                        .includes(
                                            searchRef.current.value.toLowerCase()
                                        );
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
