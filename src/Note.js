import React from 'react';

function Note() {
    return (
        <div className="frame">
            <h2>Note APP</h2>
            <p>Note your important things</p>
            <div className="search">
                <input type="text" placeholder=" Search" />
            </div>
            <div className="Notelist">

            </div>
        </div>
    )
};

export default Note;