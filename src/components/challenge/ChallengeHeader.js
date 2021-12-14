import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { Link , NavLink} from 'react-router-dom';


function ChallengeHeader() {

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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" stroke="rgba(255, 255, 255, 1)" /></svg></span> </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item"> <NavLink exact to="/todo" className="nav-link" >Dashboard</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link" exact to="/wolfPack"> Wolf Pack</NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" exact to="/publicChallenge"> Public Challenges </NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" exact to="/history"> History</NavLink> </li>
                            <li className="nav-item"> <a className="nav-link" href="#"> About </a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#"> Create a Challenge </a> </li>
                            <li className="nav-item mb_link"> <a className="nav-link" href="#"> Profile </a> </li>
                            <li className="nav-item mb_link"> <a className="nav-link" href="#"> Settings</a> </li>
                            <li className="nav-item mb_link"> <a className="nav-link" href="#"> Logout </a> </li>



                            {/* 

                        <Dropdown>
                        <a variant="success" id="menu-btn" className="dropdown-toggle nav-index"  data-toggle="dropdown" aria-expanded="true">
                        <span className="user-load">John <img src={userIcon} alt="User Icon"/></span><i className="fa fa-angle-down">< FaAngleDown /></i>
                        </a>

                        <Dropdown.Menu>
                        <li className="border-0 p-0">
                            <Dropdown.Item href="#/action-1"> <a href="#"> <svg style={{width:"1.3rem"}}  aria-hidden="true" data-prefix="fas" data-icon="user-edit" className="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"/></svg>
                                Profile</a></Dropdown.Item>
                                </li>
                                <li className="border-0 p-0">
                            <Dropdown.Item href="#/action-1"> <a href="#"> <svg style={{width:"1.3rem"}}  aria-hidden="true" data-prefix="fas" data-icon="user-edit" className="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"/></svg>
                                Profile</a></Dropdown.Item>
                                </li>
                                <li className="border-0 p-0">
                            <Dropdown.Item href="#/action-1"> <a href="#"> <svg style={{width:"1.3rem"}}  aria-hidden="true" data-prefix="fas" data-icon="user-edit" className="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"/></svg>
                                Profile</a></Dropdown.Item>
                                </li>
                        </Dropdown.Menu>
                        </Dropdown> */}





                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle nav-index" id="menu-btn" data-toggle="dropdown" aria-expanded="true">
                                    <span className="user-load">John <img src="images/icon/user_icn.png" alt="User Icon" /></span><i className="fa fa-angle-down">< FaAngleDown /></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="border-0 p-0"><Link to="/profile">
                                        <svg style={{ width: "1.3rem" }} aria-hidden="true" data-prefix="fas" data-icon="user-edit" className="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z" /></svg>
                                        Profile</Link>
                                    </li>
                                    <li>
                                    <Link to="/wolfPack">
                                        <svg className="svg_area" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 24" style={{ enableBackground: "new 0 0 41 24" }} xmlSpace="preserve">
                                            <g>
                                                <path className="st0" d="M38,6.2l1.6-3.8l-0.3-0.8c-0.4-0.9-1.5-1.1-2.2-0.3c-1.1,1.3-2.5,2.9-3,3c-0.8,0.1-1.8,0.5-1.8,0.5   S30.4,7,29.2,7c-1.3,0-3.7,0-4.5,0.5c0,0,1.8,2.8,4.5,3.1c0,0-1.9,0.1-2.5,1.3c-0.6,1.2-1.3,11.6-5.5,11.7c0,0,6.7,1.5,8.9-1.7   L30,23.4c0,0,6.4,0.5,7.9-4.8l0.5,1.4c0,0,1.1-2,0.7-3.2l1.1,0.6c0,0,0.2-0.7-1-2.5c-1.2-1.8-1.6-4.1-0.6-5.6   c1.1-1.6,3.5-3.6,2.1-5.1L38,6.2z" />
                                                <path className="st1" d="M38.1,2.5c-1-0.2-0.3-1.1-0.3-1.1s0,0.8,0.6,0.8c0.4,0,0.6-0.4,0.8-0.8c-0.4-0.9-1.5-1-2.1-0.3   c-1.1,1.3-2.5,2.9-3,3c-0.8,0.1-1.8,0.5-1.8,0.5S30.4,7,29.2,7c-1.3,0-3.7,0-4.5,0.5c0,0,1.8,2.8,4.5,3.1c0,0-1.9,0.1-2.5,1.3   c-0.6,1.2-1.3,10.8-5,11.6c8.6-1.2,6-9.7,8.1-10.5c2.1-0.8,2.7-2.8,2.7-2.8l0.2,4c0.8-0.6,1.2-2.5,1.5-5.4   C34.3,6,38.1,2.5,38.1,2.5z" />
                                                <path className="st0" d="M33.1,5.2c0,0-1.1,0.9-1.4,1.5C31.7,6.6,33.1,7.3,33.1,5.2z" />
                                                <path className="st1" d="M40.6,4.2l-0.4,0.3c0.1,0.5,0.2,1.4-0.6,2.3c-1.2,1.4-3,2.9-2.4,5.5l0.4-0.5c0,0,0.3,2.9,1.2,4L38,15.4   c0,0,0.3,2.5,0.3,3.1l-0.5-1.8c0,0-0.2,5.4-7.7,6.7c0,0,6.4,0.5,7.9-4.8l0.5,1.4c0,0,1.1-2,0.7-3.2l1.1,0.6c0,0,0.2-0.7-1-2.5   c-1.2-1.8-1.6-4.1-0.6-5.6C39.6,7.7,42,5.6,40.6,4.2z" />
                                            </g>
                                            <g>	<path className="st0" d="M3.8,6.2L2.3,2.3l0.3-0.8C3,0.6,4.2,0.4,4.8,1.1c1.1,1.3,2.5,2.9,3,3c0.8,0.1,1.8,0.5,1.8,0.5S11.4,7,12.7,7   c1.3,0,3.7,0,4.5,0.5c0,0-1.8,2.8-4.5,3.1c0,0,1.9,0.1,2.5,1.3c0.6,1.2,1.3,11.6,5.5,11.7c0,0-6.7,1.5-8.9-1.7l0.2,1.5   c0,0-6.4,0.5-7.9-4.8L3.5,20c0,0-1.1-2-0.7-3.2l-1.1,0.6c0,0-0.2-0.7,1-2.5c1.2-1.8,1.6-4.1,0.6-5.6C2.3,7.7-0.1,5.6,1.3,4.2   L3.8,6.2z" />
                                                <path className="st1" d="M3.7,2.5C4.7,2.2,4,1.4,4,1.4s0,0.8-0.6,0.8C3,2.2,2.8,1.8,2.7,1.4c0.4-0.9,1.5-1,2.1-0.3c1.1,1.3,2.5,2.9,3,3   c0.8,0.1,1.8,0.5,1.8,0.5S11.4,7,12.7,7c1.3,0,3.7,0,4.5,0.5c0,0-1.8,2.8-4.5,3.1c0,0,1.9,0.1,2.5,1.3c0.6,1.2,1.3,10.8,5,11.6   c-8.6-1.2-6-9.7-8.1-10.5c-2.1-0.8-2.7-2.8-2.7-2.8l-0.2,4C8.4,13.6,8,11.7,7.8,8.9C7.5,6,3.7,2.5,3.7,2.5z" />
                                                <path className="st0" d="M8.7,5.2c0,0,1.1,0.9,1.4,1.5C10.2,6.6,8.7,7.3,8.7,5.2z" />
                                                <path className="st1" d="M1.3,4.2l0.4,0.3C1.6,5,1.5,5.9,2.3,6.8c1.2,1.4,3,2.9,2.4,5.5l-0.4-0.5c0,0-0.3,2.9-1.2,4l0.7-0.4   c0,0-0.3,2.5-0.3,3.1l0.5-1.8c0,0,0.2,5.4,7.7,6.7c0,0-6.4,0.5-7.9-4.8L3.5,20c0,0-1.1-2-0.7-3.2l-1.1,0.6c0,0-0.2-0.7,1-2.5   c1.2-1.8,1.6-4.1,0.6-5.6C2.3,7.7-0.1,5.6,1.3,4.2z" />
                                            </g>
                                        </svg>  Wolf Pack
                                    </Link>
                                    </li>
                                    <li><Link to="/history">
                                        <svg className="svg_area" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 100 100" }} xmlSpace="preserve">
                                            <path className="st0" d="M53.5,6.2C29.4,6.2,9.7,25.8,9.7,50H2.6l12.6,15.8L27.8,50h-9.1c0-19.2,15.6-34.8,34.8-34.8  c19.2,0,34.8,15.6,34.8,34.8S72.7,84.8,53.5,84.8c-9.4,0-18.2-3.7-24.8-10.3l-6.4,6.3c8.3,8.4,19.4,13,31.2,13  c24.2,0,43.8-19.7,43.8-43.8S77.7,6.2,53.5,6.2z M49,27v25.2l14.4,11.5l5.6-7l-11-8.8V27H49z" />
                                        </svg>  History

                                    </Link>
                                    </li>
                                    <li><a href="#">
                                        <svg style={{ width: "1rem" }} aria-hidden="true" data-prefix="fas" data-icon="key" className="svg-inline--fa fa-key fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" /></svg>
                                        &nbsp;Settings</a></li>
                                    <li><a href="#">
                                        <svg style={{ width: "1rem" }} aria-hidden="true" data-prefix="fas" data-icon="power-off" className="svg-inline--fa fa-power-off fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" /></svg>
                                        &nbsp;Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="clearfix"></div>
        </>
    )
}

export default ChallengeHeader
