import React from 'react';

function ChallengeAbout() {
    return (
        <>
            <div className="wolf_double">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="challenge_step challenge_create">
                                <div className="card-block">
                                    <a className="wolf_tag" href="#"><img className="arrow-img" src="images/icon/ic_arrow.png" alt="Arrow" /></a>
                                    <div className="card-images">
                                        <a className="wolf_tag" href="#"><img className="fl-photo-img" src="images/icon/wolf_pack.png "alt="Wolf Pack" /></a>
                                        <a className="wolf_tag" href="#"><img className="fl-photo-img" src="images/icon/basketball.png" alt="Basketball" /></a>
                                        <a className="team_create_view team_create_bg1" href="#" title="Philadelphia Flyers">
                                            <img src="images/icon/team_icn2.png" alt="Team" />
                                        </a>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="challenge_step_form">
                                    <form>
                                        <div className="form-group cst-form-group">
                                            <label htmlFor="exampleInputEmail1">The loser of this challenge will</label>
                                            <input type="email" className="form-control input-modifire" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Shave their heads" />
                                        </div>
                                        <div className="add_field_block">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Add email</label>
                                                        <input type="email" className="form-control input-modifire" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="or_tag">
                                                    (or)
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group pull-right">
                                                        <label htmlFor="exampleInputEmail1">Mobile no</label>
                                                        <input type="email" className="form-control input-modifire" id="mobilenumber" placeholder="Mobile Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Add another friend</label>
                                                        <input type="email" className="form-control input-modifire" id="addfriend" placeholder="Add another friend" />
                                                    </div>
                                                </div>
                                                <div className="or_tag">
                                                    (or)
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group pull-right">
                                                        <label htmlFor="exampleInputEmail1">Wolf pack number</label>
                                                        <input type="email" className="form-control input-modifire" id="wolfnumber" placeholder="Wolf pack number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="add-images">
                                                <img src="images/icon/ic_plus.png" alt="Plus" />
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChallengeAbout
