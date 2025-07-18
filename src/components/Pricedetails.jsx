import React from 'react'
import {useCart} from "../context/cart-context";
import {findtotalproductPrice} from "../utility/findtotalproductPrice.jsx";




export const Pricedetails = () => {
    const {cart} = useCart();
    const tprice = findtotalproductPrice(cart);
    const deliverycharge = 150;
    return (
        <div className="w-[400px] bg-[#fafafa] ">
            <div className="text-2xl">
                <p>Your Order Sumamary ..</p>
                <div className="flex flex-col gap-5 ">
                    <div className="flex">
                        <p> Price Of {cart?.length} Items</p>
                        <p className="m-auto"> Rs. {tprice}</p>
                    </div>
                    <div className="flex">
                        <p> Delivery Charges </p>
                        <p className="m-auto">Rs. {deliverycharge}</p>
                    </div>

                </div>
                <div>
                    <p> Total Charges Rs. {tprice + deliverycharge}</p>
                </div>
                <div className="flex align-center justify-center bg-gray-600 text-amber-50 rounded-1xl ">
                    <button className="">Place Order</button>
                </div>
            </div>
        </div>
    )
}