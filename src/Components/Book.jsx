import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
const publicReviewURL = "localhost:5000/books/addPublicReview";
const Book = () => {
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

  const [conRate, setConRate] = useState(0);
  const [appRate, setAppRate] = useState(0);
  const [ovrRate, setOvrRate] = useState(0);
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  const validateForm = () => {
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    // console.log("id>>", id);

    const addReview = async () => {
      const response = await fetch(
        `http://localhost:5000/books/addPublicReview/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: id,
            content: conRate,
            appearance: appRate,
            overall: ovrRate,
            comment: comment,
          }),
        }
      );
      console.log(response);
      if (response) {
        toggleModal();
      }
    };
    addReview();

    // submitData(bookInfo, (ref) => {
    //     console.log(">>>", ref);
    //     if ("error" in ref) {
    //         setError(ref.error);
    //         // setFailure Modal
    //     } else {
    //         setReferenceNumber(ref.referenceId);
    //         setSuccessModalOpen(true);
    //     }
    // });
  };
  const toggleModal = () => {
    setModal(!modal);
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img className="w-full" src={book.imageLink} alt={book.name} />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-2/3">
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
                        {book.reviewerRating.toFixed(1)} ({book.reviewerCount})
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
                        {book.publicRating.toFixed(1)} ({book.publicCount})
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
              <h1 className="text-2xl font-semibold mt-4">Public Reviews</h1>
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-xl px-2">Average User Rating</h1>
                  <div className="flex flex-col px-4">
                    <span>
                      Content: {book.avgUserRating.content.toFixed(1)}
                    </span>
                    <span>
                      Appearance: {book.avgUserRating.appearance.toFixed(1)}
                    </span>
                    <span>
                      Overall: {book.avgUserRating.overall.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl px-2">Comments</h1>
                  <div className="flex flex-col px-4 gap-2">
                    {book.users.map((user, index) => {
                      if (user.comment === "") return;
                      return (
                        <div
                          className="bg-gray-100 border-4 rounded-md p-1 border-gray-100 border-b-gray-200 border-l-gray-200"
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
      {modal ? (
        <div className="modal top-0 fixed w-screen h-screen bg-gray-400 flex justify-center items-center z-50">
          <div className="modal-content bg-white shadow-md rounded-xl md:w-1/4 w-auto">
            <span
              className="close-button rounded-full border-black border-2 float-right px-2 m-1 bg-gray-300 cursor-pointer"
              onClick={() => toggleModal()}
            >
              X
            </span>
            <div>
              <form action="/" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-4">
                  <h1 className="text-2xl font-semibold">Review this book</h1>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="content">Content Rating</label>
                    <div className="flex flex-row justify-between items-center">
                      <input
                        type="range"
                        name="content"
                        id="content"
                        min="0"
                        max="5"
                        defaultValue={0}
                        onChange={(e) => setConRate(e.target.value)}
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
                    <label htmlFor="appearance">Appearance Rating</label>
                    <div className="flex flex-row justify-between items-center">
                      <input
                        type="range"
                        name="appearance"
                        id="appearance"
                        defaultValue={0}
                        min="0"
                        max="5"
                        onChange={(e) => setAppRate(e.target.value)}
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
                    <label htmlFor="overall">Overall Rating</label>
                    <div className="flex flex-row justify-between items-center">
                      <input
                        type="range"
                        name="overall"
                        id="overall"
                        min="0"
                        max="5"
                        defaultValue={0}
                        onChange={(e) => setOvrRate(e.target.value)}
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
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
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
