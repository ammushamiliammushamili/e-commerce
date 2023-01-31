import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { buyproduct, buyproducts, Userbuyproduct } from '../../sevices/api'
import Navbar from '../Navbar'
import './Buynow.css'


function Buynow() {


    const useridRef = useRef()
    const usernameRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const pincodeRef = useRef()
    const lanmarkRef = useRef()
    const ordereddateRef = useRef()
    const expecteddateRef = useRef()
    const statusRef = useRef()
    const navigate = useNavigate()


    const location = useLocation();
    const { loginuser } = useContext(UserContext)
    console.log(location.state);




    async function Buynowproduct() {
        let today = new Date()
        let expecteddate = new Date()
        expecteddate.setDate(today.getDate() + 3)
        expecteddate = expecteddate.toLocaleDateString()
        let obj = {
            productid: location.state._id,
            mrp: location.state.mrp,
            userid: loginuser._id,
            username: loginuser.username,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            pincode: pincodeRef.current.value,
            lanmark: lanmarkRef.current.value,
            ordereddate: today.toLocaleDateString(),
            expecteddate,
            orderstatus: "placed",
            paymentmethod: "cash on delivery",
            seller_id: location.state.seller_id,
            url: location.state.url,
            title: location.state.title

        }
        console.log(obj);

        let response = await buyproduct(obj);
        // console.log(response.success);
        if (response.success) {
            alert(response.msg);

            navigate('/');
        }
        else {
            alert(response.msg)
        }
    }

    return (
        <>
            <Navbar />
            <div className="buyproductfrom">
                <input type="text" placeholder='username' ref={usernameRef} />
                <input type="text" placeholder='address' ref={addressRef} />
                <input type="text" placeholder='phone' ref={phoneRef} />
                <input type="text" placeholder='pincode' ref={pincodeRef} />
                <input type="text" placeholder='lanmark' ref={lanmarkRef} />
                {/* <input type="text" placeholder='paymentmethod' ref={paymentmethodRef} /> */}
                {/* <input type="text" placeholder='ordereddate' ref={ordereddateRef} /> */}
                {/* <input type="text" placeholder='expecteddate' ref={expecteddateRef} /> */}
                {/* <input type="text" placeholder='orderstatus' ref={orderstatusRef} /> */}
                {/* paymentmethod: */}
                <div className="buyproducybtn">
                    <button type='button' className='onlinepayment'>online payment</button>
                    <button type='submit' className='cashondelivery'>cash on delivery</button>
                </div>
                <button className='buynowsubmitbtn' onClick={Buynowproduct} >submit</button>

            </div>
        </>
    )
}

export default Buynow