import React, { useEffect, useState } from 'react'
import './Updatesellerproduct.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react'
import { getupdateproduct } from '../../sevices/api';




function Updatesellerproduct() {
    let { id } = useParams()

    const [product, setproduct] = useState()
    const [title, settitle] = useState()
    const [tagline, settagline] = useState()
    const [mrp, setmrp] = useState()
    const [description, setdescription] = useState()
    const [url, seturl] = useState()
    const [offer, setoffer] = useState()

    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        console.log(location);
        settitle(location.state.singleproducts.title)
        settagline(location.state.singleproducts.tagline)
        setmrp(location.state.singleproducts.mrp)
        setdescription(location.state.singleproducts.description)
        seturl(location.state.singleproducts.url)
        setoffer(location.state.singleproducts.offer)
        setproduct(location.state.singleproducts)
    }, [])

    async function updateproducts() {

        let obj = {
            title,
            tagline,
            mrp,
            description,
            url,
            offer
        }

        console.log(obj, "id = ", product._id);
        let data = await getupdateproduct(product._id, obj)
        console.log(data);
        if (data.success) {
            alert(data.msg)
            navigate("/seller/sellerproduct");
        } else {
            alert("canot update product")
        }
    }

    return (
        <>


            <div className='sellerdata'>
                <div className="form-sec">
                    {
                        product
                        &&
                        <></>
                    }
                    <h1 className='sellerupdatehead'>UPDTE PRODUCT</h1><br></br>
                    <input className='sellerform' type="text" placeholder='title' value={title} onChange={(e) => { settitle(e.target.value) }} /><br></br>
                    <input className='sellerform' type="text" placeholder='tagline' value={tagline} onChange={(e) => { settagline(e.target.value) }} /><br></br>
                    <input className='sellerform' type="text" placeholder='mrp' value={mrp} onChange={(e) => { setmrp(e.target.value) }} /><br></br>
                    <input className='sellerform' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} /><br></br>
                    <input className='sellerform' type="text" placeholder='url' value={url} onChange={(e) => { seturl(e.target.value) }} /><br></br>
                    <input className='sellerform' type="text" placeholder='offer' value={offer} onChange={(e) => { setoffer(e.target.value) }} /><br></br>
                    <button className='sellerbtn' onClick={updateproducts}>submit</button>
                </div>
            </div   >

        </>
    )
}

export default Updatesellerproduct