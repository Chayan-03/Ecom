//shows the item sin cart gere
import React from 'react'
import {useCart} from "../context/cart-context";


export const findProductInCart = (cart,id) => cart.length > 0 && cart.some(product =>product.id === id)


