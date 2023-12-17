import React from "react";
import { useState, useEffect } from "react";
import { Center,} from "@chakra-ui/react";
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

const GET_BOOKS_URL = "http://localhost:5000/books/toppicks";


const BookCard = () => {
    const [booksToDisplay, setBooksToDisplay] = useState([])
    const getBooks = async () => {
        try {
        const response = await fetch(GET_BOOKS_URL);
        const data = await response.json();
        setBooksToDisplay(data)
        return ;
        } catch (error) {
        console.error("Error fetching books:", error);
        }
    };
    useEffect(() => {
        getBooks()
    }, []);
    let data_ayurveda=data;
    let data_siddha=data;
    console.log(booksToDisplay);
    if(booksToDisplay.length===0){
        getBooks();
    }
    else{
        data_ayurveda = booksToDisplay[0].books;
        data_siddha = booksToDisplay[1].books;
    }
    return(
        <div>
            <div className="content-center m-auto bg-stone-100 w-full h-2/3 pb-3">
                <div class="w-0 h-0 m-auto
                    border-l-[50px] border-l-transparent
                    border-t-[35px] border-t-white
                    border-r-[50px] border-r-transparent" mx-auto>
                </div>
                <Center><a href="#"><h1 className="mt-6 text-4xl font-semibold text-blue-900">Recommended Books for Ayurveda</h1></a></Center>
                
                <div className="p-9  grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {data_ayurveda.map((book, index) => {
                    return (
                        <div
                            className="box max-h-[28rem] p-5 mt-3 bg-white rounded-lg shadow-md"
                            key={index}
                        >
                            <a href={"/book/" + book.id}>
                            <div className="flex flex-col md:flex-col">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src={book.imageLink || "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api"}
                                        alt="Book Thumbnail"
                                        className="w-full rounded-lg shadow-md m-auto"
                                    />
                                </div>
                                <div className="pt-4 flex flex-col justify-center items-start">
                                    <h1 className="text-2xl font-semibold text-blue-900">
                                        {book.name.length<30 ? book.name : book.name.substring(0,30)+"..." }
                                    </h1>
                                </div>
                            </div>
                            </a>
                        </div>
                    );
                })}
                </div>
            </div>
            <div className="content-center m-auto bg-stone-200 w-full h-2/3 pb-3">
            <div class="w-0 h-0 m-auto
                border-l-[50px] border-l-transparent
                border-t-[35px] border-t-stone-100
                border-r-[50px] border-r-transparent" mx-auto>
            </div>
            <Center><a href="#"><h1 className="mt-6 text-4xl font-semibold text-blue-900">Recommended Books for Siddha</h1></a></Center>
            
            <div className="p-9 grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {data_siddha.map((book, index) => {
                    return (
                        <div
                            className="box max-h-[28rem] p-5 mt-3 bg-white rounded-lg shadow-md"
                            key={index}
                        >
                            <a href={"/book/" + book.id}>
                            <div className="flex flex-col md:flex-col">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src={book.imageLink || "http://books.google.com/books/publisher/content?id=YXmmDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72wZbXM-YbdPcie_-6GToUdS-f8nxTzoN75srNGZWRhGF0IijgoZ4bmFrJVI4qczcVYbVqZbe9VwfsLq2mUjzWFurHTQa_qtdU_fMHpCJtgD0BRoJh1q7gYZws9o6FITMvhaghD&source=gbs_api"}
                                        alt="Book Thumbnail"
                                        className="w-full rounded-lg shadow-md m-auto"
                                    />
                                </div>
                                <div className="pt-4 flex flex-col justify-center items-start">
                                    <h1 className="text-2xl font-semibold text-blue-900">
                                        {book.name.length<30 ? book.name : book.name.substring(0,30)+"..." }
                                    </h1>
                                </div>
                            </div>
                            </a>
                        </div>
                    );
                })}
            </div>
                {/* <Center>
                    <Button variant='solid' colorScheme='facebook'>
                        More
                    </Button>
                </Center> */}
        </div>
    </div>  
    )
}

export default BookCard;