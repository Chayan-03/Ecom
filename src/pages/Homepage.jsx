import React from 'react'
import { Navbar } from '../components/Navbar'
import {useEffect} from 'react'
import {GetAllProducts} from '../api/getAllProducts'
import {useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {useCart} from "../context/cart-context";
import {GetAllCategories} from "../api/getallcategories";
import {getProductsByCategories} from "../utility/getProductsByCategories";


export const Homepage = () => {
    const [products,setProducts] = useState([]);
    const[categories,setCategories] = useState([]);
    const[selectedCategory,setSelectedCategory] = useState("All");
    useEffect(()=>{
        (async () => {
            const data = await GetAllProducts();
            const categories = await GetAllCategories();
            const updatedcategories = [...categories, {id:"1a", name: "All"}]
            setProducts(data);
            setCategories(updatedcategories);
        })()
    },[])
    const {cart} = useCart();
     const onCategoryClick = (category) => {
         setSelectedCategory(category);
     }
     const filteredProducts = getProductsByCategories(selectedCategory,products);


    console.log(cart);
    return (
        <>
        <Navbar/>
            <main className ="pt-8 ">
                <div className="flex gap-4 justify-center mb-4">
                    {categories?.length >0 && categories.map(category => <div className="bg-green-400 font-semibold rounded-full p-1 hover:cursor-pointer" onClick={()=>onCategoryClick(category.name)} key={category.id}> {category.name}</div>)}
                </div>
                <div className="flex flex-wrap gap-8 justify-center p-1">
                    {filteredProducts?.length > 0 ? filteredProducts.map(product => <ProductCard key={product.id} product={product}/>):<h1>No Products Found</h1>}
                </div>
            </main>
        </>
    )
}