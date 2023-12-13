import React from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from "../hooks/useLogout"
const Home = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext()
  
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <Navbar page="home"/>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>
            <div className="d-grid gap-2">
                <button variant="primary" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </>
    );
};

export default Home;