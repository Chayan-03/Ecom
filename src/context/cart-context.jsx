import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducers";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialstate = {
        cart: []
    };
    const [{ cart }, cartDispatch] = useReducer(cartReducer, initialstate);

    return (
        <CartContext.Provider value={{ cart, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };