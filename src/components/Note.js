import React from 'react';
import List from './List';
import { Link } from "react-router-dom";


function Note() {
    return (

        <div className="frame">
            <h2>Note APP</h2>
            <p>Note your important things</p>
            <div className="search">
                <input type="text" placeholder=" Search" />
            </div>
            <div className="Notelist">
                <List />
            </div>
            <div className="add_button">
                <Link to="/New">+ New</Link>
            </div>
        </div>


    )
};

export default Note;

