
import React from "react";
import Bankimage from "./Bankimage";
import Cart from "./Cart";
import MainCarousel from "./MainCarousel";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Viewproduct from "./Viewproduct";
import Image from "./Image";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Image />
            <MainCarousel />
            <Bankimage />
            <ProductList category="electronics" />
            <ProductList category="kids" />
            <ProductList category="Home&kitchen" />
            {/* <ProductList category="kids" /> */}
            {/* <Cart /> */}
            {/* <Viewproduct /> */}

        </div>
    )
}