import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Book = () => {
    const { id } = useParams();
    // fetch data from mongo
    const [book, setBook] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/admin/getBookById`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: id,
                        }),
                    }
                );
                let json = await response.json();
                setBook(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (Object.keys(book).length === 0) {
        return (
            <>
                <Navbar page="book-reviews" />
                <div className="p-2 flex flex-row justify-center items-center w-full">
                    <span className="text-2xl font-semibold">Loading ...</span>
                </div>
            </>
        );
    } else if (book.error) {
        return (
            <>
                <Navbar page="book-reviews" />
                <div className="p-2 flex flex-row justify-center items-center w-full">
                    <span className="text-2xl font-semibold">{book.error}</span>
                </div>
            </>
        );
    }
    return (
        <>
            <Navbar page="book-reviews" />
            <div className="box p-4 bg-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                        <img
                            className="w-full"
                            src={book.imageLink}
                            alt={book.name}
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-2/3">
                        <h1 className="text-2xl font-semibold">{book.name}</h1>
                        <p className="text-gray-700 mt-1">{book.desc}</p>
                        <div className="flex flex-col gap-2">
                            <div className="links flex flex-row text-center gap-4">
                                <a
                                    href={book.previewLink}
                                    target="_blank"
                                    className="p-2 bg-yellow-500 text-white rounded-lg shadow-md shadow-yellow-300/50 hover:bg-yellow-400 w-full"
                                >
                                    Preview
                                </a>
                                <a
                                    href={book.buyLink}
                                    target="_blank"
                                    className="p-2 bg-blue-700 text-white rounded-lg shadow-md shadow-blue-300/50 hover:bg-blue-600 w-full"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;
