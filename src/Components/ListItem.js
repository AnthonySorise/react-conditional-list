import React from 'react';
import '../Styles/_listItem.css'

const ListItem = props => {

    return (
        <tr className="listItem">
            <td>
                <ul><li></li></ul>
            </td>
            <td>
                {props.text}
            </td>
            <td>
                {props.dateTime}
            </td>
            <td>
                <div onClick={()=>{props.handleRemoveItem(props.index)}}>[<span className="closeText">Remove</span>]</div>
            </td>
        </tr>
    );
}
export default ListItem;