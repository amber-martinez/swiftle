import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, setCurrStr, currCol, currRow, currStr }) {
    
    function handleNewLetter(e) {
        let letter = e.target.value
        if (currCol == 5) {
            setCurrCol(1)
            setCurrRow(currRow+1)
            setCurrStr(letter)
        } else {
            setCurrCol(currCol+1)
            setCurrStr(currStr+=letter)
        }
    }

    return (
        <button id='key' value={letter} onClick={handleNewLetter}>
            {letter}
        </button>
    )
}

export default Key;