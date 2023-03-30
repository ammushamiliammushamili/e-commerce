import React, { useContext, useEffect, useState } from 'react'
import './Vieworderpage.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './Navbar';
import { UserContext } from '../context/UserContext';
import { userorders } from '../sevices/api';





function Vieworderpage() {
    const { loginuser } = useContext(UserContext)
    // console.log(loginuser);
    const [allproducts, setallproducts] = useState()

    async function fetchgetallorders() {
        let response = await userorders(loginuser._id)
        setallproducts(response.orders)
        console.log(response.data);
    }
    useEffect(() => {
        fetchgetallorders()
    })

    return (
        <>
            <Navbar />
            <div className="first-section">
                <div className="first">
                    <img className='gift' src="https://cdn.shopify.com/s/files/1/1375/4957/products/gift2_1400x.png?v=1666761215" alt="" />
                    <h2 className='order'>Order placed for  7654</h2>
                    <p className='second-para'>your 1 item will be deliverd by tue,jun 24th</p>

                </div>
            </div>

            <div className="center-section">
                <p>DeliveryAddress</p>
                <p><b>{allproducts && allproducts[0].username}</b> </p>
                <p>{allproducts && allproducts[0].address}</p>
                <p>{allproducts && allproducts[0].pincode}</p>
                <p>{allproducts && allproducts[0].phone}</p>


            </div>
            {
                allproducts && allproducts.map((p) => {
                    return (
                        <div className="third-section">

                            <img className='single-img' src={p.url} alt="" />
                            <div className="last">
                                <p >{p.title}</p>
                                <h5>A4 Black and White Laser Multifunction Printer, Perfect for Enterprise</h5>
                                <h4  >{p.mrp}</h4>
                                <h4  >seller:shamili</h4>
                            </div>
                            <div className='Delivery-expected'>
                                <h5>Delivery expected by jan 24</h5>
                            </div>
                        </div>

                    )

                })
            }
        </>
    )
}

export default Vieworderpage