import React, { useState } from "react";
import Key from './Key'
import ConfettiExplosion from 'react-confetti-explosion';

function Keyboard({ setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix, word, rightPlace, rightLetter }) {
    const [isExploding, setIsExploding] = useState(false);

    let alphabet1 = ["q","w","e","r","t","y","u","i","o","p"]
    let alphabet2 = ["a","s","d","f","g","h","j","k","l"]
    let alphabet3 = ["z","x","c","v","b","n","m"]
    let alphabets = [alphabet1, alphabet2, alphabet3]
    // create key components for each letter in alphabet
    for (let i = 0; i < alphabets.length; i++) {
        alphabets[i] = alphabets[i].map(letter => (
            <Key letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} rightPlace={rightPlace} rightLetter={rightLetter}/>
        ))
    }
    
    // handle events after backspacing
    function handleDel() {
        let matrixUpdate = [...matrix];
        matrixUpdate[currRow].pop();
        setCurrCol(currCol-1)
        setMatrix(matrixUpdate)
    }
    // handle events after submitting a word
    function handleEnter() {
        let wordCount = 0;
        let matrixUpdate = [...matrix];
        let row = matrix[currRow];

        // highlight for correctly guessed letters
        for (let i = 0; i < row.length; i++) {
            if (word[i] == row[i]) {
                wordCount++;
                rightPlace[currRow][i] = row[i]
            } else if (word.includes(row[i]) && !rightPlace.includes(row[i])) {
                rightLetter[currRow].push(row[i])
            }
        }
        setCurrRow(currRow+1)
        setCurrCol(-1)
        setMatrix(matrixUpdate)
        if (wordCount == 5) setIsExploding(true)
    }

    return (
        <div style={{ color: "#f0f0ee", marginTop: 39, textAlign: 'center' }}>
            <div id="confetti" style={{ marginLeft: "50%", marginTop: "-50%", position: "absolute" }}>
                {isExploding && <ConfettiExplosion width="3000" height="150vh"/>}
            </div>
            {alphabets[0]}<br></br>
            {alphabets[1]}<br></br>
            <button class="key" value="enter" onClick={handleEnter} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                enter
            </button>
            {alphabets[2]}
            <button class="key" value="back" onClick={handleDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                ⇦
            </button>
        </div>
    )
}

export default Keyboard;