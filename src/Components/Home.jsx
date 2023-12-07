import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import Navbar from "./Navbar";

const Home = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <Navbar />
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