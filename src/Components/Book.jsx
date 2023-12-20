import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Text,
  Flex,
  Textarea,
  Tooltip,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const publicReviewURL = "localhost:5000/books/addPublicReview";

const Book = () => {
  function convertUrl(originalUrl) {
    // Extract the book ID from the original URL
    const bookIdRegex = /id=([^&]+)/;
    const match = originalUrl?.match(bookIdRegex);
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

  const { id } = useParams();
  // fetch data from mongo
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/books/getBookById/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: id,
            }),
          }
        );
        let json = await response.json();
        if(!json) throw new Error("No book found");
        
        console.log("resp >>", json);
        json = {
          ...json,
          avgUserRating: {
            content:
              json.users.reduce((acc, curr) => acc + Number(curr.content), 0) /
              json.users.length,
            appearance:
              json.users.reduce(
                (acc, curr) => acc + Number(curr.appearance),
                0
              ) / json.users.length,
            overall:
              json.users.reduce((acc, curr) => acc + Number(curr.overall), 0) /
              json.users.length,
          },
        };
        setBook(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [comment, setComment] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ratings, setRatings] = useState({
    content: 0,
    appearance: 0,
    overall: 0,
  });

  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          boxSize={4}
          color={i <= roundedRating ? "yellow.400" : "gray.300"}
        />
      );
    }

    return stars;
  };

  const validateForm = () => {
    return true;
  };

  const handleSubmit = async (e) => {
    if (!validateForm()) return;

    const reviewData = {
      _id: id,
      content: ratings.content,
      appearance: ratings.appearance,
      overall: ratings.overall,
      comment: comment,
    };

    const addReview = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/books/addPublicReview/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
          }
        );

        if (response.ok) {
          toast.success("Review submitted successfully!");
          onClose();
        } else {
          toast.error("Review submitted successfully");

        }
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    };
    
    addReview();
  };

  const handleStarClick = (idx, category) => {
    setRatings({
      ...ratings,
      [category]: idx,
    });
  };

  const handleTextareaChange = (e) => {
    setComment(e.target.value);
  };

  if (Object.keys(book).length === 0) {
    return (
      <>
        <Navbar page="book-reviews" />
        <div className="p-2 flex flex-row justify-center items-center w-full">
          <span className="text-2xl font-semibold">Loading ...</span>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar page="book-reviews" />
      <div className="max-w-screen-xl m-auto box p-4">
        <div className="flex flex-col md:flex-row gap-6 border border-2 p-2 rounded-md">
          <div className="w-full md:w-1/3">
            <img
              className="w-full p-2"
              src={convertUrl(book.imageLink)}
              alt={book.name}
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-2/3">
            <h1 className="text-2xl font-semibold mt-3">{book.name}</h1>
            <p className="text-gray-700 mt-1 mx-2">{book.desc}</p>
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
                        {book.reviewerRating.toFixed(1)} ({book.reviewerCount})
                      </p>
                    </span>
                  </span>
                </div>
              ) : (
                <> </>
              )}
              {/* {book.publicRating ? (
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

                      <p className="mb-2">
                        {book.publicRating.toFixed(1)} ({book.publicCount})
                      </p>
                    </span>
                  </span>
                </div>
              ) : (
                <> </>
              )} */}
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
              <Button colorScheme="green" onClick={onOpen}>
                Review this book
              </Button>
            </div>
            <div className="publicReview p-2">
              {/* <h1 className="text-2xl font-bold">Public Reviews</h1> */}
              <div className="flex flex-col gap-4 ">
                <div className="">
                <h1 className="text-lg px-2 font-semibold mt-2 mb-2">
                    Average User Rating
                  </h1>

                  <div className="flex flex-col gap-2 ml-5">
                    <div className="flex items-center">
                      <span className="w-24 text-gray-600">Content</span>
                      <div className="flex items-center gap-1">
                        {renderStars(book.avgUserRating.content)}
                        <b className="ml-2">
                          {book.avgUserRating &&
                            book.avgUserRating.content.toFixed(1)}
                        </b>
                        <span className="text-gray-600 ml-1">/ 5</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-gray-600">Appearance</span>
                      <div className="flex items-center gap-1">
                        {renderStars(book.avgUserRating.appearance)}
                        <b className="ml-2">
                          {book.avgUserRating &&
                            book.avgUserRating.appearance.toFixed(1)}
                        </b>
                        <span className="text-gray-600 ml-1">/ 5</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-24 text-gray-600">Overall</span>
                      <div className="flex items-center gap-1">
                        {renderStars(book.avgUserRating.overall)}
                        <b className="ml-2">
                          {book.avgUserRating &&
                            book.avgUserRating.overall.toFixed(1)}
                        </b>
                        <span className="text-gray-600 ml-1">/ 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg px-2 font-semibold mt-2 mb-2">
                    Comments
                  </h1>
                  <div className="flex flex-col px-4 gap-2">
                    {book.users.map((user, index) => {
                      if (user.comment === "") return;
                      return (
                        <div
                          className="bg-gray-100 border-4 rounded-md p-2 border-gray-100 border-l-gray-200 border-b-gray-200"
                          key={index}
                        >
                          <p>{user.comment}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent my="auto">
          <ModalHeader textAlign="center">Book Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="h2" fontSize="lg" my={2} mx="auto">
              Content
            </Text>

            {["1", "2", "3", "4", "5"].map((label, idx) => (
              <Tooltip key={idx} label={`${label}`} mx="auto" placement="top">
                <IconButton
                  icon={<StarIcon boxSize={4} />}
                  onClick={() => handleStarClick(idx, "content")}
                  color={idx <= ratings.content ? "teal.500" : "gray.300"}
                  size="sm"
                  mr={2}
                />
              </Tooltip>
            ))}

            <Text as="h2" fontSize="lg" textAlign="left" my={2} mx="auto">
              Appearance
            </Text>

            {["1", "2", "3", "4", "5"].map((label, idx) => (
              <Tooltip key={idx} label={`${label}`} placement="top">
                <IconButton
                  icon={<StarIcon boxSize={4} />}
                  onClick={() => handleStarClick(idx, "appearance")}
                  color={idx <= ratings.appearance ? "teal.500" : "gray.300"}
                  size="sm"
                  mr={2}
                />
              </Tooltip>
            ))}

            <Text as="h2" fontSize="lg" textAlign="left" my={2} mx="auto">
              Overall
            </Text>

            {["1", "2", "3", "4", "5"].map((label, idx) => (
              <Tooltip key={idx} label={`${label}`} placement="top">
                <IconButton
                  icon={<StarIcon boxSize={4} />}
                  onClick={() => handleStarClick(idx, "overall")}
                  color={idx <= ratings.overall ? "teal.500" : "gray.300"}
                  size="sm"
                  mr={2}
                />
              </Tooltip>
            ))}

            <Text as="h2" fontSize="lg" textAlign="left" mt={4} mb={2} mr={4}>
              Comment
            </Text>

            <Textarea
              placeholder="Such a great book"
              required
              value={comment}
              onChange={handleTextareaChange}
              height="8rem"
              maxH="8rem"
            />
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="green" mr={3} onClick={() => handleSubmit()}>
              Send Review
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Book;
