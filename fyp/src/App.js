import About from "./Components/About";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Registration from "./Components/Registration";
import Checkout from "./Components/Checkout";
import Movie from "./Components/Movie";
import Cart from "./Components/Booking";
import { useContext, useState, useEffect } from "react";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import axios from "axios";
import { AuthContext } from "./helpers/AuthContext";
import Booking from "./Components/Booking";
import AddMovie from "./Components/AddMovie";

function App() {
    const [authState, setAuthState] = useState({
        username: "",
        email: "",
        id: 0,
        password: "",
        status: false,
        isVerified: false,
    });

    useEffect(() => {
        axios
            .get("http://localhost:3001/users/auth", {
                headers: {
                    accessTokenFromFrontend: localStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                if (response.data.error) {
                    setAuthState({...authState, status: false });
                } else {
                    // alert("User" + response.data.username);
                    setAuthState({
                        username: response.data.username,
                        id: response.data.id,
                        email: response.data.email,
                        password: response.data.password,
                        isVerified: response.data.isVerified,
                        status: true,
                    });
                }
            });
    });

    return ( <
        AuthContext.Provider value = {
            { authState, setAuthState } } >
        <
        Router >
        <
        div >
        <
        Nav / >
        <
        CartProvider >
        <
        Routes >
        <
        Route path = "/about"
        element = { < About / > }
        />{" "} <
        Route path = "/menu"
        element = { < Movie / > }
        />{" "} {
            authState.status && ( <
                >
                <
                Route path = "/cart"
                element = { < Booking / > }
                />{" "} <
                Route path = "/book/:id"
                element = { < Checkout / > } > < /Route> <
                Route path = "/addMovie"
                element = { < AddMovie / > } > < /Route> <
                />
            )
        } { " " } <
        Route path = "/"
        element = { < Home / > }
        />{" "} {
            !authState.status && ( <
                >
                <
                Route path = "/login"
                element = { < Login / > } > { " " } <
                /Route>{" "} <
                Route path = "/register"
                element = { < Registration / > } > { " " } <
                /Route>{" "} <
                />
            )
        } { " " } <
        /Routes>{" "} <
        /CartProvider>{" "} <
        Footer / >
        <
        /div>{" "} <
        /Router>{" "} <
        /AuthContext.Provider>
    );
}
export default App;