// import React from 'react'
import './SellerSignup.css'
import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import { signupseller } from '../../sevices/api';


function SellerSignup(props) {


    const userNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const mobilenumberRef = useRef()
    async function dosignup() {

        let obj = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            phone: mobilenumberRef.current.value
        }
        console.log(obj);
        let response = await signupseller(obj)
        console.log(response.data);
        if (response.success) {
            alert(response.msg)

        } else {
            alert("Signup failed")

        }

    }
    return (
        <div>
            <Dialog open={true} onClose={false}>
                <div className="signup-page">
                    <div className="signup-container signup-image">
                        <p className='heading'>Looks like you're new here! </p>
                        <p className='para'>signup with your mobile number
                            to get started
                        </p>
                    </div>
                    <div className="second-container">
                        <div className="data">

                            <input ref={userNameRef} className='input-fields' type="text" placeholder='username' /><br />
                            <input ref={emailRef} className='input-fields' type="text" placeholder='email' /><br />
                            <input ref={passwordRef} className='input-fields' type="password" placeholder='password' /><br />
                            <input ref={mobilenumberRef} className='input-fields' type="text" placeholder='enter mobile number' /><br />
                            <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span>  Privacy
                                Policy</span>
                            </p>
                            <button onClick={dosignup} className='login-btn'>continue</button>
                            <button className='otp'>Existing User? Log In</button>



                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default SellerSignup