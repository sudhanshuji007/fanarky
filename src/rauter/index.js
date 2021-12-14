import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../sass/custom/_custom.scss';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Challenge from '../components/challenge/Challenge';
import Profile from '../components/profile/Profile';
import WolfPack from '../components/wolfPack/WolfPack';
import History from '../components/history/History';
import  PublicChallenge from '../components/publicChallenge/PublicChallenge';
import  ToDoForm from '../components/todo/ToDoForm';
import NotFound from '../components/notfound/NotFound'




function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/challenge" element={<Challenge />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wolfPack" element={<WolfPack />} />
                <Route path="/history" element={<History />} />
                <Route path="/publicChallenge" element={<PublicChallenge />} />
                <Route path="/todo" element={<ToDoForm />} />
                <Route element={<NotFound/>} />


            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default index
