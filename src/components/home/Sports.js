import React from 'react';

function Sports() {
    return (
        <>
            <div className="card_area card_area1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="h1_40 text-center">Sports</h1>
                            <div className="devider_img text-center">
                                <img src="images/icon/img_devider.png" alt="Devider" />
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="select_sport select_sport_cards">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="row">
                                    <div className="col-sm-3 text-center">
                                        <div className="wolf_tag"><img src="images/thumbnails/sport_1.png" className="fl-photo-img" alt="Sport1"/> </div>
                                    </div>
                                    <div className="col-sm-3 text-center"> <a className="wolf_tag" href="#"><img src="images/thumbnails/sport_4.png" className="fl-photo-img" alt="Sport4"/> </a>
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <div className="wolf_tag"><img src="images/thumbnails/sport_3.png" className="fl-photo-img" alt="Sport3"/> </div>
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <div className="wolf_tag"><img src="images/thumbnails/sport_6.png" className="fl-photo-img" alt="Sport6"/> </div>
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

export default Sports
