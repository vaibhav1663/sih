import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PDF = () => {
    const { bookID, reviewerID } = useParams();
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([]);
    const [filteredReview, setFilteredReview] = useState({});
    const [data, setData] = useState([]);
    console.log("bookID >>", bookID);
    console.log("reviewID >>", reviewerID);

    useEffect(() => {
        const getReview = async () => {
            const response = await fetch(
                `http://localhost:5000/books/getBookById`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: bookID,
                    }),
                }
            );
            const data = await response.json();
            console.log("fetched book data >>", data);
            setBook(data);
        };
        if (Object.keys(book).length === 0) {
            getReview();
        }
    }, []);
    useEffect(() => {
        if (book.reviewerResponse) {
            setReviews(book.reviewerResponse);
        }
    }, [book]);

    useEffect(() => {
        if (reviews) {
            let d = reviews.filter((item) => item.reviewerid === reviewerID)[0];
            console.log("filtered review >>", d);
            setFilteredReview(d);
        }
        console.log("review >>", filteredReview);
    }, [reviews]);

    useEffect(() => {
        if (filteredReview) {
            // print all categories of object filtered review
            setData(filteredReview.PDFData);
        }
    }, [filteredReview]);

    useEffect(() => {
        console.log("data >>", data);
        let docData = [];
        for (const category in data) {
            console.log(
                "<<<",
                Object.entries(data[category])
                    .filter((x) => x[1] instanceof Object)
                    .forEach((x) => {
                        console.log({ x });
                        return docData.push(Object.entries(x[1]));
                    })
            );
            console.log("cat", data[category]);
            docData.push(
                Object.entries(data[category]).map((x) => {
                    if (x[1] instanceof Object) {
                        return Object.entries(x[1]);
                    } else {
                        return x;
                    }
                })
            );
        }
        console.log(docData);
        // console.log({ docData });
        // const pdf = new jsPDF();
        // const parameters = [
        //     "Ethical issues(related to author editor and publishor)",
        //     "Author credibitlity",
        //     "Publisher credibitlity",
        //     "In General",
        //     "Physical Appearance Structure and Organisation",
        //     "Subject Matter - Concept",
        //     "Subject Matter - Is the content promoting?",
        //     "Subject Matter - Misc",
        //     "Illustrations",
        // ];
        // pdf.text(`${book.name}`, 20, 10);
        // docData.forEach((item, i) => {
        //     const columns = [parameters[i], "Score"];
        //     pdf.autoTable({
        //         head: [columns],
        //         body: item,
        //     });
        // });
        // pdf.save(`${bookID}-${reviewerID}.pdf`);
    }, [data]);
    return (
        <div>
            {bookID} : {reviewerID}
        </div>
    );
};

export default PDF;
