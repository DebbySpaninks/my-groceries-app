import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    render() {
        const { items } = this.props
// if items ? then render through all listItems with .map
//      const listItems = this.state.groceryItems.map(    nog weghalen!!
        const listItems = items
            ? items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    // title={item.title}
                />
            ))
            : ''
        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default List