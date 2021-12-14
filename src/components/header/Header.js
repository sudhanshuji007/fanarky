import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [header, setHeader] = useState(false);
    const stickyHeader = () => {
        if (window.scrollY > 0) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }
    window.addEventListener('scroll', stickyHeader);
    return (
        <>
            <header className={header ? 'sticky' : ' '}>
                <nav className="navbar navbar-expand-lg navbar-light"> <a className="navbar-brand" href="#"><img src="images/icon/logo-fanarky.svg" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" stroke="rgba(255, 255, 255, 1)"></path></svg></span> </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item"> <NavLink className="nav-link" to="/login">Login</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link" to="register">Register</NavLink> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
