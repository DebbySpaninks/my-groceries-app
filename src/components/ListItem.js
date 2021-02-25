import React from 'react'

const ListItem = ({ clickItem, readonly, item }) => {
    return (
        <li key={item.id}
            className="list-item"
            onClick={clickItem}
            value={item.title}
        >
            <span> {item.title || ""}</span>
            <span>{readonly ? ` ${item.amount}` : ""}</span>
        </li>
    )
}

export default ListItem