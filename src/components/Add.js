import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Add(props) {
    const [List, addList] = useState(["가", "나", "다"]);
    // const [List, addList] = useState(
    //     () => JSON.parse(window.localStorage.getItem("List")) || ["sd"]
    // );

    // useEffect(() => {
    //     window.localStorage.setItem("List", JSON.stringify(List));
    // }, [List])
    const Memo_list = List.map((list, index) => {
        return <li key={index}>{list}</li>
    })
    const [New, addNew] = useState('');
    const Newthing = (e) => {
        addNew(e.target.value);
        console.log(New)
            ;
    }
    return (
        <div className="New_frame">
            <input onChange={Newthing} placeholder="Add Contents" className="add_new" />
            <div className="add_button">
                <Link onClick={() => {
                    var copy = [...props.title];
                    New === '' ?
                        alert("할 일을 입력하세요")
                        :
                        copy.push(New);
                    props.Addtitle(copy)

                }} to="/">Add</Link>
            </div>
        </div>
    )
}

export default Add;

