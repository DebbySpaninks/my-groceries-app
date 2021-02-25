import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    render() {
        const { items, readonly, handleClickItem } = this.props
        const listItems = items
            ? items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    readonly={readonly}
                    clickItem={handleClickItem}
                />
            ))
            : ''

        return (
            // <> kortere syntax voor React.Fragment
            <>
                <ul>
                    {listItems}
                </ul>
            </>
        )
    }
}

export default List