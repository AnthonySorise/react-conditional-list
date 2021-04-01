import React, { useState } from 'react';
// import '../Styles/_AddItem_If_AndGroup.css'

const AddItem_If_AndGroup = props => {
    const [num_ifOrs, setnum_ifOrs] = useState(0);

    const addOr = () => {
        setnum_ifOrs(num_ifOrs + 1);
    }
    const resetOrs = () => {
        setnum_ifOrs(0);
    }

    const updateValues = () => {
        

        let ifItem01 = document.getElementById('ifItem01');
        let ifItemOperator = document.getElementById('ifItemOperator');
        let ifItem02 = document.getElementById('ifItem02');

        let ifObject = {
            text_ifItem01:ifItem01.value,
            text_ifItemOperator:ifItemOperator.options[ifItemOperator.selectedIndex].text,
            text_ifItem02:ifItem02.value,
            data_ifItem01:ifItem01.value,
            data_ifItemOperator:ifItemOperator.value,
            data_ifItem02:ifItem02.value
        }

        props.passIfVals(ifObject);
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
            
            <form onSubmit={props.handleSubmit}>
                <select id="ifItem01" name="ifItem01" onChange={e => updateValues()}>
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
                <select id="ifItemOperator" name="ifItemOperator" onChange={e => updateValues()}>
                    <option value=""></option>
                    <option value="equals">equals</option>
                    <option value="does_not_equal">does not equal</option>
                    <option value="is_less_than">is less than</option>
                    <option value="is_greater_than">is greater than</option>
                    <option value="is_less_than_or_equal">is less than or equal to</option>
                    <option value="is_greater_than_or_equal">is greater than or equal to</option>
                    <option value="contains">contains</option>
                    <option value="does_not_contain">doesn't contain</option>
                    <option value="starts_with">starts with</option>
                    <option value="does_not_start_with">doesn't start with</option>
                    <option value="ends_with">ends with</option>
                    <option value="does_not_end_with">doesn't end with</option>
                </select>
                <input
                    id="ifItem02"
                    type="text"
                    onChange={e => updateValues()}
                />
                
            </form>

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