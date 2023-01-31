import React from 'react'
import Login from './SellerLogin';
import './SellerNavbar.css'
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'



function SellerNavbar() {
    const { loginuser } = useContext(UserContext)

    return (
        <>
            <div className="sellernav">
                <div className="logo">
                    <img className='sellerflip-main' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
                    <p className='explore'>Explore <span className='plus'>Plus</span>
                        <img className='star' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                    </p>
                </div>

                {
                    <>

                        {
                            loginuser ?
                                <>
                                    <button className='seller-name'>{loginuser.username}</button>

                                    <Link to="/seller/sellerproduct"><button className='selleraddcard'>view product</button></Link>

                                </>

                                :
                                <button className='sellerregister'>RegisterAsSeller</button>
                        }


                        <Link to="/seller/selleraddproduct"><button className='selleraddcard'>Start Selling</button></Link>
                        <Link to="/seller/sellerorder"><button className='selleraddcard'>view order</button></Link>


                    </>
                }
                {/* <Login /> */}

                {/* <div className="icon"></div> */}


            </div>
        </>
    )
}

export default SellerNavbar