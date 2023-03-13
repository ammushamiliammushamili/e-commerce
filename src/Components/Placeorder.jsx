import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { buyproduct } from '../sevices/api'

function Placeorder() {

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




    async function placeorderproduct() {
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
        console.log(response.success);
        if (response.success) {
            alert(response.msg);

            navigate('/');
        }
        else {
            alert(response.msg)
        }
    }
    return (
        <div>
            <div className="buyproductfrom">
                <input type="text" placeholder='username' ref={usernameRef} />
                <input type="text" placeholder='address' ref={addressRef} />
                <input type="text" placeholder='phone' ref={phoneRef} />
                <input type="text" placeholder='pincode' ref={pincodeRef} />
                <input type="text" placeholder='lanmark' ref={lanmarkRef} />
                <div className="buyproducybtn">
                    <button type='button' className='onlinepayment'>online payment</button>
                    <button type='submit' className='cashondelivery'>cash on delivery</button>
                </div>
                <button className='buynowsubmitbtn' onClick={placeorderproduct} >submit</button>

            </div>
        </div>
    )
}

export default Placeorder