import React from 'react'
import ProductList from '../ProductList'
import SelleraddProduct from './SelleraddProduct'
import SellerNavbar from './SellerNavbar'

function sellerHome() {
    return (
        <div>
            <SellerNavbar />
            <ProductList category="electronics" />
            <ProductList category="kids" />
            <ProductList category="Home&kitchen" />

        </div>
    )
}

export default sellerHome