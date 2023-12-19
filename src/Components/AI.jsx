import React, { useState } from 'react'
import Navbar from './Navbar'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify'

const AI = () => {
    const [bookName, setBookName] = useState("");
    const [response, setResponse] = useState([""]);
    const getResponse = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "book": bookName
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        setResponse(["AI Model is working hard to review your book ..."])

        fetch("http://localhost:5000/bard/getGeneralOverview/", requestOptions)
            .then(response => response.text())
            .then(result => {
                setResponse(JSON.parse(result).result.replace("##","").split("\n"));
                
            })
            .catch(error => toast('error', error));
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
                <button type="button" onClick={getResponse} class="m-auto max-w-md mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800">Generate Review</button>
                <div className='max-w-screen-xl m-auto mt-4 p-3'>
                    {response.map((paragraph, index) => (
                        <p class="mb-3 text-gray-500 dark:text-gray-400"  key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AI