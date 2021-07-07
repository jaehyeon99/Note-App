import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import New from './components/New';
import Note from './components/Note';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Note}></Route>
          <Route path="/New" component={New}></Route>
        </Switch>
      </div>

    </BrowserRouter>

  )
};

export default App;

