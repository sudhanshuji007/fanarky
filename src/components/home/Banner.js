import React from 'react';
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <>
            <div className="hero">
                <div className="wolf_double">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="login_area">
                                    <h1>FANARKY<span>Wild Crazy Fun</span></h1>
                                    <h3>Play for fun, show your loyalty, or just let them know it’s put up or shut time.</h3>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-btn-dv">
                                                <Link to="/login"><button type="button" className="btn btn-primary btn_rd cancel_btn_rd">Sign In</button></Link>
                                            <Link to="/register">  <button type="button" className="btn btn-primary btn_rd">Register</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
