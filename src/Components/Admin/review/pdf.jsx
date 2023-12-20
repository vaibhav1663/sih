import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import jsPDF from "jspdf";
import "./pdf.css";
import "jspdf-autotable";
let done = false;
const PDF = () => {
    const { bookID, reviewerID } = useParams();
    const [tables, setTables] = useState();
    let b;
    console.log("bookID >>", bookID);
    console.log("reviewID >>", reviewerID);
    let done = false;
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
            const book = data;
            b = data;
            if (book.reviewerResponse) {
                const reviews = book.reviewerResponse;
                let filteredReview = reviews.filter(
                    (item) => item.reviewerid === reviewerID
                )[0];
                if (filteredReview) {
                    // print all categories of object filtered review
                    console.log({ filteredReview });
                    const bookData = ["A", "B", "C", "D", "E", "F", "G"].map(
                        (key) => filteredReview[key]
                    );
                    const keyMappings = {
                        H: "Ethical issues(related to author editor and publishor)",
                        A: "Author credibitlity",
                        B: "Publisher credibitlity",
                        C: "in general",
                        D: "physical appearance structure and organisation",
                        E: "subject matter",
                        F: "Language",
                        G: "Illustrations",
                    };
                    let PDFData = {
                        H: {
                            Plagiarism: null,
                            "Citation Bias": null,
                            "Number of Authors": null,
                        },
                        A: {
                            "Number of Authors": null,
                            Qualification: null,
                            Experience: null,
                            Expertise: null,
                            "Number of books authored by the writer.": null,
                        },
                        B: {
                            "Publisher Credibility": null,
                        },
                        C: {
                            "Attractiveness of color page desgin": null,
                            "Uniqueness Level": null,
                            "Whether the uniqueness claimed by the author has been conveyed clearly?":
                                null,
                            "Whether the book stayed focus on the uniqueness as claimed by the 3 authors?":
                                null,
                            "Whether the book is dealing with the entire curriculum & syllabus?":
                                null,
                        },
                        D: {
                            "Relevance of Cover Page Design": null,
                            "Size of the Book - Dimensions": null,
                            "Attractiveness of Cover Page": null,
                            "Size of the Book - Bulkiness": null,
                            "Paper Quality": null,
                            "Colours in Printing": null,
                            "Logical & Consistent page layout with appropriate line spacing & margins":
                                null,
                            "Type of Font (Score out of 10)": null,
                            "Size of Font (Score out of 10)": null,
                            "Consistency in maintaining type & size of font (Score out of 10)":
                                null,
                            "Number of Pages to teaching hours ratio.": null,
                            "Overview of learning objectives included at the beginning of chapters (Score out of 5)":
                                null,
                            "Introductory Section to explain unique features and how to use the book (Score out of 5)":
                                null,
                            "Well-Structured table of Contents (Score out of 5)":
                                null,
                            "Inclusion of list of Abbreviations,index,etc. (Score out of 5)":
                                null,
                            "Inclusion of summary (Score out of 5)": null,
                            "Text is structured as chapter titles, headings, captions, text boxes (Score out of 5)":
                                null,
                            "Inclusion of meaningful activities, tasks, and exercises (Score out of 5)":
                                null,
                            "Appropriate topic distribution and sequencing (Score out of 5)":
                                null,
                            "Highlighted Key words and Concepts (Score out of 5)":
                                null,
                            "Free from the mistakes and reiteration (Score out of 5)":
                                null,
                        },
                        E: {
                            "Compilation of classical references": null,
                            "Appropriately interpreted, discussed and logically concluded (Score out of 5)":
                                null,
                            "Added with recent and relevant advances (Score out of 5)":
                                null,

                            "The concepts": {
                                "Clear & Accurate (Score out of 5)": null,
                                "Comprehensiveness (Score out of 5)": null,
                                "Self-explanatory and do not require additional resources to understand (Score out of 5)":
                                    null,
                                "Supported with authoritative (Score out of 5)":
                                    null,
                                "Consistency of content to entire curriculum & syllabus (1 score for every 20% of content)":
                                    null,
                                "Understandable to all three types of learners (advance, medium and slow learners)":
                                    null,
                                "Is the matter facilitating students to learn directly and independently and construct meaning on their own (i.e., read to learn)":
                                    null,
                            },
                            "Is the content promoting": {
                                "Higher-order thinking skills that require analysis, evaluation and judgement, and not just recalling and comprehension of facts":
                                    null,
                                "Deep processing, critical and creative thinking by providing less structured problems and more open-ended questions":
                                    null,
                                "Content is with well-formed presentation, discussion, and conclusion":
                                    null,
                                "Content reveals clear meaning & thought-provoking":
                                    null,
                                "Content is focussed on the main idea and no diversions, no irrelevant content":
                                    null,
                                "Definitions explained well with suitable examples":
                                    null,
                                "There are multiple perspectives and balanced viewpoints on issues":
                                    null,
                                "There is no bias in content, such as over-generalisation and stereotyping":
                                    null,
                                "The content and illustrations do not carry any form of discrimination on the grounds of gender, age, race, religion, culture, disability etc., nor do they suggest exclusion.":
                                    null,
                                "Included appropriate resources for further reading":
                                    null,
                                "Bibliography, References & Citations": null,
                            },
                        },
                        F: {
                            "Is the language used in the text is simple?": null,
                            "Usage of Standard Technical Terminology": null,
                            "Usage of Standard Punctuation Marks & Symbols":
                                null,
                            "The language is accurate and precise": null,
                            "Can the audience determine meanings of difficult or technical terms through context clues?":
                                null,
                            "Is the text free from Grammatical mistakes, redundancies,wordiness, highfalutin and sexist language?":
                                null,
                            "Is the text free from fragments, run-on, and overly complex sentences?":
                                null,
                            "Are capitalization, spelling, and paragraphs used correctly?":
                                null,
                        },
                        G: {
                            Color: null,
                            "Visibility of Illustrations: Clarity and Resolution":
                                null,
                            "Visibility of Illustrations: Colour": null,
                            "Visibility of Illustrations: Labelling": null,
                            "Relevance to the content": null,
                        },
                    };

                    let u = Object.values(bookData).flat();
                    let i = 0;
                    let j = 0;
                    for (let key in PDFData) {
                        const value = PDFData[key];
                        for (let question in value) {
                            const answer = value[question];

                            if (answer instanceof Object) {
                                for (let subquestion in answer) {
                                    PDFData[key][question][subquestion] = u[i];
                                    i++;
                                }
                            } else {
                                PDFData[key][question] = u[i];
                                i++;
                            }
                        }
                    }
                    console.log({ PDFData });
                    PDFData = Object.fromEntries(
                        Object.entries(PDFData).map(([k, v]) => [
                            keyMappings[k],
                            v,
                        ])
                    );
                    console.log({ PDFData });
                    let docData = [];
                    for (const category in PDFData) {
                        console.log(
                            "<<<",
                            Object.entries(PDFData[category])
                                .filter((x) => x[1] instanceof Object)
                                .forEach((x) => {
                                    console.log({ x });
                                    return docData.push(Object.entries(x[1]));
                                })
                        );
                        console.log("cat", PDFData[category]);
                        docData.push(
                            Object.entries(PDFData[category]).map((x) => {
                                if (x[1] instanceof Object) {
                                    return Object.entries(x[1]);
                                } else {
                                    return x;
                                }
                            })
                        );
                    }
                    // console.log(docData);
                    // console.log({ docData });
                    // console.log({ done });
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
                    // !done && pdf.save(`${bookID}-${reviewerID}.pdf`);
                    // done = true;
                    console.log(docData);
                    setTables(docData);
                    const headers = [
                        "Ethical issues(related to author editor and publisher)",
                        "Author Credibitlity",
                        "Publisher Credibitlity",
                        "In General",
                        "Physical Appearance Structure and Organisation",
                        "Subject Matter - Concept",
                        "Subject Matter - Is the content promoting?",
                        "Subject Matter - Misc",
                        "Language",
                        "Illustrations",
                    ];
                    document.getElementById("pdfframe").innerHTML = "";
                    let tableArr = docData.map((table, i) => {
                        const Table = document.createElement("table");
                        Table.className = "table table-bordered";
                        const TableCaption = document.createElement("caption");
                        TableCaption.innerText = headers[i];
                        Table.append(TableCaption);
                        Table.style.border = "solid";
                        const row = (data) => {
                            const Tr = document.createElement("tr");
                            if (data.length != 2) return;
                            data.map((cell) => {
                                const Td = document.createElement("td");
                                Td.innerText = cell;
                                Tr.append(Td);
                            });
                            Table.append(Tr);
                        };
                        table.forEach((rowData) => row(rowData));
                        document.getElementById("h1").innerHTML =
                            "Book Name: " + b.name;
                        document.getElementById("h2").innerHTML =
                            "Reviewer ID: " + reviewerID;
                        document.getElementById("pdfframe").append(Table);
                        return Table;
                    });
                    setTables(tableArr);
                    console.log(tableArr);
                }
            }
        };
        (async () => {
            await getReview();
        })();
    }, []);

    return (
        <>
            <img className="m-auto" src="/img/header.png" alt="Header" />
            <h1
                id="h1"
                className="text-center text-3xl bold text-bold strong"
            ></h1>
            <h2
                id="h2"
                className="text-center text-2xl bold text-bold strong"
            ></h2>
            <div
                style={{
                    width: "75vw",
                }}
                className="m-auto flex flex-col items-center justify-center "
                id="pdfframe"
            ></div>
        </>
    );
};

export default PDF;
