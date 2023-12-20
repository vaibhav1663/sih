import "./App.css";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./Components/Signup";
import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home.jsx";
import "react-toastify/dist/ReactToastify.css";
import ReviewForm from "./Components/ReviewForm.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import SuggestBook from "./Components/SuggestBook.jsx";
import AddReviewer from "./Components/Admin/AddReviewer.jsx";

import About from "./Components/About.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookReviews from "./Components/BookReviews.jsx";
import Book from "./Components/Book.jsx";
import { AuthContextProvider } from "./Context/AuthContext.js";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import AdminBook from "./Components/Admin/Book.jsx";
import PDF from "./Components/Admin/review/pdf.jsx";
import ReviewerDashboard from "./Components/ReviewerDashboard.jsx";
import TeacherDashboard from "./Components/TeacherDashboard.jsx";
import AI from "./Components/AI.jsx";
import PeerToPeer from "./Components/PeertoPeer.jsx";
import { useEffect } from "react";

function App() {
    const { user } = useAuthContext();
    return (
        <Router>
            <ChakraProvider>
                <div className="App">
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/ai" element={<AI />} />
                        {/* Admin Routes */}
                        <Route path="/admin" element={JSON.parse(localStorage.getItem("user"))?.role === "admin" ? <AdminDashboard /> : <>You must be Admin and logged in to access admin route <a href="/login" className="text-sky-500	">login</a></>} />
                        <Route path="/admin/book/:id" element={JSON.parse(localStorage.getItem("user"))?.role == 'admin' ? <AdminBook /> : <>You must be Admin and logged in to access admin route <a href="/login" className="text-sky-500	">login</a></>} />
                        <Route
                            path="/admin/addReviewer"
                            element={JSON.parse(localStorage.getItem("user"))?.role == 'admin' ? <AddReviewer /> : <>You must be Admin and logged in to access admin route <a href="/login" className="text-sky-500	">login</a></>}
                        />
                        <Route
                            path="/admin/book/:bookID/review/:reviewerID"
                            element={JSON.parse(localStorage.getItem("user"))?.role == 'admin' ? <PDF /> : <>You must be Admin and logged in to access admin route <a href="/login" className="text-sky-500	">login</a></>}
                        />

                        {/* Reviewer Routes */}
                        <Route
                            path="/reviewer"
                            element={JSON.parse(localStorage.getItem("user"))?.role == 'reviewer' ? <ReviewerDashboard /> : <>You must be Reviewer and logged in to access reviewer route <a href="/login" className="text-sky-500	">login</a></>}
                        />
                        <Route path="/review" element={JSON.parse(localStorage.getItem("user"))?.role == 'reviewer' ? <ReviewForm /> : <>You must be Reviewer and logged in to access reviewer route <a href="/login" className="text-sky-500	">login</a></>} />

                        {/* Teacher Routes */}
                        <Route path="/teacher" element={JSON.parse(localStorage.getItem("user"))?.role == 'author' ? <TeacherDashboard /> : <>You must be Reviewer and logged in to access reviewer route <a href="/login" className="text-sky-500	">login</a></>} />

                        {/* Student Routes */}
                        <Route
                            path="/book-reviews"
                            element={
                                // <ProtectedRoute allowedRoles={["student"]}>
                                <BookReviews />
                                // </ProtectedRoute>
                            }
                        />
                        <Route path="/book/:id" element={<Book />} />

                        <Route
                            path="/peer-to-peer"
                            element={
                                <PeerToPeer />
                            } />

                        <Route
                            path="/*"
                            element={
                                <Login />
                            } />

                    </Routes>
                </div>
            </ChakraProvider>
        </Router>
    );
}

export default App;
