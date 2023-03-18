import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, setCurrStr, currCol, currRow, currStr }) {
    
    function handleNewLetter(e) {
        let letter = e.target.value
        if (currCol == 5) {
            setCurrCol(1)
            setCurrRow(currRow+1)
            setCurrStr([letter])
        } else {
            let curr = [...currStr]
            curr.push(letter)
            setCurrCol(currCol+1)
            setCurrStr(curr)
        }
    }

    return (
        <button id='key' value={letter} onClick={handleNewLetter} style={{ fontFamily: "Sono" }}>
            {letter}
        </button>
    )
}

export default Key;