import React, { Component } from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryInput: '',
            groceryItems: [
                { id: 1, title: 'melk' },
                { id: 2, title: 'fruit' },
                { id: 3, title: 'brood' }
            ],
            shoppingListItems: [{ id: 1, title: 'appelmoes', amount: 2 }]
        }
    }

    render() {
        const addNewShoppingListItem = itemTitle => {
            const newShoppingItem = {
                id: this.state.shoppingListItems.length + 1,
                title: itemTitle,
                amount: 1
            }

            this.setState(prevState => {
                const newList = prevState.shoppingListItems.concat(newShoppingItem)
                return {
                    shoppingListItems: newList
                }
            })
        }
        const addAmountToItem = itemTitle => {
            // copy v/d state, omdat je die niet direct kan muteren.
            const shoppingList = [...this.state.shoppingListItems]
            const newList = shoppingList.map(shoppingItem => {
                if (shoppingItem.title === itemTitle) {
                    shoppingItem.amount++
                }
                return shoppingItem
            })
            this.setState({ shoppingListItems: newList })
        }

        const handleClickGroceryItem = event => {
            const clickedItem = event.target.getAttribute('value');
            const currentShoppingList = this.state.shoppingListItems;
            const shoppingListItem = currentShoppingList.filter(
                item => item.title === clickedItem
            )

            shoppingListItem.length === 0
                ? addNewShoppingListItem(clickedItem)
                : addAmountToItem(clickedItem)
        }

        const emptyCart = () => {
            this.setState({ shoppingListItems: [] })
        }

        const addGrocery = grocery => {
            const item = {
                id: this.state.groceryItems.length + 1,
                title: grocery
            }
            // concat returned een nieuwe array
            this.setState({
                groceryItems: this.state.groceryItems.concat(item)
            })
        }

        return (
            <div className="container">
                <div className="groceries-list">
                    <h1>Boodschappenlijst</h1>
                    <GroceryList
                        addGrocery={addGrocery}
                        groceryItems={this.state.groceryItems}
                        handleClickGroceryItem={handleClickGroceryItem}
                    />
                </div>
                <div className="shopping-basket">
                    <h1>Winkelmand</h1>
                    <ShoppingCart
                        handleClickEmptyCart={emptyCart}
                        groceryItems={this.state.shoppingListItems}
                    />
                </div>
            </div>
        )
    }
}

export default Container