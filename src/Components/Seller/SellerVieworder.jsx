import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { orderstatus, sellerorders } from '../../sevices/api'
import './SellerVieworder.css'

function SellerVieworder() {

    const { loginuser } = useContext(UserContext)
    const navigate = useNavigate()
    const [allproducts, setallproducts] = useState()
    console.log(allproducts);
    async function vieworder() {
        let response = await sellerorders(loginuser._id)
        setallproducts(response.orders)
        console.log(response);

    }
    useEffect(() => {

        vieworder()
    }, [])
    async function productstatus(id) {
        let data = await orderstatus(id)
        console.log(data);
        if (data.success) {
            alert(data.msg)
            navigate("/seller/sellerproduct");
        } else {
            alert("canot shipped product")
        }

    }

    return (
        <>
            {/* <div className='vieworder'>view orders</div> */}
            <h1 className='vieworders'>VIEW ORDERS</h1>
            <table className='ordertable' border="1px solid black">
                <tr>
                    <th>USERNAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>PRODUCT NAME</th>
                    <th>MRP</th>
                    <th>PAYMENT METHOD</th>
                    <th>STATUS</th>
                    <th>OPERATIONS</th>
                </tr>
                {
                    allproducts && allproducts.map((p) => {
                        return (
                            <tr>
                                <td>{p.username}</td>
                                <td>{p.address}</td>
                                <td>{p.phone}</td>
                                <td>{p.title}</td>
                                <td>{p.mrp}</td>
                                <td>{p.paymentmethod}</td>
                                <td>{p.orderstatus}</td>
                                <button className='shipped-btn' onClick={() => { productstatus(p._id) }}>shipped</button>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default SellerVieworder