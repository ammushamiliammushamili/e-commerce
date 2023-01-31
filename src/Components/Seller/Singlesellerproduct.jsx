import React, { useEffect } from 'react'
import { getdeleteproduct, getsingleproduct } from '../../sevices/api'
import SellerNavbar from './SellerNavbar'
import './Singlesellerproduct.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Singlesellerproduct() {
    const [singleproducts, setsingleproducts] = useState()
    const navigate = useNavigate()
    let { id } = useParams()
    console.log(id + "this is params");

    async function fetchsingleproduct() {
        let response = await getsingleproduct(id)
        console.log(response);
        setsingleproducts(response.singlesellerproduct)
    }
    useEffect(() => {
        fetchsingleproduct()
    }, [])

    async function deleteproduct() {
        let { success, msg } = await getdeleteproduct(id)
        if (success) {
            alert(msg)
            navigate("/seller/sellerproduct")

        } else {
            alert("cannot delete product")
        }


    }

    function updateproducts() {
        navigate("/seller/updatesellerproduct", { state: { singleproducts } })

    }
    return (
        <>
            <SellerNavbar />
            {
                singleproducts
                &&
                <div className="product-item-container">
                    <div className="left-container">
                        <div className=" seller-product-image">
                            <img className='productimg' src={singleproducts.url} alt="" />
                        </div>
                        <div className="product-btn">

                        </div>
                    </div>
                    <div className="right-container">
                        <p>title:{singleproducts.title}</p>
                        <p>tagname:{singleproducts.tagname}</p>
                        <p>mrp:{singleproducts.mrp}</p>
                        <p>description:{singleproducts.description}</p>
                        <p>offer:{singleproducts.offer}</p>

                        <button onClick={deleteproduct} >delete</button>
                        <button onClick={updateproducts} >update</button>



                    </div>
                </div>
            }


        </>
    )
}

export default Singlesellerproduct