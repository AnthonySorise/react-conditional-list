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
        <li className="addItemLi AddItem_If_AndGroup">
            {props.addIndex == 0 ? (
                <div></div>
            ) : (
                <div>AND</div>
            )}
            {props.addIndex == 0 ? (
                <h2 className="addItemLi-ifText">If</h2>
            ) : (
                <h2 className="addItemLi-ifText invisible">If</h2>
            )}
            
            <AddItem_If_OrGroup handleSubmit={props.handleSubmit} passIfVals={props.passIfVals}></AddItem_If_OrGroup>

            {props.addIndex != props.addIndexMax ? (
                <div></div>
            ) : (
                <div className="addOrButtonGroup">
                    <div className="addOrContainer">
                        <button>Add Or</button>
                    </div>
                    <div className="resetOrContainer">
                        <button>Reset</button>
                    </div>
                </div>
            )}

        </li> 
    );
}
export default AddItem_If_AndGroup;