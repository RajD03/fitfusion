import React, { useState } from "react";
import ListCompo from "./ListCompo";
import img2 from './images/accordion.jpg'
const Todolist = () => {

    const [item, setItem] = useState();
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value)
    };

    const listOfItems = () => {
        setNewItem((previousValue) => {
            return [...previousValue, item]
        });
        setItem("  ");
    };

    return <>
        <div className="todolist" id="goals">
            <h1 className="goal_heading">MY GOALS</h1>
            <div className="todolist_left">
                <img src={img2} className="img2" />
                <h1>SET YOUR DAILY GOALS </h1>
            </div>
            <div className="todolist_right">
                <br />
                <h1> MY DAILY GOALS</h1>
                <br />
                <input type="text" placeholder="add an item" onChange={itemEvent} value={item} className="input_item" />
                <span className="plusBtn" onClick={listOfItems} >➕</span>
                <ol>{newItem.map((val) => {
                    return <ListCompo text={val} />;
                })}
                </ol>
            </div>

        </div>
    </>
};

export default Todolist;