import React, { useEffect, useRef } from 'react';
import '../Styles/_listItems.css'

const ListItems = props => {
    
    useEffect(() => {

    }, []);
    return (
        <div className="listItemContainer">
            {props.listItems.map((item, i)=>

            <div className="listItem" key={i}>
                {console.log("List Item: ")}
                {console.log(item)}
                <div>
                    <ul><li></li></ul>
                </div>
                <div>
                    {item.data.dateTime}
                </div>
                <div>
                    <div className="listItem-ifContainer">
                        <div>
                            <span className='listItem-text-if'>If </span>
                            <span className='listItem-text-ifItem01'>{item.text.ifs[0][0].text_ifItem01} </span>
                            <span className='listItem-text-ifItemOperator'>{item.text.ifs[0][0].text_ifItemOperator} </span>
                            <span className='listItem-text-ifItem02'>{item.text.ifs[0][0].text_ifItem02} </span>
                        </div>
                    </div>
                    <div className="listItem-thenContainer">
                        <div>
                            <span className='listItem-text-then'>Then </span>
                            <span className='listItem-text-thenItem01'>{item.text.then.text_thenItem01} </span>
                            <span className='listItem-text-thenItemOperator'>equals </span>
                            <span className='listItem-text-thenItem02'>{item.text.then.text_thenItem02} </span>
                        </div>
                    </div>
                </div>

                <div className="removeListItem-btn">
                    <div onClick={()=>{props.handleRemoveItem(i)}}>[<span className="closeText">Remove</span>]</div>
                </div>
            </div>
            )}
        </div>
    );
}
export default ListItems;