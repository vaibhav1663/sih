import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Select,
  Input,
  Button,
  Textarea,
  Stack,
  Box,
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
import { IoBookSharp } from "react-icons/io5";
import { Navigate } from "react-router-dom";
const ADD_RECOMMMENDATION_URL =
  "http://localhost:5000/author/addRecommendation";
const REVISE_RECOMMMENDATION_URL =
  "http://localhost:5000/author/revise";

const SuccessModal = ({ isOpen, onClose, handleExplore, referenceNumber }) => (
  <AlertDialog isOpen={isOpen} onClose={onClose}>
    <AlertDialogOverlay />

    <AlertDialogContent>
      <AlertDialogHeader fontSize="2xl" fontWeight="bold" mx="auto" mt={2}>
        Book Recommendation Successful
      </AlertDialogHeader>

      {/* <AlertDialogCloseButton /> */}

      <AlertDialogBody textAlign="center">
        Thank you for your recommendation!
        <br />
        Your Request Reference Number is <b>{referenceNumber}</b>.
      </AlertDialogBody>

      <AlertDialogFooter>
        <Button colorScheme="teal" onClick={handleExplore} className="mx-auto">
          Keep Exploring
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

const SuggestBook = ({ recommenderID, bookID, revise }) => {
  const navigate = useNavigate();
  let teacherID = recommenderID;
  const [discipline, setDiscipline] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [buyLink, setBuyLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const [bookInfo, setBookInfo] = useState({});
  //   const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validateForm = () => {
    if (!discipline) {
      setError("Please select a Discipline");
      return false;
    }

    if (!title.trim()) {
      setError("Please enter the book title");
      return false;
    }
    if (!author.trim()) {
      setError("Please enter the book author");
      return false;
    }

    if (!description.trim()) {
      setError("Please enter a book description");
      return false;
    }

    if (!previewLink.trim()) {
      setError("Please enter a Preview link of the book");
      return false;
    }

    if (!imageLink.trim()) {
      setError("Please enter a Image Link of the book");
      return false;
    }

    if (!buyLink.trim()) {
      setError("Please enter a Buy link of the book");
      return false;
    }
    return true;
  };

  const submitData = async function (data, callback) {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };

  let apiUrl = ADD_RECOMMMENDATION_URL;

  if (revise) {
    apiUrl = REVISE_RECOMMMENDATION_URL;
  }

  if (revise) {
    data.bookID = bookID;
  }

  const responseDT = await fetch(apiUrl, requestOptions);

  const responseJSON = await responseDT.json();
  console.log(responseJSON);
  callback(responseJSON);
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    const bookData = {
  name: title + " - " + author,
  desc: description,
  imageLink,
  previewLink,
  buyLink,
};

if (revise) {
  bookData._id = bookID;
} else {
  bookData.recomendedBy = teacherID;
}


    console.log(bookData);
    setBookInfo(bookData);

    submitData(bookInfo, (ref) => {
      console.log(">>>", ref);
      if ("error" in ref) {
        setError(ref.error);
      } else {
        setReferenceNumber(ref.referenceId);
        setSuccessModalOpen(true);
      }
    });

    onClose();
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleExplore = () => {
    navigate("/book-reviews");
  };
  return (
    <>
      <Button
        colorScheme="blue"
        className="hover:bg-blue-200 px-4 py-2"
        onClick={onOpen}
      >
        {revise? (<>Revise</>):(<>Recommend a Book</>)}
        
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                pt={10}
                pb={6}
                justifyContent="center"
                alignItems="center"
              >
                <IoBookSharp className="text-8xl text-blue-400" />

                <Heading className="mb-6 text-blue-400">
                  Recommend a Book
                </Heading>

                <FormControl>
                  <Select
                    value={discipline}
                    onChange={(e) => {
                      setDiscipline(e.target.value);
                      setError("");
                    }}
                    className="mb-3"
                  >
                    <option value="" disabled>
                      Select Discipline
                    </option>
                    <option value="ayurveda">Ayurveda</option>
                    <option value="unani">Unani</option>
                    <option value="siddha">Siddha</option>
                    <option value="sowarigpa">Sowa-Rigpa</option>
                  </Select>

                  <Input
                    placeholder="Title"
                    size="md"
                    className="mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder="Author"
                    size="md"
                    className="mb-2"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />

                  <Textarea
                    height="8rem"
                    maxH="8rem"
                    placeholder="Description"
                    size="md"
                    className="mb-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <label
                    htmlFor="formFile"
                    className="mb-2 ml-2 inline-block text-neutral-700"
                  >
                    Upload Book Options
                  </label>

                  {/* <input
                    className="relative m-0 mb-2 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-500 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                    type="file"
                    id="formFile"
                    onChange={(e) => setFile(e.target.files[0])}
                  /> */}

                  <Input
                    placeholder="Buy Link of the Book (eg. Amazon & Flipkart)"
                    id="buyLink"
                    className="mb-3"
                    value={buyLink}
                    onChange={(e) => setBuyLink(e.target.value)}
                  />
                  <Input
                    placeholder="Image Link of the Book"
                    id="imageLink"
                    className="mb-3"
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                  />
                  <Input
                    placeholder="Preview Link of the Book (eg. Google Books)"
                    id="previewLink"
                    className="mb-3"
                    value={previewLink}
                    onChange={(e) => setPreviewLink(e.target.value)}
                  />
                </FormControl>

                {error && (
                  <Box color="red.500" fontSize="sm" mb={4}>
                    {error}
                  </Box>
                )}

                <Button
                  borderRadius={4}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  className="hover:bg-blue-200 px-4 py-2"
                  width="full"
                >
                  Recommend
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <SuccessModal
        referenceNumber={referenceNumber}
        isOpen={successModalOpen}
        onClose={closeSuccessModal}
        handleExplore={handleExplore}
      />
    </>
  );
};

export default SuggestBook;
