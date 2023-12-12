import "./App.css";
import Login from "./Components/Login";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About.jsx";
import Admin from "./Components/Admin.jsx";
import BookReviews from "./Components/BookReviews.jsx";
import Book from "./Components/Book.jsx";

function App() {
    return (
        <Router>
            <UserAuthContextProvider>
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
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <ProtectedRoute>
                                    <About />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/book-reviews" element={<BookReviews />} />
                        <Route path="/book/:id" element={<Book />} />
                    </Routes>
                </div>
            </UserAuthContextProvider>
        </Router>
    );
}

export default App;
