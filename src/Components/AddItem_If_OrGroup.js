import React from 'react';
// import '../Styles/_AddItem_If_OrGroup.css'

const AddItem_If_OrGroup = props => {

    const comparedItemDictonary = require('../Options_CompareItems');
    const operatorDictonary = require('../Options_Operators');

    const updateValues = () => {
        
        let ifItem01 = document.getElementById('ifItem01_' + props.andIndex + "_" + props.orIndex);
        let ifItemOperator = document.getElementById('ifItemOperator_' + props.andIndex + "_" + props.orIndex);
        let ifItem02 = document.getElementById('ifItem02_' + props.andIndex + "_" + props.orIndex);

        let ifObject = {
            text_ifItem01:ifItem01.value,
            text_ifItemOperator:ifItemOperator.options[ifItemOperator.selectedIndex].text,
            text_ifItem02:ifItem02.value,
            data_ifItem01:ifItem01.value,
            data_ifItemOperator:ifItemOperator.value,
            data_ifItem02:ifItem02.value
        }
        props.passIfVals(ifObject, props.andIndex, props.orIndex);
    }

    return (
        <form onSubmit={props.handleSubmit}>

            {props.orIndex === 0 ? (
                <div className="add-or-text"></div>
            ) : (
                <div className="add-or-text">OR</div>
            )}

            {props.orIndex === 0 ? (
                <div></div>
            ) : (
                <div className="or-spacer"></div>
            )}


            <select id={"ifItem01_" + props.andIndex + "_" + props.orIndex} className="ifItem01" name="ifItem01" onChange={e => updateValues()}>
                <option value=""></option>
                {Object.keys(comparedItemDictonary).map((compareItemOption, i)=>
                    <option key={compareItemOption} value={compareItemOption}>{comparedItemDictonary[compareItemOption]}</option>
                )}
            </select>

            <select id={"ifItemOperator_" + props.andIndex + "_" + props.orIndex} className="ifItemOperator" name="ifItemOperator" onChange={e => updateValues()}>
                <option value=""></option>
                {Object.keys(operatorDictonary).map((operatorOption, i)=>
                    <option key={operatorOption} value={operatorOption}>{operatorDictonary[operatorOption]}</option>
                )}
            </select>

            <input
                id={"ifItem02_" + props.andIndex + "_" + props.orIndex}
                type="text"
                onChange={e => updateValues()}
            />
            
        </form> 
    );
}
export default AddItem_If_OrGroup;