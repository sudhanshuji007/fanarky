import React from 'react';
import ChallengeHeader from '../challenge/ChallengeHeader';
  


function PublicChallenge() {
    return (
        <>
        <ChallengeHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="challenger-card-box  public_challenges">
                            <div className="game-card-block">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="history-head-block">
                                            <h4 className="table-challenges-title">
                                                <span>26</span> Challenges
                                            </h4>
                                            <div className="dropdown show cst-dropdown">
                                                <a className="btn  cst-dropdown-btn btn-red btn_rd dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Filter by Sports <i className="fa fa-angle-down"></i>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider-img">
                                <img src="images/icon/divider.png" alt="Divider"/>
                            </div>
                            <div className="clearfix"></div>
                            <div className="table-block history-block">
                                <div className="challenge-outer">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card game-category-card">
                                                <div className="card-body">
                                                    <span className="active_status_left"><i className="fa fa-check text-success"></i></span>
                                                    <h6 className="card-body-headding">College Football</h6>
                                                    <p className="card-body-para">If New Jersey Devils lose I will paint my Car, If New Jersey Devils Car</p>
                                                    <div className="user-profile-img">
                                                        <div className="media">
                                                            <img className="profile-circle-img border-0" src="images/icon/user_profile.jpg" alt="User Defalt" />
                                                            <div className="media-body">
                                                            <h6 className="profile-title">Challenger</h6>
                                                            <p className="user-name">james</p>
                                                            </div>
                                                            <span className="date-time">July 29 - 11: 00 AM</span>
                                                        </div>
                                                        <ul className="table-list cards-table-list-items">
                                                            <li className="red-wing-img">
                                                                <p className="img_p"><img src= "images/icon/wings-roundad-img.png" alt="Wings Rounded"/></p>
                                                                <p className="content-pt">Detroit Red<br/>Wings</p>
                                                            </li>
                                                            <li className="vs-position">VS</li>
                                                            <li className="devil-img">
                                                                <p className="img_p"><img src= "images/icon/devils-roundad-img.png" alt="Devils Round" /></p>
                                                                <p className="content-pt">New Jersey<br/> Devils</p>
                                                            </li>
                                                        </ul>
                                                        <div className="form-btn-dv profile-form-btn-dv">
                                                            <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accept challenge</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card game-category-card">
                                                <div className="card-body">
                                                    <span className="active_status_right"><i className="fa fa-check text-success"></i></span>
                                                    <h6 className="card-body-headding">NHL</h6>
                                                    <p className="card-body-para">If Philadelphia Flyers lose I will Shave my Head Philadelphia Flyers</p>
                                                    <div className="user-profile-img">
                                                        <div className="media">
                                                            <img className="profile-circle-img border-0" src="images/icon/blue-sw-img.png" alt="Blue" />
                                                            <div className="media-body">
                                                            <h6 className="profile-title">Challenger</h6>
                                                            <p className="user-name">Stive W</p>
                                                            </div>
                                                            <span className="date-time">July 29 - 03: 10 AM</span>
                                                        </div>
                                                        <ul className="table-list cards-table-list-items">
                                                            <li className="red-wing-img">
                                                                <p className="img_p"><img src="images/icon/Columbus.png" alt="Columbus" /></p>
                                                                <p className="content-pt">Columbus<br/>Blue Jackets</p>
                                                            </li>
                                                            <li className="vs-position">VS</li>
                                                            <li className="devil-img">
                                                                <p className="img_p"><img src="images/icon/Philadelphia.png" alt="Philadelphia"/></p>
                                                                <p className="content-pt">Philadelphia<br/>Flyers</p>
                                                            </li>
                                                        </ul>
                                                        <div className="form-btn-dv profile-form-btn-dv">
                                                            <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accepted</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card game-category-card">
                                                <div className="card-body">
                                                    <h6 className="card-body-headding">College Basketball</h6>
                                                    <p className="card-body-para">If Surrey Country Club lose I will paint my Car</p>
                                                    <div className="user-profile-img">
                                                        <div className="media">
                                                            <img className="profile-circle-img border-0" src="images/icon/user_profile.jpg" alt="User"/>
                                                            <div className="media-body">
                                                            <h6 className="profile-title">Challenger</h6>
                                                            <p className="user-name">Travis H</p>
                                                            </div>
                                                            <span className="date-time">July 29 - 08: 00 AM</span>
                                                        </div>
                                                        <ul className="table-list cards-table-list-items">
                                                            <li className="red-wing-img">
                                                                <p className="img_p"><img src="images/icon/Surrey.png"  alt="Surrey"/></p>
                                                                <p className="content-pt">Surrey<br/>Country Club</p>
                                                            </li>
                                                            <li className="vs-position">VS</li>
                                                            <li className="devil-img">
                                                                <p className="img_p"><img src="images/icon/Essex.png"  alt="Esser" /></p>
                                                                <p className="content-pt">Essex<br/> County</p>
                                                            </li>
                                                        </ul>
                                                        <div className="form-btn-dv profile-form-btn-dv">
                                                            <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accept challenge</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card game-category-card">
                                                <div className="card-body">
                                                    <h6 className="card-body-headding">NFL</h6>
                                                    <p className="card-body-para">If New England Patriots lose I will paint my Face</p>
                                                    <div className="user-profile-img">
                                                        <div className="media">
                                                            <img className="profile-circle-img border-0" src= "images/icon/user_profile2.jpg" alt="User Profile"/>
                                                            <div className="media-body">
                                                            <h6 className="profile-title">Challenger</h6>
                                                            <p className="user-name">Andrew P</p>
                                                            </div>
                                                            <span className="date-time">July 30 - 09: 00 AM</span>
                                                        </div>
                                                        <ul className="table-list cards-table-list-items">
                                                            <li className="red-wing-img">
                                                                <p className="img_p"><img src="images/icon/New-England.png" alt="New England" /></p>
                                                                <p className="content-pt">New England<br/>Patriots</p>
                                                            </li>
                                                            <li className="vs-position">VS</li>
                                                            <li className="devil-img">
                                                                <p className="img_p"><img src="images/icon/Dallas.png" alt="Dallas" /></p>
                                                                <p className="content-pt">Dallas<br/>Cowboys</p>
                                                            </li>
                                                        </ul>
                                                        <div className="form-btn-dv profile-form-btn-dv">
                                                            <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accept challenge</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card game-category-card">
                                                <div className="card-body">
                                                    <h6 className="card-body-headding">NHL</h6>
                                                    <p className="card-body-para">If Philadelphia Flyers lose I will Shave my Head</p>
                                                    <div className="user-profile-img">
                                                        <div className="media table-user-profile">
                                                            <img className="profile-circle-img border-0" src="images/icon/img6.png" alt="img 6" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_light_blue.png" alt="Sticker Light"/>
                                                            <div className="media-body">
                                                            <h6 className="profile-title">Challenger</h6>
                                                            <p className="user-name">Rogan R</p>
                                                            </div>
                                                            <span className="date-time">July 31 - 10: 10 AM</span>
                                                            </div>
                                                            <ul className="table-list cards-table-list-items">
                                                            <li className="red-wing-img">
                                                            <p className="img_p"><img src="images/icon/Columbus.png" alt="Columbus"/></p>
                                                            <p className="content-pt">New York<br/>Islanders</p>
                                                            </li>
                                                            <li className="vs-position">VS</li>
                                                            <li className="devil-img">
                                                            <p className="img_p"><img src="images/icon/tampa.png" alt="Tampa"/></p>
                                                            <p className="content-pt">Tampa Bay<br/>Lightning</p>
                                                            </li>
                                                            </ul>
                                                            <div className="form-btn-dv profile-form-btn-dv">
                                                            <button type ="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accept challenge</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card game-category-card">
                                                    <div className="card-body">
                                                        <h6 className="card-body-headding">NBA</h6>
                                                        <p className="card-body-para">If Atlanta Hawks lose I will paint my Face</p>
                                                        <div className="user-profile-img">
                                                            <div className="media">
                                                                <img className="profile-circle-img border-0" src="images/icon/user_profile.jpg" alt="User"/>
                                                                <div className="media-body">
                                                                <h6 className="profile-title">Challenger</h6>
                                                                <p className="user-name">Justin A</p>
                                                                </div>
                                                                <span className="date-time">Aug 02 - 10: 05 AM</span>
                                                            </div>
                                                            <ul className="table-list cards-table-list-items">
                                                                <li className="red-wing-img">
                                                                    <p className="img_p"><img src="images/icon/Atlanta.png" alt="Atlanta"/></p>
                                                                    <p className="content-pt">Atlanta<br/>Hawks</p>
                                                                </li>
                                                                <li className="vs-position">VS</li>
                                                                <li className="devil-img">
                                                                    <p className="img_p"><img src="images/icon/Miami.png" alt="Miami"/></p>
                                                                    <p className="content-pt">Miami<br/> Heat</p>
                                                                </li>
                                                            </ul>
                                                            <div className="form-btn-dv profile-form-btn-dv">
                                                                <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">Accept challenge</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_bg">
                                        <span>Your add <br />Place here</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btm_add">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="add_bg">
                                    <span>Your add <br />Place here</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="add_bg">
                                    <span>Your add <br />Place here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default PublicChallenge
