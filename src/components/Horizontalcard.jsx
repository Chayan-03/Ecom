import React from 'react'
import {useCart} from "../context/cart-context";


export const Horizontalcard = ({product}) => {
    const {cartDispatch} = useCart();
    const onRemoveClick = (product) => {
        cartDispatch({
            type:'REMOVE_FROM_CART',
            payload:{product}
        })


    }
    return (
        <>
            <div className="card-horizontal d-flex shadow">
                <div className="card-hori-image-container relative">
                    <img className="card-image" src={product.images[0]} alt="shoes"/>

                </div>
                <div className="card-details d-flex direction-column">
                    <div className="card-des">{product.title}</div>
                    <div className="card-description">
                        <p className="card-des">{product.category.name}</p>
                        <p className="card-price">Rs. {product.price}
                            {/*<span*/}
                            {/*className="price-strike-through padding-all-8">Rs. 2499</span>*/}
                            {/*<span className="discount padding-all-8">(30% OFF)</span>*/}
                        </p>
                    </div>
                    <div className="quantity-container d-flex gap">
                        <p className="q-title">Quantity: </p>
                        <div className="count-container d-flex align-center gap">
                            <button className="count">-</button>
                            <span className="count-value">1</span>
                            <button className="count">+</button>
                        </div>
                    </div>
                    <div className="cta-btn d-flex gap-10">
                        <div className="cta-btn">
                            <button onClick={() => onRemoveClick(product)}
                                className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                                <span className="material-icons-outlined">
                                remove_shopping_cart
                                </span> Remove from Cart
                            </button>
                        </div>
                        <div className="cta-btn ">
                            <button
                                className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">

                                Move to Whishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}