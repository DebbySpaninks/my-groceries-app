import React, { Component } from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "melk" },
                { id: 2, title: "kiwi's" },
                { id: 3, title: "brood" }
            ],
            shoppingListItems: [
                { id: 1, title: "melk" }
            ]
        }
        // this.handleChange = this.handleChange.bind(this)      -------Niet Nodig? dan verwijderen!!!
    }
    handleClick() {
        // console.log("I was clicked")
        alert('button was clicked')
    }

    render() {
        return (
            <div className="container">
                <div className="groceries-list">
                    <h1>Boodschappenlijst</h1>
                    <GroceryList />
                    <button onClick={this.handleClick}>Voeg toe aan Boodschappenlijst</button>
                </div>
                <div className="shopping-basket">
                    <h1>Winkelmand</h1>
                    <ShoppingCart />
                    <button onClick={this.handleClick}>Winkelmand leegmaken</button>
                </div>
            </div>
        )
    }
}

export default Container