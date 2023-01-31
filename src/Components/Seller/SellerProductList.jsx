import React, { useContext, useState } from 'react'
import SellerNavbar from './SellerNavbar'
import './SellerProductList.css'
import { useEffect } from 'react'
import { fetchsellerproduct, loginUser, sellerproduct } from '../../sevices/api'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'


function SellerProductList() {
    const { loginuser } = useContext(UserContext)
    const [sellerproducts, setsellerproducts] = useState()

    async function getAllproducts() {
        let response = await fetchsellerproduct(loginuser._id)
        // console.log(allproducts);
        setsellerproducts(response.sellerproduct)
        console.log(response);
    }

    useEffect(() => {

        getAllproducts()
    })


    return (
        <>
            <SellerNavbar />
            <div className="allproducts">
                <h1 className='allproducthead'>ALL PRODUCT</h1>
                <table border="1px  solid black" className='producttable'>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>operations</th>
                    </tr>

                    {sellerproducts && sellerproducts.map((p) => {
                        return (
                            <tr>
                                <td>{p.title}</td>
                                <td>{p.mrp}</td>
                                <td>< Link to={"/seller/singlesellerproduct/" + p._id}><button>view</button></Link> </td>
                            </tr>


                        )
                    })}

                </table>
            </div>
        </>
    )
}

export default SellerProductList