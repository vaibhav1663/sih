import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Input, InputGroup } from "@chakra-ui/react";
import { toast } from "react-toastify";
import "./styles/AI.css";
import { Spinner } from "@chakra-ui/react";
const AI = () => {
    const [bookName, setBookName] = useState("");
    const [response, setResponse] = useState([""]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getResponse = () => {
        document.getElementById("genbtn").style.display = "none";
        setLoading(true);
        document.getElementById("response").innerHTML = "";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            book: bookName,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        // setResponse(["AI Model is working hard to review your book ..."]);

        fetch("http://localhost:5000/bard/getGeneralOverview/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setResponse(
                    JSON.parse(result).result.replace("##", "").split("\n")
                );
            })
            .catch((error) => toast("error", error));
    };

    useEffect(() => {
        console.log(response);
        setData(response);
    }, [response]);

    useEffect(() => {
        let resp = document.getElementById("response");
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < data.length) {
                resp.innerHTML +=
                    "<p className='mb-3 text-lg text-gray-200 dark:text-gray-100'>" +
                    data[index] +
                    "</p><br>";
                index++;
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            setLoading(false);
            clearInterval(intervalId);
            document.getElementById("genbtn").style.display = "block";
        };
    }, [data]);

    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundColor: "#111827",
                    height: "calc(100vh - 72px)",
                    overflowY: "auto",
                }}
                className="p-2 flex flex-col"
            >
                <InputGroup className="max-w-screen-xl mx-auto">
                    <Input
                        type="text"
                        placeholder="Book Name"
                        defaultValue={
                            "Ayurveda and the Mind by Dr. David Frawley"
                        }
                        className="m-3"
                        color={"white"}
                        onChange={(e) => {
                            setBookName(e.target.value);
                        }}
                    />
                </InputGroup>
                <button
                    id="genbtn"
                    type="button"
                    onClick={getResponse}
                    style={{ minHeight: "40px" }}
                    className="ai-btn h-fit mx-auto"
                >
                    Generate Review
                </button>
                {loading ? (
                    <span className="flex flex-row items-center justify-center">
                        <p className="text-lg text-white">Generating Review</p>
                        <Spinner
                            ml={2}
                            size="sm"
                            color="white"
                            className="animate-spin"
                        />
                    </span>
                ) : null}
                <div
                    id="response"
                    className="text-white max-w-screen-xl m-auto mt-4 p-3 text-lg"
                ></div>
                {/* <div className="max-w-screen-xl m-auto mt-4 p-3">
                    {response.map((paragraph, index) => {
                        return (
                            <p
                                className="mb-3 text-lg text-gray-200 dark:text-gray-100"
                                key={index}
                            >
                                {paragraph}
                            </p>
                        );
                    })}
                </div> */}
            </div>
        </>
    );
};

export default AI;
