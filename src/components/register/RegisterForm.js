import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
// import Button from '@material-ui';

function RegisterForm() {
    const validator = useRef(new SimpleReactValidator());
    const [updateNow, setUpdateNow] = useState(true);
    const [formValues, setFormValues] = useState({
        fristname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const submitForm = (event) => {
        event.preventDefault();
        if (validator.current.allValid()) {
            console.log('save')
            window.location.href = "/challenge?var1="+validator.current.var1+"&var2="+validator.current.var2+"&var3="+validator.current.var3+"&var4="+validator.current.var4 +"......";

        } else {
            validator.current.showMessages();
            setUpdateNow(!updateNow)
        }
    }
    return (
        <>
            <div className="wolf_bg_single">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="login_area">
                                <h1>FANARKY<span>Wild Crazy Fun</span></h1>
                                <h3>Play for fun, show your loyalty, or just let them know it’s put up or shut time.</h3>
                                <form className="login_form" onSubmit={submitForm}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <span className="input-fan input--fan">
                                                    <input className="input_field input_field--fan" onBlur={() => validator.current.showMessageFor('fristname')} value={formValues.fristname} onChange={handleChange} name="fristname" type="text" id="input1" />
                                                    <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input1">
                                                        <span className="input_label-content input_label-content--fan">First Name</span>
                                                    </label>
                                                    <span style={{ color: 'red', textTransform: 'capitalize' }}>{validator.current.message('fristname', formValues.fristname, 'required')}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <span className="input-fan input--fan">
                                                    <input className="input_field input_field--fan" onBlur={() => validator.current.showMessageFor('lastname')} value={formValues.lastname} onChange={handleChange} name="lastname" type="text" id="input2" />
                                                    <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input2">
                                                        <span className="input_label-content input_label-content--fan">Last Name</span>
                                                    </label>
                                                    <span style={{ color: 'red', textTransform: 'capitalize' }}>{validator.current.message('lastname', formValues.lastname, 'required')}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <span className="input-fan input--fan">
                                                    <input className="input_field input_field--fan" onBlur={() => validator.current.showMessageFor('email')} value={formValues.email} onChange={handleChange} name="email" type="email" id="input3" />
                                                    <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input3">
                                                        <span className="input_label-content input_label-content--fan">Email</span>
                                                    </label>
                                                    <span style={{ color: 'red', textTransform: 'capitalize' }}>{validator.current.message('email', formValues.email, 'required|email')}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <span className="input-fan input--fan">
                                                    <input className="input_field input_field--fan" onBlur={() => validator.current.showMessageFor('password')} value={formValues.password} onChange={handleChange} name="password" type="password" id="input4" />
                                                    <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input4">
                                                        <span className="input_label-content input_label-content--fan">Password</span>
                                                    </label>
                                                    <span style={{ color: 'red', textTransform: 'capitalize' }}>{validator.current.message('password', formValues.password, 'required')}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-btn-dv">
                                                <button type="submit" className="btn btn-primary btn_rd">Sign Up</button>
                                                <span>Already have an account?<Link to="/login">SIGN IN</Link> </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
