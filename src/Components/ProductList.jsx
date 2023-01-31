import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import './ProductList.css'
import { getproductBycategory } from "../sevices/api";


function ProductList(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [categoryproducts, setcategoryproducts] = useState([])

  async function fetchproductBycategory() {
    let response = await getproductBycategory(props.category)
    console.log(response, props.category);
    setcategoryproducts(response.getcategory)
  }
  useEffect(() => {
    fetchproductBycategory()
  }, [])

  return (
    <>
      <div className="products">
        <div className="electronics">
          <h2 className='txt1'>best of <br />
            {props.categroy}</h2>
          <div className="view-btn">
            <button className='view'>view all</button>
          </div>
          <div className="elec-image">
          </div>
        </div>

        <div className="sub-carousal">
          <Carousel responsive={responsive}
            //  swipeable={true}
            draggable={true}
            infinite={false}
            autoPlay={false}
          >
            {
              categoryproducts.length !== 0 && categoryproducts.map((oneproduct) => {
                console.log(oneproduct);
                return (

                  <Product oneproduct={oneproduct} />
                )
              })
            }

          </Carousel>

        </div>



      </div>






    </>
  )
}
export default ProductList;

