import React from 'react'
import { Navbar } from '../components/Navbar.jsx'
import {useEffect} from 'react'
import {GetAllProducts} from '../api/getAllProducts.jsx'
import {useState} from "react";
import {ProductCard} from "../components/ProductCard.jsx";


export const Homepage = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        (async () => {
            const data = await GetAllProducts();
            setProducts(data);
        })()
    },[])
    return (
        <>
        <Navbar/>
            <main className ="flex flex-wrap  justify-center pt-8 ">
                {products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)}

            </main>
        </>
    )
}