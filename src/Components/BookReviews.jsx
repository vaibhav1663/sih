import React from "react";
import Navbar from "./Navbar";

let data = [
    {
        name: "Book Name 1",
        desc: "Book Description 1",
        id: "abc",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
    {
        name: "Book Name 2",
        desc: "Book Description 2",
        id: "def",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
    {
        name: "Book Name 3",
        desc: "Book Description 3",
        id: "xyz",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
    {
        name: "Book Name 4",
        desc: "Book Description 4",
        id: "xyz",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
    {
        name: "Book Name 5",
        desc: "Book Description 5",
        id: "xyz",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
    {
        name: "Book Name 6",
        desc: "Book Description 6",
        id: "xyz",
        thumb: "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
        publicRating: 4.5,
    },
];

const BookReviews = () => {
    return (
        <>
        <Navbar page="book-reviews" />
            <div className="box pt-16 p-4 text-center bg-gray-100 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data.map((book, index) => {
                    return (
                        <div
                            className="box p-4 mt-3 bg-white rounded-lg shadow-md"
                            key={index}
                        >
                            <div className="flex flex-col md:flex-col">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src={book.thumb}
                                        alt="Book Thumbnail"
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
                                <div className="flex flex-col justify-center items-start">
                                    <h1 className="text-2xl font-semibold">
                                        {book.name}
                                    </h1>
                                    <p className="text-gray-600 mt-2">
                                        {book.desc}
                                    </p>
                                    <a
                                        href={"/book/" + book.id}
                                        className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md shadow-blue-300/50 hover:bg-blue-600"
                                    >
                                        Read Review
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BookReviews;
