import React, { useState } from "react";
import Key from './Key'
import ConfettiExplosion from 'react-confetti-explosion';

function Keyboard({ setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix, word, rightPlace, rightLetter }: { setCurrCol: Function, setCurrRow: Function, currCol: number, currRow: number, matrix: string[][], setMatrix: Function, word: string, rightPlace: string[][], rightLetter: string[][] }) {
    const [isExploding, setIsExploding] = useState(false);
    // type Alphabet = string[]

    const alphabet1: string[] = ["q","w","e","r","t","y","u","i","o","p"];
    const alphabet2: string[] = ["a","s","d","f","g","h","j","k","l"];
    const alphabet3: string[] = ["z","x","c","v","b","n","m"];
    const alphabets: string[][] = [alphabet1, alphabet2, alphabet3];
    let alphabetRender: any;

    // create key components for each letter in alphabet
    for (let i = 0; i < alphabets.length; i++) {
        alphabetRender[i] = alphabets[i].map(letter => (
            <Key key={letter} letter={letter} setCurrCol={setCurrCol} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} rightPlace={rightPlace} rightLetter={rightLetter}/>
        ))
    }
    
    // handle events after backspacing
    function handleDel() {
        let matrixUpdate: string[][] = [...matrix];
        matrixUpdate[currRow].pop();
        setCurrCol(currCol-1)
        setMatrix(matrixUpdate)
    }
    // handle events after submitting a word
    function handleEnter() {
        let wordCount = 0;
        let matrixUpdate: string[][] = [...matrix];
        let row: string[] = matrix[currRow];

        // highlight for correctly guessed letters
        for (let i = 0; i < row.length; i++) {
            if (word[i] === row[i]) {
                wordCount++;
                rightPlace[currRow][i] = row[i]
            } else if (word.includes(row[i]) && !rightPlace[i].includes(row[i])) {
                rightLetter[currRow].push(row[i])
            }
        }
        setCurrRow(currRow+1)
        setCurrCol(-1)
        setMatrix(matrixUpdate)
        if (wordCount === 5) setIsExploding(true)
    }

    const width: number = 3000;

    return (
        <div style={{ color: "#f0f0ee", marginTop: 39, textAlign: 'center' }}>
            <div id="confetti" style={{ marginLeft: "50%", marginTop: "-50%", position: "absolute" }}>
                {isExploding && <ConfettiExplosion width={width} height="150vh"/>}
            </div>
            {alphabets[0]}<br></br>
            {alphabets[1]}<br></br>
            <button className="key" value="enter" onClick={handleEnter} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                enter
            </button>
            {alphabets[2]}
            <button className="key" value="back" onClick={handleDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                ⇦
            </button>
        </div>
    )
}

export default Keyboard;