import React, { useEffect, useState } from 'react';
import AddItem_If_AndGroup from './AddItem_If_AndGroup';
import '../Styles/_addItem.css'

const AddItem = props => {

    const comparedItemDictonary = require('../Options_CompareItems');

    const [num_ifAnds, setnum_ifAnds] = useState(0);
    const [addItemObject, setAddItemObject] = useState({});
    const [resetOrs, setResetOrs] = useState(0); 

    useEffect(() => {
        let newItem = 
        { 
            text:{
                ifs:[[{}]],
                then:{
                    text_thenItem01: "", 
                    text_thenItem02: "" 
                }
            },
            data:{
                dateTime: "", 
                ifs:[[{}]],
                then:{
                    thenItem01: "", 
                    thenItem02: ""
                }
            }
        };
        setAddItemObject(newItem);
    }, []);

    const getDateString = () => {
        let date = new Date();
        return date.toLocaleString();
    }
    const passIfVals = (ifObject, andIndex, orIndex) => {

        var newItem = addItemObject;

        if(!newItem.text.ifs[andIndex]){
            newItem.text.ifs[andIndex] = [{}];
        }
        if(!newItem.text.ifs[andIndex][orIndex]){
            newItem.text.ifs[andIndex][orIndex] = {};
        }
        if(!newItem.data.ifs[andIndex]){
            newItem.data.ifs[andIndex] = [{}];
        }
        if(!newItem.data.ifs[andIndex][orIndex]){
            newItem.data.ifs[andIndex][orIndex] = {};
        }

        newItem.text.ifs[andIndex][orIndex].text_ifItem01 = ifObject.text_ifItem01;
        newItem.text.ifs[andIndex][orIndex].text_ifItemOperator = ifObject.text_ifItemOperator;
        newItem.text.ifs[andIndex][orIndex].text_ifItem02 = ifObject.text_ifItem02;
        newItem.data.ifs[andIndex][orIndex].data_ifItem01 = ifObject.data_ifItem01;
        newItem.data.ifs[andIndex][orIndex].data_ifItemOperator = ifObject.data_ifItemOperator;
        newItem.data.ifs[andIndex][orIndex].data_ifItem02 = ifObject.data_ifItem02;
    }

    const updateThenVals = () => {
        let thenItem01 = document.getElementById('thenItem01');
        let thenItem02 = document.getElementById('thenItem02');

        var newItem = addItemObject;
        newItem.text.then.text_thenItem01 = thenItem01.value;
        newItem.text.then.text_thenItem02 = thenItem02.value;
        newItem.data.then.thenItem01 = thenItem01.value;
        newItem.data.then.thenItem02 = thenItem02.value;
        setAddItemObject(newItem);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItemObject.data.dateTime = getDateString();
        props.handleAddItem(addItemObject);

        //TO DO clear all vals
        let selects = document.querySelectorAll("select");
        for(var iSelect = 0; iSelect < selects.length; iSelect++){
            selects[iSelect].value = "";
        }
        let textInputs = document.querySelectorAll("input[type='text']");
        for(var iTextInput = 0; iTextInput < textInputs.length; iTextInput++){
            textInputs[iTextInput].value = "";
        }

        resetAnds();
        setResetOrs(prev => prev + 1)

        let newItem = 
        { 
            text:{
                ifs:[[{}]],
                then:{
                    text_thenItem01: "", 
                    text_thenItem02: "" 
                }
            },
            data:{
                dateTime: "", 
                ifs:[[{}]],
                then:{
                    thenItem01: "", 
                    thenItem02: ""
                }
            }
        };
        setAddItemObject(newItem);
    }

    const addAnd = () => {
        setnum_ifAnds(num_ifAnds + 1);
    }
    const resetAnds = () => {
        setnum_ifAnds(0);
    }

    return (
        <div className="addItem">
            <ul>

                {Array.from(Array(num_ifAnds + 1), (e, i) => {
                    return <AddItem_If_AndGroup key={i} andIndex={i} andIndexMax={num_ifAnds} passIfVals={passIfVals} handleSubmit={handleSubmit} resetOrs={resetOrs}></AddItem_If_AndGroup>
                })}

                <div className="addAndContainer">
                    <button onClick={addAnd}>Add And</button>
                </div>
                <div className="resetAddContainer">
                    <button onClick={resetAnds}>Reset</button>
                </div>

                <li className="addItemLi addItem_then">
                    <h2 className="addItemLi-thenText">Then</h2>
                    <form onSubmit={handleSubmit}>

                        <select id="thenItem01" name="thenItem01" onChange={e => updateThenVals()}>
                            <option value=""></option>
                            {Object.keys(comparedItemDictonary).map((compareItemOption, i)=>
                                <option key={compareItemOption} value={compareItemOption}>{comparedItemDictonary[compareItemOption]}</option>
                            )}
                        </select>

                        <span id="thenItemOperator">equals</span>

                        <input
                            id="thenItem02"
                            type="text"
                            onChange={e => updateThenVals()}
                        />
                        <input className="addItemBtn" type="submit" value="+" />
                        
                    </form>    
                </li>
            </ul>
        </div>
    );
}
export default AddItem;