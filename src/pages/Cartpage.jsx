import {Navbar} from '../components/Navbar'
import {useCart} from '../context/cart-context'
import {Horizontalcard} from "../components/Horizontalcard";
import {Pricedetails} from "../components/Pricedetails";


export const Cartpage = () => {
    const {cart} = useCart();
    return (
        <>
        <Navbar/>
        <main className="flex flex-col items-center pt-6 bg-[#fafafa] ">
            <h2>Items in Cart</h2>
            <div className="flex">
                <div className=" flex flex-wrap gap-10">
                    {cart?.length > 0 &&  cart.map(product => <Horizontalcard key={product.id} product={product}/>)}:
                </div>
                <div>
                    <Pricedetails/>
                </div>

            </div>
        </main>
        </>
    )
}
