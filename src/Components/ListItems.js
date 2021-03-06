import React from 'react';
import '../Styles/_listItems.css'

const ListItems = props => {
    return (
        <div className="listItemContainer">
            {props.listItems.map((item, i)=>

            <div className="listItem" key={i}>
                <div>
                    <ul><li></li></ul>
                </div>
                <div>
                    {item.data.dateTime}
                </div>
                <div className="listItem-container">
                    <div className="listItem-ifContainer">
                        {item.text.ifs.map((ifsAndCollection, j)=>
                        <div className="ifs-andCollectionContainer" key={j}>

                            {j === 0 ? (
                                <div></div>
                            ) : (
                                <div>AND</div>
                            )}

                            <div className="ifs-andCollection">
                                {item.text.ifs[j].map((ifsOrCollection, k)=>
                                <div className="ifs-orCollectionContainer" key={k}>

                                    {k === 0 ? (
                                        <div></div>
                                    ) : (
                                        <div>OR</div>
                                    )}

                                    <div className="ifs-orCollection">
                                        <div>
                                            <span className='listItem-text-if'>If </span>
                                            <span className='listItem-text-ifItem01'>{item.text.ifs[j][k].text_ifItem01} </span>
                                            <span className='listItem-text-ifItemOperator'>{item.text.ifs[j][k].text_ifItemOperator} </span>
                                            <span className='listItem-text-ifItem02'>{item.text.ifs[j][k].text_ifItem02} </span>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>

                        )}
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

                <div className="btn removeListItem-btn">
                    <div onClick={()=>{props.handleRemoveItem(i)}}>[<span className="closeText">Remove</span>]</div>
                </div>
                <div className="btn">
                    <div onClick={()=>{props.handleMoveListItemUp(i)}}>[<span className="closeText">Up</span>]</div>
                </div>
                <div className="btn">
                    <div onClick={()=>{props.handleMoveListItemDown(i)}}>[<span className="closeText">Down</span>]</div>
                </div>
            </div>
            )}
        </div>
    );
}
export default ListItems;