import React, { useState } from 'react'
import Header from "./Components/Header";
import RowGroup from "./Components/Boxes/RowGroup";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  // let's do a matrix filled with stacks. can only remove from top
  const [currCol, setCurrCol] = useState(0);
  const [currRow, setCurrRow] = useState(0);

  return (
    <div className="App">
      <Header/>
      <RowGroup currCol={currCol} currRow={currRow}/>
      <Keyboard setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow}/>
    </div>
  );
}

export default App;
