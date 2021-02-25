import React from 'react'
import List from './List'

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
    return (
        // <> kortere syntax voor React.Fragment
        <>
            <button
                className="button-primary"
                onClick={handleClickEmptyCart}>
                Winkelmand leegmaken
            </button>
            <List
                readonly={true}
                items={groceryItems}
            />
        </>
    )
}

export default ShoppingCart