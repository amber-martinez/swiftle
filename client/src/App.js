import React, { useState } from 'react'
import Header from "./Components/Header";
import RowGroup from "./Components/Matrix/RowGroup";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  
  // let's do a matrix filled with stacks. can only remove from top
  const [word, setWord] = useState("swift")
  const [currCol, setCurrCol] = useState(-1);
  const [currRow, setCurrRow] = useState(0);
  const [matrix, setMatrix] = useState([[], [], [], [], [], []])
  const [rightPlace, setRightPlace] = useState([[], [], [], [], [], []]);
  const [rightLetter, setRightLetter] = useState([[], [], [], [], [], []]);

  return (
    <div className="App">
      <Header/>
      <RowGroup matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} />
      <Keyboard setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} word={word} rightPlace={rightPlace} rightLetter={rightLetter}/>
    </div>
  );
}

export default App;
