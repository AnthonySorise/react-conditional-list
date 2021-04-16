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
            console.log(JSON.parse(localStorage.getItem("listItems")))
        }
    }, []);

    const handleAddItem = (newItem) => {
        messageText.current = "Conditional Added!";
        let newList = [];
        for(let i = 0; i < listItems.length; i++){
            newList.push(listItems[i]);
        }
        newList.push(newItem);
        setListItems(newList);
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(JSON.parse(localStorage.getItem("listItems")));
    }
    const handleRemoveItem = (index) => {
        if (window.confirm('Are you sure you want to delete this conditional?')) {
            messageText.current = "Conditional Removed!";
            let newList = [];
            for(let i = 0; i < listItems.length; i++){
                if(i !== index){
                    newList.push(listItems[i]);
                }
            }
            setListItems(newList);
            localStorage.setItem("listItems", JSON.stringify(newList));
          } else {
            console.log('Delete Cancelled');
          }
    }
    const moveListItem = (oldIndex, newIndex) =>{
        let newList = listItems;
        if (newIndex >= newList.length) {
            var k = newIndex - newList.length + 1;
            while (k--) {
                newList.push(undefined);
            }
        }
        newList = newList.splice(newIndex, 0, newList.splice(oldIndex, 1)[0]);
        setListItems(newList);
        localStorage.setItem("listItems", JSON.stringify(newList));
    }
    const handleMoveListItemUp = (index) =>{
        if (index == listItems.length-1){
            return
        }
        moveListItem(index, index + 1);
    }
    const handleMoveListItemDown = (index) =>{
        if (index == 0){
            return
        }
        moveListItem(index, index - 1);
    }

    return (
        <div className="conditionalList">
            <MessageBanner text={messageText.current}></MessageBanner>
            <h1>Conditional List</h1>
            <div>
                <ListItems
                    listItems ={listItems} 
                    handleRemoveItem={handleRemoveItem}
                    handleMoveListItemUp={handleMoveListItemUp}
                    handleMoveListItemDown={handleMoveListItemDown}
                />
            </div>
            <AddItem handleAddItem = {handleAddItem}></AddItem>
        </div>
    );
}
export default ConditionalList;