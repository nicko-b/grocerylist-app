import React from 'react'

function StudentInfo(props) {
    return (
        <li>
            {props.item.id} - {props.item.name} - {props.item.sdi} - {props.item.role}
        </li>
    );
}


export default GroceryItem;