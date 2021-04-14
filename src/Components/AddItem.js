import React, { useEffect, useRef, useState } from 'react';
import AddItem_If_AndGroup from './AddItem_If_AndGroup';
import '../Styles/_addItem.css'

const AddItem = props => {
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
        for(var i = 0; i < selects.length; i++){
            selects[i].value = "";
        }
        let textInputs = document.querySelectorAll("input[type='text']");
        for(var i = 0; i < textInputs.length; i++){
            textInputs[i].value = "";
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
                            <option value="carfaxoneowner">carfaxoneowner</option>
                            <option value="comment1">comment1</option>
                            <option value="comment2">comment2</option>
                            <option value="comment3">comment3</option>
                            <option value="comment4">comment4</option>
                            <option value="comment5">comment5</option>
                            <option value="comment6">comment6</option>
                            <option value="comment7">comment7</option>
                            <option value="comment8">comment8</option>
                            <option value="comment9">comment9</option>
                            <option value="comment10">comment10</option>
                            <option value="comment11">comment11</option>
                            <option value="comment12">comment12</option>
                            <option value="comment13">comment13</option>
                            <option value="comment14">comment14</option>
                            <option value="comment15">comment15</option>
                            <option value="comment16">comment16</option>
                            <option value="comment17">comment17</option>
                            <option value="comment18">comment18</option>
                            <option value="comment19">comment19</option>
                            <option value="comment20">comment20</option>
                            <option value="condition">condition</option>
                            <option value="conditional_price">conditional_price</option>
                            <option value="datamodifieddate">datamodifieddate</option>
                            <option value="dateinstock">dateinstock</option>
                            <option value="daysinstock">daysinstock</option>
                            <option value="dealer_discount">dealer_discount</option>
                            <option value="dealer_offer">dealer_offer</option>
                            <option value="dealerid">dealerid</option>
                            <option value="dealername">dealername</option>
                            <option value="description">description</option>
                            <option value="display_price">display_price</option>
                            <option value="drivetrain">drivetrain</option>
                            <option value="engaspiration">engaspiration</option>
                            <option value="engblock">engblock</option>
                            <option value="engcubicinches">engcubicinches</option>
                            <option value="engcyls">engcyls</option>
                            <option value="engdescription">engdescription</option>
                            <option value="engliters">engliters</option>
                            <option value="epacity">epacity</option>
                            <option value="epaclassification">epaclassification</option>
                            <option value="epahighway">epahighway</option>
                            <option value="extcolor">extcolor</option>
                            <option value="extcolor_code">extcolor_code</option>
                            <option value="extcolorgeneric">extcolorgeneric</option>
                            <option value="extcolorhexcode">extcolorhexcode</option>
                            <option value="feed_id">feed_id</option>
                            <option value="friendlystyle">friendlystyle</option>
                            <option value="fueltype">fueltype</option>
                            <option value="has_video">has_video</option>
                            <option value="id">id</option>
                            <option value="imagecount">imagecount</option>
                            <option value="imagesmodifieddate">imagesmodifieddate</option>
                            <option value="int_color_code">int_color_code</option>
                            <option value="int_colorgeneric">int_colorgeneric</option>
                            <option value="intcolor">intcolor</option>
                            <option value="intcolorhexcode">intcolorhexcode</option>
                            <option value="internetprice">internetprice</option>
                            <option value="intupholstery">intupholstery</option>
                            <option value="is_new">is_new</option>
                            <option value="is_used">is_used</option>
                            <option value="isspecial">isspecial</option>
                            <option value="location">location</option>
                            <option value="make">make</option>
                            <option value="marketclass">marketclass</option>
                            <option value="miles">miles</option>
                            <option value="miscprice1">miscprice1</option>
                            <option value="miscprice2">miscprice2</option>
                            <option value="miscprice3">miscprice3</option>
                            <option value="miscprice4">miscprice4</option>
                            <option value="miscprice5">miscprice5</option>
                            <option value="model">model</option>
                            <option value="modelnumber">modelnumber</option>
                            <option value="msrp">msrp</option>
                            <option value="sellingprice">sellingprice</option>
                            <option value="specialprice">specialprice</option>
                            <option value="standardbody">standardbody</option>
                            <option value="stock">stock</option>
                            <option value="title">title</option>
                            <option value="total_add_ons_value">total_add_ons_value</option>
                            <option value="total_conditional_incentives_value">total_conditional_incentives_value</option>
                            <option value="total_incentives_value">total_incentives_value</option>
                            <option value="total_savings">total_savings</option>
                            <option value="trans">trans</option>
                            <option value="transdescription">transdescription</option>
                            <option value="trim">trim</option>
                            <option value="type">type</option>
                            <option value="video_cc_url">video_cc_url</option>
                            <option value="video_url">video_url</option>
                            <option value="vin">vin</option>
                            <option value="year">year</option>
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