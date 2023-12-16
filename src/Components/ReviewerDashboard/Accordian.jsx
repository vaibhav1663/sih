import React, {useState, useEffect} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  HStack,
} from "@chakra-ui/react";
import ReviewForm from '../ReviewForm';

let data = [
    {
        name: "Book Name 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    }
];

const GET_REVIEWER_BOOKS_URL = "http://localhost:5000/reviewer/getBooks";

const Accordian=(id) => {
    const [booksToDisplay, setBooksToDisplay] = useState([])
    const getBooksByReviewerName = async (needle) => {
        try {
        const response = await fetch(GET_REVIEWER_BOOKS_URL);
        const data = await response.json();
        setBooksToDisplay(data)
        return ;
        } catch (error) {
        console.error("Error fetching books:", error);
        }
    };
    useEffect(() => {
        getBooksByReviewerName(id)
    }, []);

    return(
        <div>
            <HStack>
        <div className='w-1/2 border-2 border-grey-900 p-9 mt-9'>
            <h1>Book to be Reviewed</h1>
        <Accordion allowToggle>
              {data.map((book,index) => (
                <AccordionItem
                  key={index}
                  className="mb-2 border border-black rounded-lg"
                >
                  <h2>
                    <AccordionButton className="bg-gray-200 rounded-lg">
                      <Box as="span" flex="1" textAlign="left">
                        {book.name}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="text-left">
                    Author : {book.name}
                    <br />
                    Description : {book.desc}
                    <br />
                    <ReviewForm id={book._id}/>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
            <div className='w-1/2 border-2 border-grey-900 p-9 mt-9'>
            <h1>Book Reviewed</h1>
        <Accordion allowToggle>
              {data.map((book,index) => (
                <AccordionItem
                  key={index}
                  className="mb-2 border border-black rounded-lg"
                >
                  <h2>
                    <AccordionButton className="bg-gray-200 rounded-lg">
                      <Box as="span" flex="1" textAlign="left">
                        {book.name}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="text-left">
                    Author : {book.name}
                    <br />
                    Description : {book.desc}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
            </HStack>
            </div>
           
    )
}

export default Accordian;