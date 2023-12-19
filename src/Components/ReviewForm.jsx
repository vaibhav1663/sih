import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EthicalIssues from "./ReviewForm/EthicalIssues";
import AuthorInfo from "./ReviewForm/AuthorInfo";
import PublisherCredibility from "./ReviewForm/PublisherCredibility";
import UniquenessRating from "./ReviewForm/UniquenessRating";
import PhysicalAppearanceRating from "./ReviewForm/PhysicalAppearanceRating";
import SubjectMatter from "./ReviewForm/SubjectMatter";
import Language from "./ReviewForm/Language";
import Illustrations from "./ReviewForm/Illustrations";
import {
    Heading,
    Select,
    Input,
    Button,
    Textarea,
    Stack,
    Box,
    Divider,
    FormControl,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogBody,
    AlertDialogFooter,
} from "@chakra-ui/react";
const POST_REVIEW_SUBMIT_URL = "http://localhost:5000/reviewer/addResponse";
const SuccessModal = ({ isOpen, onClose, handleExplore }) => (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />

        <AlertDialogContent>
            <AlertDialogHeader
                fontSize="2xl"
                fontWeight="bold"
                mx="auto"
                mt={2}
            >
                Book Review Successful.
            </AlertDialogHeader>

            {/* <AlertDialogCloseButton /> */}

            <AlertDialogBody textAlign="center">
                Thank you for your review!
            </AlertDialogBody>
        </AlertDialogContent>
    </AlertDialog>
);

const ReviewForm = ({ id, reviewerid, bookName }) => {
    console.log({ id, reviewerid });
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (index) => {
        setCurrentTab(index);
    };

    const handleNext = () => {
        setCurrentTab((prevTab) => Math.min(prevTab + 1, 5));
    };

    const handlePrev = () => {
        setCurrentTab((prevTab) => Math.max(prevTab - 1, 0));
    };

    const [bookData, setBookData] = useState({
        H: [null, null, null],
        A: [null, null, null, null, null],
        B: null,
        C: [null, null, null, null],
        D: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        E: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        F: [null, null, null, null, null, null, null, null],
        G: [null, null, null, null, null],
    });

    const handleEthicalIssuesChange = (id, value) => {
        if (id === "fabrication") {
            const newBookData = { ...bookData };
            newBookData.H[0] = value;
            setBookData(newBookData);
        } else if (id === "plagiarism") {
            const newBookData = { ...bookData };
            newBookData.H[1] = value;
            setBookData(newBookData);
        } else if (id === "citation") {
            const newBookData = { ...bookData };
            newBookData.H[2] = value;
            setBookData(newBookData);
        }
    };

    const handleAuthorInfo = (value, id) => {
        const newBookData = { ...bookData };
        newBookData.A[id] = Number(value);
        setBookData(newBookData);
    };

    const handlePublisherCredibilityChange = (selectedOption) => {
        setBookData((prevBookData) => ({
            ...prevBookData,
            B: selectedOption,
        }));
    };

    const handleUniquenessRatingChange = (value, question) => {
        if (question === "uniquenessLevel") {
            const newBookData = { ...bookData };
            newBookData.C[0] = Number(value);
            setBookData(newBookData);
        } else if (question === "clarityOfClaim") {
            const newBookData = { ...bookData };
            newBookData.C[1] = Number(value);
            setBookData(newBookData);
        } else if (question === "focusOnUniqueness") {
            const newBookData = { ...bookData };
            newBookData.C[2] = Number(value);
            setBookData(newBookData);
        } else if (question === "curriculumAndSyllabus") {
            const newBookData = { ...bookData };
            newBookData.C[3] = Number(value);
            setBookData(newBookData);
        }
    };

    const handlePhysicalAppearanceRating = (value, id) => {
        const newBookData = { ...bookData };
        newBookData.D[id] = Number(value);
        setBookData(newBookData);
    };

    const handleSubjectMatterChange = (value, id) => {
        const newBookData = { ...bookData };
        newBookData.E[id] = Number(value);
        setBookData(newBookData);
    };

    const handleLanguageChange = (value, id) => {
        const newBookData = { ...bookData };
        newBookData.F[id] = Number(value);
        setBookData(newBookData);
    };

    const handleIllustrationsChange = (value, id) => {
        const newBookData = { ...bookData };
        newBookData.G[id] = Number(value);
        setBookData(newBookData);
    };
    const submitData = async function (data, callback) {
        console.log("DAfd");
        const requestOptions = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };

        console.log({ data });
        const responseDT = await fetch(POST_REVIEW_SUBMIT_URL, requestOptions);

        const responseJSON = await responseDT.json();
        callback(responseJSON);
    };
    const handleSubmit = () => {
        console.log(bookData);
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
                "Well-Structured table of Contents (Score out of 5)": null,
                "Inclusion of list of Abbreviations,index,etc. (Score out of 5)":
                    null,
                "Inclusion of summary (Score out of 5)": null,
                "Text is structured as chapter titles, headings, captions, text boxes (Score out of 5)":
                    null,
                "Inclusion of meaningful activities, tasks, and exercises (Score out of 5)":
                    null,
                "Appropriate topic distribution and sequencing (Score out of 5)":
                    null,
                "Highlighted Key words and Concepts (Score out of 5)": null,
                "Free from the mistakes and reiteration (Score out of 5)": null,
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
                    "Supported with authoritative (Score out of 5)": null,
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
                    "Content reveals clear meaning & thought-provoking": null,
                    "Content is focussed on the main idea and no diversions, no irrelevant content":
                        null,
                    "Definitions explained well with suitable examples": null,
                    "There are multiple perspectives and balanced viewpoints on issues":
                        null,
                    "There is no bias in content, such as over-generalisation and stereotyping":
                        null,
                    "The content and illustrations do not carry any form of discrimination on the grounds of gender, age, race, religion, culture, disability etc., nor do they suggest exclusion.":
                        null,
                    "Included appropriate resources for further reading": null,
                    "Bibliography, References & Citations": null,
                },
            },
            F: {
                "Is the language used in the text is simple?": null,
                "Usage of Standard Technical Terminology": null,
                "Usage of Standard Punctuation Marks & Symbols": null,
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
                "Visibility of Illustrations: Clarity and Resolution": null,
                "Visibility of Illustrations: Colour": null,
                "Visibility of Illustrations: Labelling": null,
                "Relevance to the content": null,
            },
        };
        const u = Object.values(bookData).flat();
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
        console.log({ ...bookData, PDFData, reviewerid, _id: id });
        submitData({ ...bookData, PDFData, reviewerid, _id: id }, (res) => {
            console.log("res :>> ", res);
            if (res) {
                setSuccessModalOpen(true);
            }
        });
    };
    const closeSuccessModal = () => {
        setSuccessModalOpen(false);
    };

    return (
        <>
            <Button onClick={onOpen} colorScheme="blue">Review</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="7xl">
                <ModalOverlay />
                <ModalContent pb={12}>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading
                            as="h1"
                            size="lg"
                            fontWeight="semibold"
                            textAlign="center"
                            my={6}
                        >
                            Review of {bookName}
                        </Heading>
                        <Tabs
                            variant="soft-rounded"
                            colorScheme="blue"
                            className="mx-10 border rounded px-2 py-4"
                            index={currentTab}
                            onChange={handleTabChange}
                        >
                            <TabList className="overflow-x-auto">
                                <Tab onClick={() => handleTabChange(0)}>
                                    Ethical Issues
                                </Tab>
                                <Tab onClick={() => handleTabChange(1)}>
                                    Authors
                                </Tab>
                                <Tab onClick={() => handleTabChange(2)}>
                                    Publisher
                                </Tab>
                                <Tab onClick={() => handleTabChange(3)}>
                                    Uniqueness
                                </Tab>
                                <Tab onClick={() => handleTabChange(4)}>
                                    Appearance
                                </Tab>
                                <Tab onClick={() => handleTabChange(5)}>
                                    Subject Matter
                                </Tab>
                                <Tab onClick={() => handleTabChange(6)}>
                                    Language
                                </Tab>
                                <Tab onClick={() => handleTabChange(7)}>
                                    Illustrations
                                </Tab>
                            </TabList>

                            <Divider
                                className="mt-4 mx-0"
                                borderColor="gray.300"
                            />

                            <TabPanels className="px-10">
                                <TabPanel>
                                    <EthicalIssues
                                        OnDataChange={handleEthicalIssuesChange}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <AuthorInfo
                                        OnDataChange={handleAuthorInfo}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <PublisherCredibility
                                        OnRadioChange={
                                            handlePublisherCredibilityChange
                                        }
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <UniquenessRating
                                        onDataChange={
                                            handleUniquenessRatingChange
                                        }
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <PhysicalAppearanceRating
                                        OnDataChange={
                                            handlePhysicalAppearanceRating
                                        }
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <SubjectMatter
                                        OnDataChange={handleSubjectMatterChange}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Language
                                        onDataChange={handleLanguageChange}
                                    ></Language>
                                </TabPanel>
                                <TabPanel>
                                    <Illustrations
                                        OnDataChange={handleIllustrationsChange}
                                    />
                                </TabPanel>
                            </TabPanels>

                            <Divider className="mb-4" />

                            <div className="mt-4 ">
                                <Button
                                    onClick={handlePrev}
                                    disabled={currentTab === 0}
                                    colorScheme="blue"
                                    variant="outline"
                                    className="mx-2"
                                >
                                    Previous
                                </Button>

                                {currentTab == 7 ? (
                                    <>
                                        <Button
                                            onClick={() => handleSubmit()}
                                            colorScheme="blue"
                                            variant="outline"
                                            className="mx-2"
                                        >
                                            Submit
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={handleNext}
                                            colorScheme="blue"
                                            variant="outline"
                                            className="mx-2"
                                        >
                                            Next
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <SuccessModal
                isOpen={successModalOpen}
                onClose={closeSuccessModal}
            />
        </>
    );
};

export default ReviewForm;
