import React, { useState } from 'react';

function List() {

    const [title, settitle] = useState(['첫번째 메모', '두번째 메모'])
    // const tilte_list = List.map((index, list) => {
    //     <li key={index}>{list}</li>
    // });
    return (


        < div className="lists" >
            <ul>
                {
                    title.map((list, index) => {
                        return <li key={index}>{list}</li>
                    })
                }


            </ul>
        </div>
    )
};

export default List;