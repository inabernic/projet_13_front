import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Transaction from "../pages/Transaction/Transaction";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


/**
 * La fonction App renvoie un div avec un en-tête, des itinéraires et un pied de page
 */
const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="user">
                    <Route path=":id" element={<Profile />} />
                </Route>
                <Route path="user/:id/account">
                    <Route path=":id" element={<Transaction />} />
                </Route>
                <Route path="/page-error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/page-error" />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;