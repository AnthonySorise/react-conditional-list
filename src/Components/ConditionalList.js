import React, { useEffect, useRef, useState } from 'react';
import MessageBanner from './MessageBanner'
import ListItem from './ListItem'
import AddItem from './AddItem'
import '../Styles/_conditionalList.css'

const ConditionalList = props => {
    const [listItems, setListItems] = useState([]);
    const messageText = useRef("");

    useEffect(() => {
        if(localStorage.getItem("listItems")){
            setListItems(JSON.parse(localStorage.getItem("listItems")));
        }
    }, []);

    const handleAddItem = (newItem) => {
        messageText.current = "Conditional Added!";
        let newListItems = [];
        for(let i = 0; i < listItems.length; i++){
            newListItems.push(listItems[i]);
        }
        newListItems.push(newItem);
        setListItems(newListItems);
        localStorage.setItem("listItems", JSON.stringify(newListItems));
    }
    const handleRemoveItem = (index) => {
        messageText.current = "Conditional Removed!";
        let newListItems = [];
        for(let i = 0; i < listItems.length; i++){
            if(i != index){
                newListItems.push(listItems[i]);
            }
        }
        setListItems(newListItems);
        localStorage.setItem("listItems", JSON.stringify(newListItems));
    }

    return (
        <div className="conditionalList">
            <MessageBanner text={messageText.current}></MessageBanner>
            <h1>Conditional List</h1>
            <table>
                <tbody>
                {listItems.map((item, i) =>
                    <ListItem key = {i} index = {i} text={item.text} dateTime={item.dateTime} handleRemoveItem={handleRemoveItem}/>
                )}
                </tbody>
            </table>
            <AddItem handleAddItem = {handleAddItem}></AddItem>
        </div>
    );
}
export default ConditionalList;