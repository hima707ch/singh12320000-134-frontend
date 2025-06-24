import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import MovieListPage from "./MovieListPage/Body.jsx";
import MovieDetailPage from "./MovieDetailPage/Body.jsx";
import BookingPage from "./BookingPage/Body.jsx";
import UserProfilePage from "./UserProfilePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movielistpage" element={<MovieListPage />} />
        <Route path="/moviedetailpage" element={<MovieDetailPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/userprofilepage" element={<UserProfilePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default Body;