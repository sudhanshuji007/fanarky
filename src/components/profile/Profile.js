import React,{useState, useRef}  from 'react';   
import ChallengeHeader from '../challenge/ChallengeHeader';
import SimpleReactValidator from 'simple-react-validator';

// import Select from 'react-select'


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function Profile(props) {
    const validator = useRef(new SimpleReactValidator());
    const [updateNow, setUpdateNow] = useState(false);
    const [formValues, setFormValues] = useState({
        email:"",
        password:""
    });
    const handleChange =  (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const submitForm = (event) => {
        event.preventDefault();
        if (validator.current.allValid()) {
            console.log("save");
        }else {
        validator.current.showMessages();
        setUpdateNow(!updateNow)
        }
    }
    return (
        <>
            <ChallengeHeader />
            <div id="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="challenge_step profile_change_password">
                                <ul className="nav nav-pills mb-3 card-block" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active profile_header_content" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                            <img className="arrow-img" src="images/icon/ic_arrow.png" alt="Arrow" />profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link profile_header_content" id="pills-favourite-team-tab" data-toggle="pill" href="#pills-favourite-team" role="tab" aria-controls="pills-favourite-team" aria-selected="false">Favorite team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link profile_header_content" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">change Password</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <form className="login_form" onSubmit={submitForm}>
                                            <div className="row">
                                                <div className="col-sm-8 order-2 order-sm-1">
                                                    <div className="form-block">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <span className="input-fan input--fan">
                                                                        <input className="input_field input_field--fan" id="input1" type="text" onBlur={() => validator.current.showMessageFor('fname')} value={formValues.fname} onChange={handleChange} />
                                                                        <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input1">
                                                                            <span className="input_label-content input_label-content--fan">First Name</span>
                                                                        </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('fname', formValues.fname, 'required')}</span>                                                                    
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <span className="input-fan input--fan">
                                                                        <input className="input_field input_field--fan" id="input2" type="text" onBlur={() => validator.current.showMessageFor('lname')} value={formValues.lname} onChange={handleChange} />
                                                                        <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input2">
                                                                            <span className="input_label-content input_label-content--fan" >last Name</span>
                                                                        </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('lname', formValues.fname, 'required')}</span>                                                                    
                                                                    
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <span className="input-fan input--fan">
                                                                        <input className="input_field input_field--fan" id="input3" type="email" onBlur={() => validator.current.showMessageFor('email')} value={formValues.email} onChange={handleChange} />
                                                                        <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input3">
                                                                            <span className="input_label-content input_label-content--fan">Email</span>
                                                                        </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('email', formValues.fname, 'required|email')}</span>                                                                    
                                                                   
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <span className="input-fan input--fan">
                                                                        <input className="input_field input_field--fan" id="input4" type="number" onBlur={() => validator.current.showMessageFor('number')} value={formValues.number} onChange={handleChange}/>
                                                                        <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input4">
                                                                            <span className="input_label-content input_label-content--fan">Mobile</span>
                                                                        </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('number', formValues.fname, 'required')}</span>                                                                    
                                                                    
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-btn-dv profile-form-btn-dv edit_btn">
                                                        <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">edit</button>
                                                        <a className="cancel_btn" href="login.html">Cancel</a>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 order-1 order-sm-2">
                                                    <div className="profile-picture-block">
                                                        <span className="profile-picture"><img className="avtar-rounded-img" src="images/icon/index_profile.jpeg" alt="Profile" /></span>
                                                        <div className="picture-title">
                                                            <a href="#">Change picture</a>
                                                            <p>You can also choose an Avatar</p>
                                                        </div>
                                                        <div className="multi-profile-picture">
                                                            <img className="profile-img" src="images/icon/img1.png" alt="Img" />
                                                            <img className="profile-img" src="images/icon/img2.png" alt="Img" />
                                                            <img className="profile-img" src="images/icon/img4.png" alt="Img" />
                                                            <img className="profile-img mr-0" src="images/icon/img4.png" alt="Img" />
                                                        </div>
                                                        <div className="multi-profile-picture">
                                                            <img className="profile-img" src="images/icon/img5.png" alt="Img" />
                                                            <img className="profile-img" src="images/icon/img6.png" alt="Img" />
                                                            <img className="profile-img" src="images/icon/img7.png" alt="Img" />
                                                            <img className="profile-img mr-0" src="images/icon/img8.png" alt="Img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <form className="login_form profile_login_form">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-12">
                                                    <div className="form-group">
                                                        <span className="input-fan input--fan">
                                                            <input className="input_field input_field--fan" id="input5" type="email" />
                                                            <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input5">
                                                                <span className="input_label-content input_label-content--fan">Old password</span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 col-sm-12">
                                                    <div className="form-group">
                                                        <span className="input-fan input--fan">
                                                            <input className="input_field input_field--fan" id="input6" type="password" />
                                                            <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input6">
                                                                <span className="input_label-content input_label-content--fan">New password</span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-8 col-sm-12">
                                                    <div className="form-group">
                                                        <span className="input-fan input--fan">
                                                            <input className="input_field input_field--fan" id="input7" type="email" />
                                                            <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input7">
                                                                <span className="input_label-content input_label-content--fan">Confirm password</span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-8 col-sm-12">
                                                    <div className="form-btn-dv profile-form-btn-dv">
                                                        <button type="submit" className="btn btn-primary btn_rd cancel_btn_rd">change</button>
                                                        <a className="cancel_btn" href="login.html">Cancel</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="pills-favourite-team" role="tabpanel" aria-labelledby="pills-favourite-team-tab">
                                        <form className="login_form profile_login_form favourite_team_form">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 offset-md-3">
                                                    <div className="form-group mb-5">
                                                        <div className="select_sport_dropdown">
                                       <div className="custom-select input_field1 select_field">
                                                        {/* <Select  options={options} /> */}
                                                            {/* <select className="custom-select input_field1 select_field">
                                                                <option selected>Select Sports</option>
                                                                <option value="1">College Football</option>
                                                                <option value="2">College BasketBall</option>
                                                                <option value="3">NFL</option>
                                                                <option value="4">NBA</option>
                                                                <option value="5">GolfClub</option>
                                                                <option value="6">NHL</option>
                                                            </select> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <div className="select_team_dropdown">



                                                        {/* <Select className="custom-select input_field1 select_field" options={options} /> */}
                                                    






                                                            {/* <select className="custom-select input_field1 select_field">
                                                                <option selected>Select Team</option>
                                                                <option value="1">Detroit Red Wings</option>
                                                                <option value="2">Philadelphia Flyers</option>
                                                                <option value="3">New Jersey Devils</option>
                                                                <option value="4">Kent State</option>
                                                                <option value="5">UTSA RoadRunners</option>
                                                                <option value="6">Western Michigan</option>
                                                            </select> */}
                                                        </div>
                                                    </div>
                                                    <div className="form-group text-center">
                                                        <div className="wolf_tag team_view team_bg2" href="#">
                                                            <p className="fav-team-icn"><img className="fl-photo-img" src='images/icon/arizona-cardinals-icons.png' alt="Arizona" /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default Profile
