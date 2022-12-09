import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../features/Login/Login";
import Header from "../features/Header/Header";
import Profile from "../features/Profile/Profile";
import Transaction from "../pages/Transaction/Transaction";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Footer from "../components/Footer/Footer";


/*  App function returns a div with header, routes and footer */
const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />

                {/*  <Route path="user">
                    <Route path=":id" element={<Profile />} />
                </Route> */}
                <Route path="/user/:id" element={<Profile />} />

                {/*    <Route path="user/:id/account">
                        <Route path=":id" element={<Transaction />} />
                    </Route> */}
                <Route path="/user/:id/account" element={<Transaction />} />


                <Route path="/page-error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/page-error" />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;