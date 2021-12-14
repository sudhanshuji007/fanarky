// import React, { useState } from 'react';
// import { omit } from 'lodash';

// function userForm(callback) {
//     const [values, setValues] = useState({});
//     const [errors, setErrors] = useState({});



//     const validate = (event, name, value) => {
//         switch (name) {
//             case 'eamil':
//                 if (!new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(value)) {
//                     setErrors({
//                         ...errors,
//                         email: 'Enter a valid email adress'
//                     })
//                 } else {
//                     let newObj = omit(errors, 'email');
//                     setErrors(newObj);
//                 }
//             case 'password':
//                 if (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z]) (?=.*?[0-9]).{8,}$/).test(value)) {
//                     setErrors({
//                         ...errors,
//                         password: 'Enter the valid password '
//                     })
//                 } else {
//                     let newObj = omit(errors, 'password');
//                     setErrors(newObj);
//                 }
//                 break;

//             default:
//                 break;
//         }
//     }



//     const handleChange = (event) => {
//         event.persist();
//         let name = event.target.name;
//         let val = event.target.value;


//         validate(event, name, val);
//         setValues({
//             ...values,
//             [name]: val,
//         })

//     }



//     const handleSubmit = (event) => {
//         if (event) event.preventDefault();
//         if (Object.keys(errors).length === 0) {
//             callback();
//         } else {
//             alert("no error");
//         }
//     }





//     return {
//         values,
//         errors,
//         handleChange,
//         handleSubmit,
//     }
// }

// export default userForm;
