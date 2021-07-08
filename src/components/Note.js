import React, { useState } from 'react';
import List from './List';
import { Link } from "react-router-dom";
import New from './New';

function Note() {

    // const [contents, newcontents] = useState(['첫번째 메모', 'Second memo']);

    return (

        <div className="frame">
            <h2>Note APP</h2>
            <p>Note your important things</p>
            <div className="search">
                <input type="text" placeholder=" Search" />
            </div>
            <div className="Notelist">
                <List />
                {/* < div className="lists" >
                    <ul>
                        {
                            <New newcontents={newcontents} contents={contents} />





                            // contents.map((list, index) => {
                            //     return <li key={index}>{list}</li>
                            // })
                        }


                    </ul>
                </div> */}
            </div>
            <div className="add_button">
                <Link to="/New">+ New</Link>
            </div>
        </div>


    )
};

export default Note;

