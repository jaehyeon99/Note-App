import React from 'react';
import List from '../List';

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
        </div>
    )
};

export default Note;