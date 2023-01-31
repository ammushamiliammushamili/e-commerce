import './SellerLogin.css'

// import React from 'react'
import Dialog from '@mui/material/Dialog';
import { loginseller } from '../../sevices/api';
import React, { useRef, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';





function SellerLogin(props) {
    const passwordRef = useRef()
    const emailRef = useRef()

    const { setloginuser, setusertype } = useContext(UserContext)
    const navigate = useNavigate()


    async function dologin() {
        let obj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(obj);
        let response = await loginseller(obj)
        console.log(response.data);
        if (response.success) {
            alert(response.msg)
            setusertype("seller")
            setloginuser(response.seller)
            navigate("/seller")
        } else {
            alert(response.msg)

        }
    }
    return (
        <div>

            <Dialog open={true} onClose={() => { props.setOpen(false) }}>
                <div className="main-container">
                    <div className="login-container sellerlogin-image">
                        <p className='log'>Login</p>
                        <p className='subhead'>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className="details-container">
                        <div className="data">
                            <div>
                                <input ref={emailRef} className='input-fields' type="text" placeholder='enter email' /><br />
                                <input ref={passwordRef} className='input-fields' type="password" placeholder='password' />
                                <p className='txt3'>By continuing, you agree to Flipkart's <span> terms of use</span> and <span> Privacy
                                    Policy</span>
                                </p>
                                <button onClick={dologin} className='login-btn'>Login</button>
                                <p className='or'>OR</p>
                                <button className='otp'>Request OTP</button>
                                <div className="link">
                                    <a href="">new to flipkart?create an account</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default SellerLogin