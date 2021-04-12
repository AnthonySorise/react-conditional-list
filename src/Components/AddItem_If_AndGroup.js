import React, { useState } from 'react';
import AddItem_If_OrGroup from './AddItem_If_OrGroup';
// import '../Styles/_AddItem_If_AndGroup.css'

const AddItem_If_AndGroup = props => {
    const [num_ifOrs, setnum_ifOrs] = useState(0);

    const addOr = () => {
        setnum_ifOrs(num_ifOrs + 1);
    }
    const resetOrs = () => {
        setnum_ifOrs(0);
    }

    return (
        <li className="addItemLi addItem_if_andGroup">
            {props.andIndex == 0 ? (
                <div className="add-or-text"></div>
            ) : (
                <div className="add-or-text">AND</div>
            )}
            {props.andIndex == 0 ? (
                <h2 className="addItemLi-ifText">If</h2>
            ) : (
                <h2 className="addItemLi-ifText invisible">If</h2>
            )}

            {Array.from(Array(num_ifOrs + 1), (e, i) => {
                return <AddItem_If_OrGroup key={i} andIndex ={props.andIndex} orIndex={i} orIndexMax={num_ifOrs} passIfVals={props.passIfVals} handleSubmit={props.handleSubmit}></AddItem_If_OrGroup>
            })}

            {props.andIndex != props.andIndexMax ? (
                <div></div>
            ) : (
                <div className="addOrButtonGroup">
                    <div className="addOrContainer">
                        <button onClick={addOr}>Add Or</button>
                    </div>
                    <div className="resetOrContainer">
                        <button onClick={resetOrs}>Reset</button>
                    </div>
                </div>
            )}
        </li> 
    );
}
export default AddItem_If_AndGroup;