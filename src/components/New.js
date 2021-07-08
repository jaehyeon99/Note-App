import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import List from './List';


function New() {
    let [title, setTitle] = useState(
        () => JSON.parse(window.localStorage.getItem("title")) || []
    );
    // const [title, setTitle] = useState([]);
    const [New, addNew] = useState(" ");


    const Newthing = (e) => {
        addNew(e.target.value);
        console.log(New)
            ;
    }

    return (
        <div className="frame New_frame">
            <p>Memo Lists</p>
            {/* <List title={title} New={New} /> */}
            <br />

            {/* <input placeholder="Title" className="add_new_title" />
            <br /> */}
            <input onChange={Newthing} placeholder="Add Contents" className="add_new" />
            <br />
            <div className="add_button">
                <Link onClick={() => {
                    var copy = [...title];
                    New === '' ?
                        alert("put in memo")
                        :
                        copy.push(New);
                    setTitle(copy);
                    console.log(title);
                }} to="/">Add</Link>
            </div>
        </div >
    )
};

export default New;