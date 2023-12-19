import React from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Navbar from "./Navbar";
import Carousel_loop from "./Carousel/Carousel_loop";
import BookCard from "./Carousel/BookCard";
import About from "./Carousel/About";
import Footer from "./Carousel/Footer";
import CarouselDefault from "./Carousel/Carousel";

let slides = [
    {
        imglink: "./img/img1.jpg",
        heading: "National Commission for Indian System of Medicine",
        para: "The Aims and objectives of the National Commission for Indian System of Medicine are toimprove access to quality and affordable Ayurveda, Unani, Siddha and Sowa-Rigpa (AUS&SR) medical education",
    },
    {
        imglink: "./img/img2.jpg",
        heading: "Textbook Quality Assessment Scale",
        para: "Acharya Charaka states a good medical text with pure knowledge enlightens the whole subject in the manner how sun eliminates darkness and spreads brightness",
    },
    {
        imglink: "./img/img3.jpg",
        heading: "Textbook Quality Assessment Scale",
        para: "Acharya Charaka states a good medical text with pure knowledge enlightens the whole subject in the manner how sun eliminates darkness and spreads brightness",
    },
    {
        imglink: "./img/img4.jpg",
        heading: "Textbook Quality Assessment Scale",
        para: "Acharya Charaka states a good medical text with pure knowledge enlightens the whole subject in the manner how sun eliminates darkness and spreads brightness",
    },
];

const Home = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen">
                <Navbar page="home" />
                <CarouselDefault slides={slides}></CarouselDefault>
            </div>
            <About></About>
            <div className="mt-28">
                <BookCard></BookCard>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;
