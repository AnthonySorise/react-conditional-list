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
            <div>
                {listItems.map((item, i) =>
                    <ListItem   key = {i} 
                                index = {i} 
                                text_ifItem01={item.text_ifItem01} 
                                text_ifItemOperator={item.text_ifItemOperator} 
                                text_ifItem02={item.text_ifItem02}
                                text_thenItem01={item.text_thenItem01} 
                                text_thenItem02={item.text_thenItem02} 
                                dateTime={item.dateTime} 
                                ifItem01={item.ifItem01} 
                                ifItemOperator={item.ifItemOperator} 
                                ifItem02={item.ifItem02} 
                                thenItem01={item.thenItem01} 
                                thenItem02={item.thenItem02} 
                                handleRemoveItem={handleRemoveItem}/>
                )}
            </div>
            <AddItem handleAddItem = {handleAddItem}></AddItem>
        </div>
    );
}
export default ConditionalList;