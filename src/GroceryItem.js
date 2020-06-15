import React from 'react'

function GroceryItem(props) {
    return (
        <li>
            {props.item.name} - ${props.item.price}
        </li>
    );
}


export default GroceryItem;