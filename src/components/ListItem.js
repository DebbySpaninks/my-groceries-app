import React from 'react'

function ListItem(item) {
    return (
        <div>
            <li key={item.id}
                className="list-item"
                // onClick={clickItem}
                value={item.title}
            >
                {item.title}
            </li>
        </div>
    )
}

export default ListItem