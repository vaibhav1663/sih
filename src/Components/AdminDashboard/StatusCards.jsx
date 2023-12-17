import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


import React from "react";

function StatusCards({ data }) {

    const sortedData = data.sort((a, b) => (a.allocated > b.allocated ? -1 : 1));

  return (
    <div className="p-9 grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {sortedData.map((book, index) => {
        return (
          <div
            className="relative box p-4 mt-3 bg-white rounded-lg shadow-md border border-2  border-gray-300 hover:border-gray-500"
            key={index}
          >
            <a href={"/book/" + book.id}>
              <div className="flex flex-col md:flex-col">
                <div className="flex flex-col justify-center">
                  <img
                    src={book.thumb}
                    alt="Book Thumbnail"
                    className="w-full rounded-lg shadow-md m-auto"
                  />
                </div>
                <div className="pt-4 flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-semibold">{book.name}</h1>
                  <p className="mb-3">by {book.author}</p>

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
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default StatusCards;
