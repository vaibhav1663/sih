import './App.css';
import Login from './Components/Login';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from "./Components/Home.jsx";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <div className="App">
          <ToastContainer/>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
