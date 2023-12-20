import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import LogoutButton from "./LogOut";
import "./styles/Navbar.css";
const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const { user } = useAuthContext();

    const simple =
        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    const highlight =
        "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 w-full z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/img/logo.png"
                        className="w-8 h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        NCISM
                    </span>
                </a>
                <button
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                {user ? (
                    <p className="text-white">
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        's Login
                    </p>
                ) : null}
                <div
                    className={
                        menu
                            ? "w-full md:block md:w-auto"
                            : "hidden w-full md:block md:w-auto"
                    }
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center justify-center">
                        <li>
                            <a
                                href="/"
                                className={
                                    props.page === "home" ? highlight : simple
                                }
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                className={
                                    props.page === "about" ? highlight : simple
                                }
                            >
                                About
                            </a>
                        </li>

                        {user && user.role === "student" ? (
                            <>
                                <li>
                                    <a
                                        href="/book-reviews"
                                        className={
                                            props.page === "book-reviews"
                                                ? highlight
                                                : simple
                                        }
                                    >
                                        Book Reviews
                                    </a>
                                </li>
                            </>
                        ) : null}

                        {user && user.role === "author" ? (
                            <>
                                <li>
                                    <a
                                        href="/teacher"
                                        className={
                                            props.page === "author"
                                                ? highlight
                                                : simple
                                        }
                                    >
                                        Dashboard
                                    </a>
                                </li>
                            </>
                        ) : null}

                        {user && user.role === "reviewer" ? (
                            <>
                                <li>
                                    <a
                                        href="/reviewer"
                                        className={
                                            props.page === "reviewer"
                                                ? highlight
                                                : simple
                                        }
                                    >
                                        Dashboard
                                    </a>
                                </li>
                            </>
                        ) : null}

                        {user && user.role === "admin" ? (
                            <>
                                <li>
                                    <a
                                        href="/admin"
                                        className={
                                            props.page === "admin"
                                                ? highlight
                                                : simple
                                        }
                                    >
                                        Admin Dashboard
                                    </a>
                                </li>
                            </>
                        ) : null}
                        <li>
                            <a
                                href="/peer-to-peer"
                                className={
                                    props.page === "peer-to-peer"
                                        ? highlight
                                        : simple
                                }
                            >
                                Compare Books
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ai"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:shadow-lg"
                            >
                                <button className="nav-btn">Book Whisperer AI</button>
                            </a>
                        </li>



                        {!user ? (
                            <>
                                <li>
                                    <a
                                        href="/login"
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Login
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <LogoutButton />
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
