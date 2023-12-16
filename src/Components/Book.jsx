import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
let book = {
    uid: {
        someField: "someValue",
        anotherField: "anotherValue",
    },
    name: "Scientific Basis for Ayurvedic Therapies - Lakshmi Chandra Mishra",
    publicRating: 4.5,
    publicCount: 100,
    reviewerRating: 4.2,
    reviewerCount: 50,
    totalScore: 4.4,
    isRecommended: true,
    desc: "Arguably the oldest form of health care, Ayurveda is often referred to as the 'Mother of All Healing.' Although there has been considerable scientific research done in this area during the last 50 years, the results of that research have not been adequately disseminated.",
    imageLink:
        "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api",
    buyLink:
        "https://play.google.com/store/books/details?id=YXmmDwAAQBAJ&rdid=book-YXmmDwAAQBAJ&rdot=1&source=gbs_api",
    previewLink:
        "http://books.google.co.in/books?id=YXmmDwAAQBAJ&hl=&source=gbs_api",
    reviewer1: {
        H: [true, false, true],
        A: [8, 5, 3, 10, 15],
        B: 20,
        C: [3, 2, 1, 3],
        D: [5, 5, 10, 5, 5, 5, 10, 10, 10, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        E: [5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
        G: [10, 5, 5, 3],
    },
    reviewer2: {
        H: [true, true, true],
        A: [10, 5, 3, 10, 20],
        B: 15,
        C: [4, 3, 2, 3],
        D: [5, 5, 10, 5, 5, 5, 10, 10, 10, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        E: [5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
        G: [10, 5, 5, 3],
    },
    reviewer3: {
        H: [false, true, false],
        A: [8, 5, 3, 10, 15],
        B: 18,
        C: [3, 2, 1, 3],
        D: [5, 5, 10, 5, 5, 5, 10, 10, 10, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        E: [5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
        G: [10, 5, 5, 3],
    },
    users: [
        {
            content: 4,
            appearance: 3,
            overall: 5,
            comment: "Enjoyed reading this book. Well-written.",
        },
        {
            content: 5,
            appearance: 4,
            overall: 4,
            comment: "Great book! Highly recommended.",
        },
        {
            content: 3,
            appearance: 2,
            overall: 3,
            comment: "Average book. Nothing special.",
        },
    ],
};

const Book = () => {
    const { id } = useParams();
    // fetch data from mongo

    const [conRate, setConRate] = useState(0);
    const [appRate, setAppRate] = useState(0);
    const [ovrRate, setOvrRate] = useState(0);
    const [comment, setComment] = useState("");
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    let avgUserRating = {
        content: 0,
        appearance: 0,
        overall: 0,
    };
    book.users.forEach((user) => {
        avgUserRating.content += user.content;
        avgUserRating.appearance += user.appearance;
        avgUserRating.overall += user.overall;
    });
    avgUserRating.content /= book.users.length;
    avgUserRating.appearance /= book.users.length;
    avgUserRating.overall /= book.users.length;
    book.avgUserRating = avgUserRating;

    return (
        <>
            <Navbar page="book" />
            <div className="box p-20 bg-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-1/2">
                        <img
                            className="w-full"
                            src={book.imageLink}
                            alt={book.name}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">{book.name}</h1>
                        <p className="text-gray-700 mt-1">{book.desc}</p>
                        <div className="rating">
                            {book.reviewerRating ? (
                                <div className="flex flex-row mt-2">
                                    <span className="text-gray-600 ml-1 flex">
                                        Reviewer Rating:{" "}
                                        <span className="flex">
                                            <svg
                                                className="w-6 h-6 text-yellow-400 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                            </svg>
                                            <p>
                                                {book.reviewerRating} (
                                                {book.reviewerCount})
                                            </p>
                                        </span>
                                    </span>
                                </div>
                            ) : (
                                <> </>
                            )}
                            {book.publicRating ? (
                                <div className="flex flex-row mt-2">
                                    <span className="text-gray-600 ml-1 flex">
                                        Public Rating:{" "}
                                        <span className="flex">
                                            <svg
                                                className="w-6 h-6 text-yellow-400 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                            </svg>
                                            <p>
                                                {book.publicRating} (
                                                {book.publicCount})
                                            </p>
                                        </span>
                                    </span>
                                </div>
                            ) : (
                                <> </>
                            )}
                        </div>
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
                            <button
                                className="p-2 bg-green-700 text-white rounded-lg shadow-md shadow-green-300/50 hover:bg-green-600 w-full"
                                onClick={() => toggleModal()}
                            >
                                Review this book
                            </button>
                        </div>
                        <div className="publicReview p-2 rounded-lg bg-white shadow-md">
                            <h1 className="text-2xl font-semibold mt-4">
                                Public Reviews
                            </h1>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h1 className="text-xl px-2">
                                        Average User Rating
                                    </h1>
                                    <div className="flex flex-col px-4">
                                        <span>
                                            Content:{" "}
                                            {book.avgUserRating.content}
                                        </span>
                                        <span>
                                            Appearance:{" "}
                                            {book.avgUserRating.appearance}
                                        </span>
                                        <span>
                                            Overall:{" "}
                                            {book.avgUserRating.overall}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl px-2">Comments</h1>
                                    <div className="flex flex-col px-4 gap-2">
                                        {book.users.map((user, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="bg-gray-100 border-4 rounded-md p-1 border-gray-100 border-b-gray-200 border-l-gray-200"
                                                        key={index}
                                                    >
                                                        <p>{user.comment}</p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal ? (
                <div className="modal top-0 absolute w-screen h-screen bg-gray-400 flex justify-center items-center">
                    <div className="modal-content bg-white shadow-md rounded-xl w-1/4">
                        <span
                            className="close-button rounded-full border-black border-2 float-right px-2 m-1 bg-gray-300 cursor-pointer"
                            onClick={() => toggleModal()}
                        >
                            X
                        </span>
                        <div>
                            <form
                                action="/"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="flex flex-col gap-4 p-4">
                                    <h1 className="text-2xl font-semibold">
                                        Review this book
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="content">
                                            Content Rating
                                        </label>
                                        <div className="flex flex-row justify-between items-center">
                                            <input
                                                type="range"
                                                name="content"
                                                id="content"
                                                min="0"
                                                max="5"
                                                defaultValue={0}
                                                onChange={(e) =>
                                                    setConRate(e.target.value)
                                                }
                                                className="p-2 rounded-lg shadow-md"
                                            />
                                            <div className="flex">
                                                <span>{conRate}</span>
                                                <svg
                                                    className="w-6 h-6 text-yellow-400 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="appearance">
                                            Appearance Rating
                                        </label>
                                        <div className="flex flex-row justify-between items-center">
                                            <input
                                                type="range"
                                                name="appearance"
                                                id="appearance"
                                                defaultValue={0}
                                                min="0"
                                                max="5"
                                                onChange={(e) =>
                                                    setAppRate(e.target.value)
                                                }
                                                className="p-2 rounded-lg shadow-md"
                                            />
                                            <div className="flex">
                                                <span>{appRate}</span>

                                                <svg
                                                    className="w-6 h-6 text-yellow-400 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="overall">
                                            Overall Rating
                                        </label>
                                        <div className="flex flex-row justify-between items-center">
                                            <input
                                                type="range"
                                                name="overall"
                                                id="overall"
                                                min="0"
                                                max="5"
                                                defaultValue={0}
                                                onChange={(e) =>
                                                    setOvrRate(e.target.value)
                                                }
                                                className="p-2 rounded-lg shadow-md"
                                            />
                                            <div className="flex">
                                                <span>{ovrRate}</span>
                                                <svg
                                                    className="w-6 h-6 text-yellow-400 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea
                                            name="comment"
                                            id="comment"
                                            cols="30"
                                            rows="10"
                                            className="p-2 rounded-xl shadow-md"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="p-2 bg-green-700 text-white rounded-lg shadow-md shadow-green-300/50 hover:bg-green-600 w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Book;
