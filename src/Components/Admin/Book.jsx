import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    Accordion,
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Spinner,
} from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
const Book = () => {
    const { id } = useParams();
    // fetch data from mongo
    const [book, setBook] = useState({});
    const [reviewers, setReviewers] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewedReviewers, setArrToBeMapped] = useState([]);
    const [pendingReviewers, setPendingReviewers] = useState([]);

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
        if (Object.keys(book).length === 0) {
            fetchData();
        }
    }, []);
    useEffect(() => {
        if (book?.reviewersAlotted) {
            const fetchReviewers = async () => {
                try {
                    const response = await fetch(
                        `http://localhost:5000/admin/getReviewers`
                    );
                    let json = await response.json();
                    let reviewers = json.filter((reviewer) =>
                        book.reviewersAlotted.includes(reviewer._id)
                    );
                    setReviewers(reviewers);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            if (reviewers.length === 0) {
                fetchReviewers();
            }
        }
    }, [book]);
    useEffect(() => {
        if (reviewers.length > 0) {
            const fetchReviews = async () => {
                try {
                    const response = await fetch(
                        `http://localhost:5000/admin/getReviews`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: book._id,
                            }),
                        }
                    );
                    let json = await response.json();
                    setReviews(reviews);

                    let temp = json.map((x) => {
                        const id1 = x.reviewerid;
                        // console.log(x);
                        const d2 = reviewers.filter((y) => y._id == id1)[0];
                        // console.log(">>>",d2, reviewers);
                        return {
                            ...x,
                            ...d2,
                        };
                    });
                    // console.log(temp);
                    setArrToBeMapped(temp);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            if (reviews.length === 0) {
                fetchReviews();
            }
        }
    }, [reviewers]);

    useEffect(() => {
        let pending = reviewers.filter((x) => {
            let r = true;
            reviewedReviewers.forEach((obj) => {
                if (obj.reviewerid == x._id) {
                    r = false;
                }
            });
            return r;
        });
        setPendingReviewers(pending);
    }, [reviewedReviewers]);
    if (!Object.keys(book)) {
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
            <div className="box p-4 bg-gray-200">
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
                        <p className="text-gray-700">Bood Id: {book._id}</p>
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
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Reviewers
                            </h1>
                            <div className="bg-grey-100">
                                <h2 className="text-xl font-semibold">
                                    Reviewed
                                </h2>
                                <Accordion allowMultiple>
                                    {reviewedReviewers.map((reviewer) => (
                                        <AccordionItem
                                            key={reviewer._id}
                                            className="bg-gray-100 mb-2 border border-black rounded-lg"
                                        >
                                            <h2>
                                                <AccordionButton className="bg-gray-100 rounded-lg">
                                                    <Box
                                                        as="span"
                                                        flex="1"
                                                        textAlign="left"
                                                    >
                                                        {reviewer.name}
                                                        {" - "}
                                                        {reviewer.email}
                                                        {" - "}
                                                        {reviewer._id}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel
                                                pb={4}
                                                className="rounded-lg text-left bg-gray-100"
                                            >
                                                <UnorderedList>
                                                    {Object.entries(
                                                        reviewer
                                                    ).map(([key, value]) => (
                                                        <ListItem key={key}>
                                                            {key}: {value}
                                                        </ListItem>
                                                    ))}
                                                </UnorderedList>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                            {pendingReviewers ? (
                                <div className="bg-grey-100">
                                    <h2 className="text-xl font-semibold">
                                        Pending
                                    </h2>
                                    <Accordion allowMultiple>
                                        {pendingReviewers.map((reviewer) => (
                                            <AccordionItem
                                                key={reviewer._id}
                                                className="bg-gray-100 mb-2 border border-black rounded-lg"
                                            >
                                                <h2>
                                                    <AccordionButton className="bg-gray-100 rounded-lg">
                                                        <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                        >
                                                            {reviewer.name}
                                                            {" - "}
                                                            {reviewer.email}
                                                            {" - "}
                                                            {reviewer._id}
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel
                                                    pb={4}
                                                    className="rounded-lg text-left bg-gray-100"
                                                >
                                                    <UnorderedList>
                                                        {Object.entries(
                                                            reviewer
                                                        ).map(
                                                            ([key, value]) => (
                                                                <ListItem
                                                                    key={key}
                                                                >
                                                                    {key}:{" "}
                                                                    {value}
                                                                </ListItem>
                                                            )
                                                        )}
                                                    </UnorderedList>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;
