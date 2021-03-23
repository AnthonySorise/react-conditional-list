import React from 'react';
import '../Styles/_listItem.css'

const ListItem = props => {

    return (
        <div    className="listItem" 
                if-item-01={props.ifItem01} 
                if-item-operator={props.ifItemOperator} 
                if-item-02={props.ifItem02} 
                then-item-01={props.thenItem01} 
                then-item-02={props.thenItem02}>
            
            <div>
                <ul><li></li></ul>
            </div>
            <div>
                {props.dateTime}
            </div>
            <div>
                <div className="listItem-ifContainer">
                    <div>
                        <span className='listItem-text-if'>If </span>
                        <span className='listItem-text-ifItem01'>{props.text_ifItem01} </span>
                        <span className='listItem-text-ifItemOperator'>{props.text_ifItemOperator} </span>
                        <span className='listItem-text-ifItem02'>{props.text_ifItem02} </span>
                        
                    </div>
                </div>
                <div className="listItem-thenContainer">
                    <div>
                        <span className='listItem-text-then'>Then </span>
                        <span className='listItem-text-thenItem01'>{props.text_thenItem01} </span>
                        <span className='listItem-text-thenItemOperator'>equals </span>
                        <span className='listItem-text-thenItem02'>{props.text_thenItem02} </span>
                        
                    </div>
                </div>
            </div>

            <div className="removeListItem-btn">
                <div onClick={()=>{props.handleRemoveItem(props.index)}}>[<span className="closeText">Remove</span>]</div>
            </div>
        </div>
    );
}
export default ListItem;