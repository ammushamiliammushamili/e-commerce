import React, { useContext } from 'react'
import './SelleraddProduct.css'
import { sellerproduct } from '../../sevices/api'
import { useRef } from 'react'
import { UserContext } from '../../context/UserContext'
import SellerNavbar from './SellerNavbar'

function SelleraddProduct() {
    const { loginuser } = useContext(UserContext)
    const titleRef = useRef()
    const taglineRef = useRef()
    const mrpRef = useRef()
    const descriptionRef = useRef()
    const urlRef = useRef()
    const offerRef = useRef()
    const categoryRef = useRef()

    async function addproduct() {

        let obj = {
            title: titleRef.current.value,
            tagline: taglineRef.current.value,
            mrp: mrpRef.current.value,
            description: descriptionRef.current.value,
            url: urlRef.current.value,
            offer: offerRef.current.value,
            category: categoryRef.current.value,
            seller_id: loginuser._id,
            seller_name: loginuser.username,
        }
        console.log(obj);
        let response = await sellerproduct(obj)

        if (response.success) {
            alert(response.msg)

        } else {
            alert(response.msg)

        }
    }

    return (
        <>
            <SellerNavbar />
            <div className='sellerdata'>
                <div className="form">
                    <h1 className='sellerhead'>ADD PRODUCT</h1><br></br>
                    <input ref={titleRef} className='sellerform' type="text" placeholder='title' /><br></br>
                    <input ref={taglineRef} className='sellerform' type="text" placeholder='tagline' /><br></br>
                    <input ref={mrpRef} className='sellerform' type="text" placeholder='mrp' /><br></br>
                    <input ref={descriptionRef} className='sellerform' type="text" placeholder='description' /><br></br>
                    <input ref={urlRef} className='sellerform' type="text" placeholder='url' /><br></br>
                    <input ref={offerRef} className='sellerform' type="text" placeholder='offer' /><br></br>
                    <input ref={categoryRef} className='sellerform' type="text" placeholder='category' /><br></br>
                    <button className='sellerbtn' onClick={addproduct}>submit</button>
                </div>
            </div   >
        </>
    )
}

export default SelleraddProduct