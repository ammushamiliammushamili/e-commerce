import { useNavigate, useLocation } from 'react-router-dom'
import './Product.css'

function Product({ oneproduct }) {
    const navigate = useNavigate()
    function viewproduct() {
        navigate("/Viewproduct", { state: { oneproduct } })
    }

    return (
        <>
            <div className="subproductlist">
                <div className="single-products" onClick={viewproduct}>
                    <img className="sub-carousal-image" src={oneproduct.url} />
                    <h4 className='product-title'>{oneproduct.title}</h4>
                    <p className='price'>{oneproduct.mrp}</p>
                    <p className='description'>{oneproduct.description}</p>
                </div>
            </div>
        </>
    )
}
export default Product