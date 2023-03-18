import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix }) {
    
    function handleNewLetter(e) {
        let letter = e.target.value
        if (currCol == 4) {
            setCurrCol(0)
            setCurrRow(currRow+1)

        } else {
            setCurrCol(currCol+1)
        }

        let matrixUpdate = [...matrix];
        matrixUpdate[currRow][currCol] = letter;
        setMatrix = matrixUpdate
    }

    return (
        <button id='key' value={letter} onClick={handleNewLetter} style={{ fontFamily: "Sono" }}>
            {letter}
        </button>
    )
}

export default Key;