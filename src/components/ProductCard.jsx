import React from 'react';
import {useCart} from "../context/cart-context";
import {useState} from "react";
import {findProductInCart} from "../utility/findpageinCart";
import {useNavigate} from "react-router-dom";


export const ProductCard = ({product}) => {
    const {cart,cartDispatch} = useCart();
    const navigate = useNavigate();
    const isProductinCard = findProductInCart(cart,product.id);
    const cartClick=(product)=>{
        !isProductinCard ?
        cartDispatch({
            type:'ADD_TO_CART',
            payload:{product}
        }): navigate('/cart');
    }
    return (
            <div className="card card-vertical d-flex direction-column relative shadow">
                <div className="card-image-container">
                    <img className="card-image" src={product.images[0]} alt="shoes"/>
                </div>
                <div className="card-details">
                    <div className="card-title">{product.title}</div>
                    <div className="card-description">
                        <p className="card-des">{product.category.name}</p>
                        <p className="card-price">
                            Rs. {product.price}
                        </p>
                    </div>
                    <div className="cta-btn">
                        <button onClick={()=>{cartClick(product)}}
                            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-icons-outlined">
                                {
                                    isProductinCard ? 'shopping_cart_checkout' : 'add_shopping_cart'
                                }

                            </span>
                            {
                                isProductinCard ? 'Go to Cart' : 'Add To Cart'
                            }

                        </button>
                        <button
                            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-icons-outlined">
                            favorite
                            </span>
                            Add To Whishlist
                        </button>
                    </div>
                </div>
            </div>
    )
}