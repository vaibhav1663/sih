import React from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from "../hooks/useLogout"
import Navbar from "./Navbar";
import Carousel from "./Carousel/Carousel";
import BookCard from "./Carousel/BookCard";
import About from "./Carousel/About";
import Info from "./Carousel/Info";
import Footer from "./Carousel/Footer";

const Home = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext()
  
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen">
                <Navbar page="home"/>
                <Carousel/>
            </div>
                <About></About>
            <div className="mt-28">
                <BookCard></BookCard>
            </div>
            <Info></Info>
            <Footer></Footer>
        </>
    );
};

export default Home;
