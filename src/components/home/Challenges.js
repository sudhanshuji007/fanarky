import React from 'react'
import { Link } from 'react-router-dom';

function Challenges() {
    return (
        <>
            <div className="card_area card_area_pb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="border-top-img">
                                <img src="images/icon/horizontal_devider1.png" alt="Devider"/>
                            </div>
                            <div className="about_content_area">
                                <div className="login_area login_area_sm">
                                    <div className="login_area_content">
                                        <h1><span>Start sending challenges today</span></h1>
                                    </div>
                                </div>
                                <div className="public_challenges_btn">
                                    <Link to="/login" className="btn btn-primary btn_rd cancel_btn_rd">SIGN IN</Link>
                                    <Link to="/register" className="btn btn-primary btn_rd text-uppercase">REGISTER</Link>

                                </div>
                            </div>
                            <div className="border-top-img">
                                <img src="images/icon/horizontal_devider1.png" alt="Devider1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Challenges;
