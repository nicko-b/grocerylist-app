import React from 'react'
import GroceryItem from './GroceryItem.js'

function GroceryList() {
    let items = [{name: "bread", price: 5}, {name: "orange juice", price: 3}]
    return (
        <li>
            {items.map(item => <GroceryItem item={item} />)}
        </li>
    );
}


export default GroceryList;