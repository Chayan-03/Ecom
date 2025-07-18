import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {useCart} from "../context/cart-context";




export const Navbar = () => {
    const navigate = useNavigate();
    const[isaccountclicked,setisaccountclicked] = useState(false);
    return (
        <>
            <header className="flex justify-between bg-green-400 p-4 hover:cursor-pointer ">
                <div>
                    <h1 onClick={()=>navigate('/')} className="text-3xl"> Shop It</h1>
                </div>
                <nav className="flex justify-around gap-10 bg-red-900 ml-5 pt-5">
                    <span className="material-icons-outlined hover:cursor-pointer">
                    search
                    </span>
                    <span onClick={()=>navigate('/cart')} className="material-icons-outlined hover:cursor-pointer">
                    add_shopping_cart
                    </span>
                    <span onClick={()=>navigate('/whishlist')} className="material-icons-outlined hover:cursor-pointer">
                    favorite

                    </span>
                    <div className="">
                        <span onClick={()=>navigate('/profile')}   className="material-icons-outlined hover:cursor-pointer">
                        account_circle
                        </span>
                        <div>
                            <h1>Login</h1>
                        </div>
                    </div>

                </nav>

            </header>
        </>
    )
}