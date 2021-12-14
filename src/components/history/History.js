import React from 'react';
import ChallengeHeader from '../challenge/ChallengeHeader';
import { FaAngleDown , FaCheck} from "react-icons/fa";

function History() {
    return (
        <>
            <ChallengeHeader />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="challenger-card-box history-block">
                            <div className="game-card-block">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="history-head-block">
                                            <h4 className="table-challenges-title">
                                                <span>All</span> Challenges
                                            </h4>
                                            <div className="dropdown show cst-dropdown">
                                                <a className="btn  cst-dropdown-btn btn-red btn_rd dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    all  <i className="fa fa-angle-down down-arrow">< FaAngleDown /></i>
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
                                <img src="images/icon/divider.png" alt="Divider" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="table-block challenge_table_block pt_mobile">
                                <div className="table-responsive">
                                    <table className="table table-hover bounty-table-hover">
                                        <thead>
                                            <tr>
                                                <th className="challenge-create-th-block" scope="col">Challenge Creator</th>
                                                <th className="game-th-block" scope="col">Game</th>
                                                <th className="challenge-th-block" scope="col">Challenge</th>
                                                <th scope="col">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <div className="table-user-profile">
                                                            <img className="profile-img border-0 challenger-creater-img" src="images/icon/user-profile.pn"i alt="User" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_yellow.png" alt="Sticker" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> you</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/red_wing.png" alt="Red Wing" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                            <span className="selected_team_left"><i className="fa fa-check"><FaCheck/></i></span>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If Detroit Red Wings lose I will paint my car red</td>
                                                <td className="status-text-rd won-black">lost</td>
                                            </tr>
                                            <tr style={{height:'20px'}} className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block"><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <img className="profile-img border-0 challenger-creater-img" src="images/icon/blue-sw-img.png" al="Blue" />
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> Stive Witt</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/ic_flayer.png" alt="Flayer" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/star.png" alt="Star" /></p>
                                                            <p className="content-pt">Columbus Blue Jactets</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If Philadelphia Flyers lose I will shave my head</td>
                                                <td className="status-text-rd">WON</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <div className="table-user-profile">
                                                            <img className="profile-img border-0 challenger-creater-img" src="images/icon/user-profile.png" alt="User" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_yellow.png" alt="Sticker" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> you</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/red_wing.png" alt="Red Wing" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                            <span className="selected_team_right"><i className="fa fa-check"><FaCheck/></i></span>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If Detroit Red Wings lose I will paint my car red</td>
                                                <td className="status-text-rd">WON</td>
                                            </tr>
                                            <tr style={{height:'20px'}}  className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <img className="profile-img border-0 challenger-creater-img" src="images/icon/user-profile.png" alt="User Defalt" />
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> Jonny Smart</h5>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/ic_flayer.png" alt="Flayer" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If New Jersey Devils lose I will ask to run with me</td>
                                                <td className="status-text-rd won-black">wash</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <div className="table-user-profile">
                                                            <img className="profile-img border-0 challenger-creater-img" src="images/icon/yellow-bg-img.png" alt="Yellow" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_blue.png" alt="Sticker Blue" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> Jeniffer Wyatt</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/ic_flayer.png" alt="Flayer" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If Philadelphia Flyers wins I will ask to bike race</td>
                                                <td className="status-text-rd">WON</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <div className="table-user-profile">
                                                            <img className="profile-img border-0 challenger-creater-img" src="images/icon/user-profile.png" alt="User" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_yellow.png" alt="Sticker" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> you</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/red_wing.png" alt="Red Wing" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge</span>If Detroit Red Wings lose I will paint my car red</td>
                                                <td className="status-text-rd text-rd">won</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"> </tr>
                                            <tr>
                                                <td className="other-challenges-block"><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <img className="profile-img border-0 challenger-creater-img" src="images/icon/user_profile.jpg" alt="User Profile" />
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> John Smith</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/ic_flayer.png" alt="Flayer" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge Creator</span>If New Jersey Devils lose I will paint my car</td>
                                                <td className="status-text-rd won-black">lost</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"></tr>
                                            <tr>
                                                <td className="other-challenges-block "><span className="table_mob">Challenge Creator</span>
                                                    <div className="media">
                                                        <div className="table-user-profile">
                                                            <img className="profile-img border-0 challenger-creater-img" src="images/icon/user-profile.png" alt="User Profile" />
                                                            <img className="sticker-img profile-sticker-img" src="images/icon/ic_sticker_yellow.png" alt="Sticker" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h5 className="creater-name"> you</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="table_mob">Game</span>
                                                    <ul className="table-list">
                                                        <li className="red-wing-img">
                                                            <p><img src="images/icon/red_wing.png" alt="Red Wing" /></p>
                                                            <p className="content-pt">Detroit Red Wings</p>
                                                        </li>
                                                        <li className="vs-position">VS</li>
                                                        <li className="devil-img">
                                                            <p><img src="images/icon/jersey_devils.png" alt="Jersey" /></p>
                                                            <p className="content-pt">New Jersey Devils</p>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="table_mob">Challenge Creator</span>If Detroit Red Wings lose I will paint my car red</td>
                                                <td className="status-text-rd text-rd">won</td>
                                            </tr>
                                            <tr  style={{height:'20px'}}  className="border-0"> </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    )
}

export default History
