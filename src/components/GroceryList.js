import React from 'react'
import List from './List'

function GroceryList({groceryItems, handleClickGroceryItem}) {
    return (
        <div>
            <List items={groceryItems} handleClickItem={handleClickGroceryItem}/>
        </div>
    )
}

export default GroceryList