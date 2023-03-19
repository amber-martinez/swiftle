import React, { useState } from "react";
import Key from './Key'
// import enter from './EnterFunc'

function Keyboard({ setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix, word, rightPlace, rightLetter }) {

    let alphabet1 = ["q","w","e","r","t","y","u","i","o","p"]
    let alphabet2 = ["a","s","d","f","g","h","j","k","l"]
    let alphabet3 = ["z","x","c","v","b","n","m"]
    let alphabets = [alphabet1, alphabet2, alphabet3]

    for (let i = 0; i < alphabets.length; i++) {
        alphabets[i] = alphabets[i].map(letter => (
            <Key letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} rightPlace={rightPlace} rightLetter={rightLetter}/>
        ))
    }

    function handleEnterDel(e) {
        let matrixUpdate = [...matrix];
        if (e.target.value == "enter") {
            let row = matrix[currRow];
            for (let i = 0; i < row.length; i++) {
                if (word[i] == row[i]) {
                    // highlight lavendar
                    rightPlace.push(row[i])
                } else if (word.includes(row[i]) && !rightPlace.includes(row[i])) {
                    // highlight maroon
                    rightLetter.push(row[i])
                }
            }
            setCurrRow(currRow+1)
            setCurrCol(-1)
            
        } else if (e.target.value == "back") {
            matrixUpdate[currRow].pop();
            setCurrCol(currCol-1)
        }
        setMatrix(matrixUpdate)
    }

    return (
        <div style={{ color: "#f0f0ee", marginTop: 39, textAlign: 'center' }}>
            {alphabets[0]}<br></br>
            {alphabets[1]}<br></br>
            <button id="key" value="enter" onClick={handleEnterDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>enter</button>
            {alphabets[2]}
            <button id="key" value="back" onClick={handleEnterDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>⇦</button>
        </div>
    )
}

export default Keyboard;