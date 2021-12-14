import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import history from 'use-history';
import SimpleReactValidator from 'simple-react-validator';


function LoginForm() {
    const validator = useRef(new SimpleReactValidator());
    const [updateNow, setUpdateNow] = useState(true);
    const [formValues, setFormValues] = useState({
        email:"",
        password:"",
    
    });
    const handleChange =  (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const submitForm = (event) => {
        event.preventDefault();
        if (validator.current.allValid()) {
            console.log("save");
            window.location.href = "/challenge?var1="+validator.current.var1+"&var2="+validator.current.var2 + "......";
        }else {
        validator.current.showMessages();
        setUpdateNow(!updateNow)
        }
    }

    return (
        <div className="wolf_bg_single">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="login_area">
                            <h1>FANARKY<span>Wild Crazy Fun</span></h1>
                            <h3>Play for fun, show your loyalty, or just let them know it’s put up or shut time.</h3>
                            <form className="login_form" name="contactform" onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <span className="input-fan input--fan">
                                                <input  onBlur={() => validator.current.showMessageFor('email')} className="input_field input_field--fan" value={formValues.email} type="email" id="input1" name="email" onChange={handleChange}/>
                                                <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input1">
                                                    <span className="input_label-content input_label-content--fan">Email</span>
                                                </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('email', formValues.email, 'required|email')}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <span className="input-fan input--fan">
                                                <input className="input_field input_field--fan"  onBlur={() => validator.current.showMessageFor('password')} value={formValues.password} onChange={handleChange} type="password" name="password" id="input2"  />
                                                <label className="input_label input_label--fan input_label--fan-color-1" htmlFor="input2">
                                                    <span className="input_label-content input_label-content--fan">Password</span>
                                                </label>
                                                <span style={{color:'red',textTransform:'capitalize'}}>{validator.current.message('password', formValues.password, 'required')}</span>  
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-btn-dv">
                                     <button  type="submit" className="btn btn-primary btn_rd"   >Sign In</button>
                                            <a href="#" className="forgot_link">Forgot Password</a>
                                            <span className="sp-account">Don't have an account?<Link to="/register">SIGN UP</Link> </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
