
import './Cart.css'
import Navbar from './Navbar'
import { DemoContext } from '../context/DemoContext';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { viewcart } from '../sevices/api';
import { useLocation, useNavigate } from 'react-router-dom';

function Cart() {
    // const{demo}=useContext(DemoContext)
    const { loginuser } = useContext(UserContext)
    const [cartproduct, setcartproduct] = useState()
    const [totalprice, setTotalprice] = useState(0)
    const navigate = useNavigate()
    const [open, setopen] = useState(false)
    const location = useLocation();
    console.log(location);

    async function viewedcard() {
        let response = await viewcart(loginuser._id)
        console.log(response);
        setcartproduct(response.cart.products)
        let total = 0;
        response.cart.products.forEach((p) => {
            console.log(p);
            total = total + parseInt(p.mrp)
        });
        console.log(total);
        setTotalprice(total)
    }
    useEffect(() => {
        viewedcard()
    }, [])

    function placeorder(products) {
        if (loginuser) {

            navigate('/placeorder', { state: products })
        } else {
            setopen(true)
        }
    }
    return (
        <>
            <div className="cart-section">
                <Navbar />
                <div className="cart-page">
                    <div className="cart-left-container">
                        <div className="first-sec">
                            <p>From Saved Address</p>
                            <button className='cart-btn'>enter delivery pincode</button>
                        </div>
                        {cartproduct && cartproduct.map((products) => {
                            return (
                                <>
                                    <div className="second-sec">
                                        <div className="cart-image">
                                            <img className='single-img' src={products.url} alt="" />
                                        </div>

                                        <div className="cart-details">
                                            <h5>{products.title}</h5>
                                            <p className='clr'>{products.description}</p>
                                            <div className="assured-cart">
                                                <p>{products.seller_name}</p>
                                                <img className='ass-cart-img' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
                                            </div>
                                            <p className='offer-col'><strike>₹2,695</strike><b>{products.mrp}</b><span className='offer'> {products.offer}</span> </p>
                                            <p className='stock'>Out Of Stock</p>
                                            <div className="save-col">
                                                <p className='save'>SAVE FOR LATER</p>
                                                <p className='remove'>REMOVE</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='place-order'>
                                        <button onClick={() => { placeorder(products) }} className='place-order-btn'>place order</button>
                                    </div>
                                </>
                            )

                        })}


                    </div>


                    <div className="cart-right-container">
                        <div className="price-head">
                            <h3>price details</h3>
                        </div>
                        <div className="details">
                            <div className="detail1">
                                <p>price(1 item)</p>
                                <p>₹2,695</p>
                            </div>
                            <div className="detail1">
                                <p>Discount</p>
                                <p><span className='free'>- ₹196</span></p>
                            </div>
                            <div className="detail1">
                                <p> Delivery Charges</p>
                                <p> <span className='free'>FREE</span></p>
                            </div>
                            <hr className='dashed-line' />
                            <div className="detail1">
                                <p><b>Total Amount</b></p>
                                {/* <p> <b> ₹2,499</b></p> */}
                                <p><b>{totalprice}</b></p>
                            </div>
                            <hr className='dashed-line' />

                            <div className='price-order'>You will save ₹196 on this order</div>
                        </div>

                    </div>
                </div>
                <div className="policy">
                    <div className="policies">
                        <p>Policies:Returns Policy | Terms of use | Security | Privacy | Infringement</p>
                        <p className='copyright'>© 2007-2022 Flipkart.com</p>
                        {/* <p className='copyright'>{demo}</p> */}
                    </div>
                    <div className="help">
                        <p> Need help? Visit the <a>Help Center </a>or <a> Contact Us</a></p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cart

