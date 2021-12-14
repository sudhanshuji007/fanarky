import React from 'react';
import Banner from './Banner';
import Play from './Play';
import Sports from './Sports';
import Challenges from './Challenges';
import Header from "../header/Header";

function Home() {
    return (
        <>
            <div className="home">
                <div id="wrap">
                    <Header />
                    <Banner />
                    <Play />
                    <Sports />
                    <Challenges />
                </div>
            </div>
        </>
    )
}

export default Home;
