import React, { useState } from 'react';
import '../Styles/_addItem.css'

const AddItem = props => {
    const [text, setText] = useState("");

    const getDateString = () => {
        let date = new Date();
        return date.toLocaleString();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newItem = {text: text, dateTime: getDateString()};
        props.handleAddItem(newItem);
        setText("");
        document.getElementById("toDoInput").focus();
    }

    return (
        <div className="addItem">
            <ul>
                <li>
                    <form onSubmit={handleSubmit}>
                        <input
                            id="toDoInput"
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <input type="submit" value="+" />
                    </form>    
                </li>
            </ul>
        </div>
    );
}
export default AddItem;