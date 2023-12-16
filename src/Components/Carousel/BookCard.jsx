import React from "react";
import { 
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Center,
    Button,
    ButtonGroup
    } from "@chakra-ui/react";

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



const BookCard = () => {
    return(
        <div>
            <div className="content-center m-auto bg-stone-200 w-full h-2/3 pb-3">
                <div class="w-0 h-0 m-auto
                    border-l-[50px] border-l-transparent
                    border-t-[35px] border-t-white
                    border-r-[50px] border-r-transparent" mx-auto>
                </div>
                <Center><Heading size="lg" margin="auto">Top picks for Ayurveda</Heading></Center>
                
                <div className="p-9 grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {data.map((book,index)=>{
                    return(
                        <Card maxW='15rem' maxH='25rem' key={index}>
                            <CardBody>
                                <Image
                                boxSize='200px'
                                src={book.thumb}
                                alt='book image'
                                borderRadius='lg'
                                />
                                <Stack spacing='3'>
                                <Heading size='md'>{book.name}</Heading>
                                <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Read review
                                </Button>
                                </ButtonGroup>
                                </Stack>
                            </CardBody>
                        </Card>
                    )
                })}
                </div>
                    <Center>
                        <Button variant='solid' colorScheme='blue'>
                            More
                        </Button>
                    </Center>
            </div>
            <div className="content-center m-auto bg-stone-300 w-full h-2/3 pb-3">
            <div class="w-0 h-0 m-auto
                border-l-[50px] border-l-transparent
                border-t-[35px] border-t-stone-200
                border-r-[50px] border-r-transparent" mx-auto>
            </div>
            <Center><Heading size="lg" margin="auto">Top picks for Siddha</Heading></Center>
            
            <div className="p-9 grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {data.map((book,index)=>{
                return(
                    <Card maxW='15rem' maxH='25rem' key={index}>
                        <CardBody>
                            <Image
                            boxSize='200px'
                            src={book.thumb}
                            alt='book image'
                            borderRadius='lg'
                            />
                            <Stack spacing='3'>
                            <Heading size='md'>{book.name}</Heading>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Read review
                            </Button>
                            </ButtonGroup>
                            </Stack>
                        </CardBody>
                    </Card>
                )
            })}
            </div>
                <Center>
                    <Button variant='solid' colorScheme='blue'>
                        More
                    </Button>
                </Center>
        </div>
        <div className="content-center m-auto bg-stone-400 w-full h-2/3 pb-3">
            <div class="w-0 h-0 m-auto
                border-l-[50px] border-l-transparent
                border-t-[35px] border-t-stone-300
                border-r-[50px] border-r-transparent" mx-auto>
            </div>
            <Center><Heading size="lg" margin="auto">Top picks for Unani</Heading></Center>
            
            <div className="p-9 grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {data.map((book,index)=>{
                return(
                    <Card maxW='15rem' maxH='25rem' key={index}>
                        <CardBody>
                            <Image
                            boxSize='200px'
                            src={book.thumb}
                            alt='book image'
                            borderRadius='lg'
                            />
                            <Stack spacing='3'>
                            <Heading size='md'>{book.name}</Heading>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Read review
                            </Button>
                            </ButtonGroup>
                            </Stack>
                        </CardBody>
                    </Card>
                )
            })}
            </div>
                <Center>
                    <Button variant='solid' colorScheme='blue'>
                        More
                    </Button>
                </Center>
        </div>
    </div>   
    )
}

export default BookCard;