import React from 'react'
import List from './List'

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
    return (
        // <> kortere syntax voor React.Fragment
        <>
            <button
                className="button"
                onClick={handleClickEmptyCart}>
                Leeg de winkelmand
            </button>
            <List
                readonly={true}
                items={groceryItems}
            />
        </>
    )
}

export default ShoppingCart