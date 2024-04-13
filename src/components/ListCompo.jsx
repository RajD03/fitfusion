import React, { useState } from "react";

const ListCompo = (props) => {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    };
    return (
        <>
            <div className="item_list">
                <span onClick={cutIt} className="crossBtn">❌
                </span>
                <li style={{ textDecoration: line ? 'line-through' : "none" }} className="list"> {props.text} </li>
            </div>
        </>
    );
}
export default ListCompo; 