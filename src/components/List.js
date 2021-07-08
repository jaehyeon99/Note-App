import React, { useEffect, useState } from 'react';
import New from './New';

function List(props) {
    // const [contents, setcontents] = useState(['첫번째 메모', '두번째 메모'])

    // const tilte_list = List.map((index, list) => {
    //     <li key={index}>{list}</li>
    // });
    if (!props.title) {
        return <div>Not sentence</div>
    }
    return (


        < div className="lists" >
            <ul>


                {


                    props.title.map((title, index) => {
                        return <li key={index}>{title}</li>
                    })

                }


            </ul>
        </div >


    )
};

export default List;