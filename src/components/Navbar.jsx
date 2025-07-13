import React from 'react'



export const Navbar = () => {
    return (
        <>
            <header className="flex justify-between bg-green-400 p-4 ">
                <div>
                    <h1 className="text-3xl"> Shop It</h1>
                </div>
                <nav className="flex justify-around gap-10 bg-red-900 ml-5 pt-5">
                    <span className="material-icons-outlined hover:cursor-pointer">
                    search
                    </span>
                    <span className="material-icons-outlined hover:cursor-pointer">
                    add_shopping_cart
                    </span>

                    <span className="material-icons-outlined hover:cursor-pointer">
                    favorite
                    </span>

                    <span className="material-icons-outlined hover:cursor-pointer">
                    account_circle
                    </span>

                </nav>

            </header>
        </>
    )
}