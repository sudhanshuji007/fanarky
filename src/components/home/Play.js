import React from 'react';

function Play() {
    return (
        <>
            <div className="card_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="h1_40 text-center">How to play</h1>
                            <div className="devider_img text-center">
                                <img src="images/icon/img_devider.png" alt="Devider" />
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 text-center">
                            <div className="wolf_tag  fl-bg-photo-img bg-photo-img1">
                                <span className="caption-para_bg">
                                    <span className="caption-para1">Pick your game winner</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center">
                            <div className="wolf_tag  fl-bg-photo-img bg-photo-img2">
                                <span className="caption-para_bg">
                                    <span className="caption-para1">Create your challenge</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center">
                            <div className="wolf_tag  fl-bg-photo-img bg-photo-img3">
                                <span className="caption-para_bg">
                                    <span className="caption-para1">Send to friends</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    )
}

export default Play;
