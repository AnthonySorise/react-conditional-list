import React, { useEffect, useRef, useState } from 'react';
import MessageBanner from './MessageBanner'
import ListItems from './ListItems'
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
        if (window.confirm('Are you sure you want to delete this conditional?')) {
            messageText.current = "Conditional Removed!";
            let newListItems = [];
            for(let i = 0; i < listItems.length; i++){
                if(i != index){
                    newListItems.push(listItems[i]);
                }
            }
            setListItems(newListItems);
            localStorage.setItem("listItems", JSON.stringify(newListItems));
          } else {
            console.log('Delete Cancelled');
          }
    }

    return (
        <div className="conditionalList">
            <MessageBanner text={messageText.current}></MessageBanner>
            <h1>Conditional List</h1>
            <div>
                <ListItems
                    listItems ={listItems} 
                    handleRemoveItem={handleRemoveItem}/>
            </div>
            <AddItem handleAddItem = {handleAddItem}></AddItem>
        </div>
    );
}
export default ConditionalList;