import React from 'react';
import { Link } from "react-router-dom"

function New() {
    return (
        <div className="frame New_frame">
            <input placeholder="Title" className="add_new_title" />
            <br />
            <input placeholder="Contents" className="add_new" />
            <br />
            <div className="add_button">
                <Link to="/">Add</Link>
            </div>
        </div>
    )
};

export default New;