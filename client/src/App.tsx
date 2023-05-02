import React, { useState } from 'react';
import Header from "./Components/Header";
import RowGroup from "./Components/Matrix/RowGroup";
import Keyboard from "./Components/Keyboard/Keyboard";
import words from "./Components/Words";

function App() {

  let randomNum: number = Math.floor(Math.random() * 55) + 1

  // let's do a matrix filled with stacks. can only remove from top
  const [word, setWord] = useState<string>(words[randomNum]);
  const [currCol, setCurrCol] = useState<number>(-1);
  const [currRow, setCurrRow] = useState<number>(0);
  const [matrix, setMatrix] = useState<string[][]>([[], [], [], [], [], []])
  const [rightPlace, setRightPlace] = useState<string[][]>([[], [], [], [], [], []]);
  const [rightLetter, setRightLetter] = useState<string[][]>([[], [], [], [], [], []]);

  return (
    <div className="App">
      <Header/>
      <RowGroup matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} />
      <Keyboard setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} word={word} rightPlace={rightPlace} rightLetter={rightLetter}/>
    </div>
  );
}

export default App;
