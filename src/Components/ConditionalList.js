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
        console.log(listItems);
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
                {listItems.map((item, i) =>
                    <ListItem   key = {i} 
                                index = {i} 
                                text_ifItem01={item.text.ifs[0][0].text_ifItem01} 
                                text_ifItemOperator={item.text.ifs[0][0].text_ifItemOperator} 
                                text_ifItem02={item.text.ifs[0][0].text_ifItem02}
                                text_thenItem01={item.text.then.text_thenItem01} 
                                text_thenItem02={item.text.then.text_thenItem02} 
                                dateTime={item.data.dateTime} 
                                ifItem01={item.data.ifs[0][0].ifItem01} 
                                ifItemOperator={item.data.ifs[0][0].ifItemOperator} 
                                ifItem02={item.data.ifs[0][0].ifItem02} 
                                thenItem01={item.data.then.thenItem01} 
                                thenItem02={item.data.then.thenItem02} 
                                handleRemoveItem={handleRemoveItem}/>
                )}
            </div>
            <AddItem handleAddItem = {handleAddItem}></AddItem>
        </div>
    );
}
export default ConditionalList;