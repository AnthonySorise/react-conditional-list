import React from 'react';
import '../Styles/_listItem.css'

const ListItem = props => {

    return (
        <div className="listItem" if-item-01={props.ifItem01} if-item-operator={props.ifItemOperator} if-item-02={props.ifItem02}>
            
            <div>
                <ul><li></li></ul>
            </div>
            <div>
                {props.dateTime}
            </div>
            <div>
                <span className='listItem-text-if'>IF </span>
                <span className='listItem-text-ifItem01'>{props.text_ifItem01} </span>
                <span className='listItem-text-ifItemOperator'>{props.text_ifItemOperator} </span>
                <span className='listItem-text-ifItem02'>{props.text_ifItem02} </span>
                
            </div>
            <div>
                <div onClick={()=>{props.handleRemoveItem(props.index)}}>[<span className="closeText">Remove</span>]</div>
            </div>
        </div>
    );
}
export default ListItem;