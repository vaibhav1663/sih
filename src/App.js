import "./App.css";
import Login from "./Components/Login";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./Components/Signup";
import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReviewForm from "./Components/ReviewForm.jsx";
import AdminLogin from "./Components/LoginForms/AdminLogin.jsx";
import ReviewerLogin from "./Components/LoginForms/ReviewerLogin.jsx";

import About from "./Components/About.jsx";
function App() {
  return (
    <Router>
      <UserAuthContextProvider>
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
              <Route path="/test" element={<ReviewForm />} />
              <Route path="/adminLogin" element={<AdminLogin />} />
              <Route path="/reviewerLogin" element={<ReviewerLogin />} />

            </Routes>
          </div>
        </ChakraProvider>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
