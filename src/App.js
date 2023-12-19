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
import ReviewerDashboard from "./Components/ReviewerDashboard.jsx";
import TeacherDashboard from "./Components/TeacherDashboard.jsx";
import AI from "./Components/AI.jsx";

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
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/admin/book/:id" element={<AdminBook />} />

                        {/* Reviewer Routes */}
                        <Route
                            path="/reviewer"
                            element={<ReviewerDashboard />}
                        />
                        <Route path="/review" element={<ReviewForm />} />

                        {/* Teacher Routes */}
                        <Route path="/teacher" element={<TeacherDashboard />} />

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
                    </Routes>
                </div>
            </ChakraProvider>
        </Router>
    );
}

export default App;
