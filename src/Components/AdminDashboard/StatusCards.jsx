import {
  Tag,
  TagLabel,Heading
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import React from "react";

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

function StatusCards({ data, admin }) {
  console.log({ data });
  const sortedData = data.sort((a, b) => (a.allocated > b.allocated ? -1 : 1));

  return (<>
    {(sortedData.length == 0)?<Heading className="mt-4" color={"crimson"} fontSize={"x-large"}>No Books Found</Heading>:(<div className="p-4 max-w-screen-xl m-auto grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {sortedData.map((book, index) => {
        return (
          <div
            className="relative box p-4 mt-1 bg-white rounded-lg shadow-md border border-2  border-gray-300 hover:border-gray-500 hover:shadow-xl hover:shadow-blue-100 transition duration-300 ease-in-out"
            key={index}
          >
            <a href={admin ? "/admin/book/" + book._id : "/book/" + book._id}>
              <div className="flex flex-col md:flex-col h-full">
                <div
                  className={`flex flex-col md:flex-col h-full ${
                    admin ? "md:h-2/3" : "md:h-1/2"
                  }`}
                >
                  {book.imageLink ? (
                    <img
                      src={convertUrl(book.imageLink)}
                      alt="Book Thumbnail"
                      className="w-full h-full rounded-md shadow-md m-auto"
                    />
                  ) : (
                    <img
                      src="https://img.freepik.com/premium-vector/library-book-icon-simple-illustration-library-book-vector-icon-web-design-isolated-white-background_98396-26621.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais"
                      alt="Placeholder Thumbnail"
                      // style={{ height: "100%" }}
                      className="w-full rounded-lg shadow-md m-auto h-1/2"
                    />
                  )}
                </div>
                <div className="pt-4 flex flex-col justify-center items-start">
                  {admin ? (
                    <>
                      <h1 className="text-2xl font-semibold mb-2">{book.name}</h1>
                      {/* <p className="mb-3">by {book.author}</p> */}

                      {book.allocated ? (
                        <>
                          <Tag
                            size="sm"
                            borderRadius="full"
                            variant="solid"
                            colorScheme="green"
                            mb={1}
                          >
                            <TagLabel>Allocated</TagLabel>
                            <TiTick className="text-lg mx-0 px-0" />
                          </Tag>
                          <p>Reviews Received: {book.received}/3</p>
                        </>
                      ) : (
                        <>
                          <Tag
                            size="sm"
                            borderRadius="full"
                            variant="solid"
                            colorScheme="red"
                          >
                            <RxCross2 className="text-lg mr-2" />
                            <TagLabel>Not Allocated</TagLabel>
                          </Tag>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex flex-row mt-2">
                        <svg
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.94 8.28L22 9.3L16.36 14.14L18.18 21.01L12 17.77L5.82 21.01L7.64 14.14L2 9.3L9.06 8.28L12 2Z" />
                        </svg>
                        <span className="text-gray-600 ml-1">
                          {book.publicRating && book.publicRating.toFixed(2)}
                        </span>
                      </div>
                      <h1 className="text-2xl font-semibold">{book.name}</h1>

                      <p
                        style={{
                          maxHeight: "30vh",
                        }}
                        className="text-gray-600 mt-2"
                      >
                        {book?.desc?.length < 100
                          ? book?.desc
                          : book?.desc?.substring(0, 100) + "..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>)}
  </>);
}

export default StatusCards;
