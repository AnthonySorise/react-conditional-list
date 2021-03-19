import React from 'react';
import '../Styles/_listItem.css'

const ListItem = props => {

    return (
        <tr className="listItem" if-item-01={props.ifItem01} if-item-operator={props.ifItemOperator} if-item-02={props.ifItem02}>
            <td>
                <ul><li></li></ul>
            </td>
            <td>
                {props.dateTime}
            </td>
            <td>
                {props.text}
            </td>
            <td>
                <div onClick={()=>{props.handleRemoveItem(props.index)}}>[<span className="closeText">Remove</span>]</div>
            </td>
        </tr>
    );
}
export default ListItem;