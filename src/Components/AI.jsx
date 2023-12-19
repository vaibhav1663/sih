import React, { useState } from 'react'
import Navbar from './Navbar'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const AI = () => {
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [response, setResponse] = useState("");
    const getResponse = () => {
        alert("clicked");
        setResponse("I am AI")
    }
    return (
        <>
            <Navbar />
            <div className="p-2 flex flex-col">
                <InputGroup className="max-w-screen-xl m-auto">
                    <Input
                        type="text"
                        placeholder="Book Name"
                        className='m-3'
                        onChange={(e) => { setBookName(e.target.value) }}
                    />
                </InputGroup>
                <InputGroup className="max-w-screen-xl m-auto">
                    <Input
                        type="text"
                        placeholder="Author name (Optional)"
                        className='m-3'
                        onChange={(e) => { setAuthorName(e.target.value) }}
                    />
                </InputGroup>
                <button type="button" onClick={getResponse} class="m-auto max-w-md mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800">Generate Review</button>
                <p class="max-w-screen-xl m-auto mt-4 mb-3 text-gray-500 dark:text-gray-400" >{response}</p>
            </div>
        </>
    )
}

export default AI