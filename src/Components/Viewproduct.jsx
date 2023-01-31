

import './Viewproduct.css'

import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Productitem.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Login from './Login';
import { cartproduct } from '../sevices/api';
export default function Productitem() {
    const location = useLocation();
    console.log(location);

    const { loginuser } = useContext(UserContext)
    const navigate = useNavigate()
    const [open, setopen] = useState(false)
    async function buynowbutton() {
        if (loginuser) {
            navigate('/buynowproduct', { state: location.state.oneproduct })
        } else {
            setopen(true)
        }
    }
    async function productcart(productid) {
        let data = await cartproduct(loginuser._id, productid)
        if (data.success) {
            alert(data.msg)
        } else {
            alert("could not added to card")
        }
        // console.log(error);

    }


    return (
        <>
            <Navbar />
            <Login open={open} setOpen={setopen} />

            <div className="product-item-container">
                <div className="left-container">
                    <div className="product-image">
                        <img src={location.state.oneproduct.url} alt="" />

                    </div>
                    <div className="product-btn">
                        <button className='cart pro-btn' onClick={() => { productcart(location.state.oneproduct._id) }}><LocalGroceryStoreIcon /> add to cart</button>
                        <button className='buy pro-btn' onClick={buynowbutton} ><FlashOnIcon /> buy now</button>
                    </div>
                </div>
                <div className="right-container">
                    <h3 className='head1'>{location.state.oneproduct.title}</h3>
                    <div className="rate">
                        <p>7 Ratings & 0 Reviews</p>
                        <div className="assured"></div>
                    </div>
                    <p className='head3'>special price</p>
                    <p className='head4'> ₹29,999 <strike>₹39,995</strike> <span className='head3' > {location.state.oneproduct.offer}off </span></p>
                    <p className='head5'>Hurry, Only 5 left!</p>
                    {/* <h4>Coupons for you</h4>
                    <p>Special Price₹100 off with cashback coupon on First Order <span> T&C</span></p> */}
                    <h4>Available offers</h4>
                    <div className="offers">
                        <p><LocalOfferIcon className='offer-icon' /> <b>Bank Offer </b>10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and above <span> T&C </span></p>
                        <p><LocalOfferIcon className='offer-icon' /> <b>Bank Offer </b>10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and above <span> T&C </span></p>
                        <p><LocalOfferIcon className='offer-icon' /><b>Bank Offer </b>8% off on Flipkart Axis Bank Credit Card, up to ₹1500. On orders of ₹5000 and aboveT <span> T&C </span></p>
                    </div>
                    <p className='head6'>view 15 more offers</p>
                    <p>sold by:{location.state.oneproduct.seller_name}</p>


                </div>
            </div>
        </>
    )
}