import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom"
import Add from './components/Add'



function App() {

  const [title, setTitle] = useState(
    () => JSON.parse(window.localStorage.getItem("title")) || []
  )
  useEffect(() => {
    window.localStorage.setItem("title", JSON.stringify(title))
  }, [title])



  const [searchinfo, setsearch] = useState("");



  return (
    <BrowserRouter>
      <div className="App">
        <div className="frame">
          <h2>Note APP</h2>
          <p>Note your important things</p>
          <div className="search">
            <input onChange={(e) => {
              setsearch(e.target.value);
            }}
              type="text" placeholder=" Search" />
          </div>
          <div className="lists">
            <ul>
              {
                title.map((val, index) => {
                  if (searchinfo == "") {
                    return <li key={index}>{val}</li>
                  } else if (val.toLowerCase().includes(searchinfo.toLowerCase())) {
                    return <li key={index}>{val}</li>
                  }
                })
              }
            </ul>
          </div>
          <div className="add_button">
            <Link to="/Add">+ New</Link>

          </div>
          <Route path="/Add" exact
            render={() => <Add title={title} Addtitle={setTitle} />} />
        </div>
        {/* <Route path="/Add" exact
          render={() => <Add title={title} Addtitle={setTitle} />} /> */}
      </div>

    </BrowserRouter >


  )
};

export default App;

