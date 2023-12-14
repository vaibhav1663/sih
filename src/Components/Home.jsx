import React from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

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
            <div className="h-screen">
                <Navbar page="home"/>
                <Carousel></Carousel>
            </div>
            <div className="mt-28">
                <BookCard></BookCard>
            </div>
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