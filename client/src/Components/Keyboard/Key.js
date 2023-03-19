import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix }) {
    
    function handleNewLetter(e) {
        let currLetter = e.target.value
        let col;
        console.log(currCol)

        if (currCol == 4) {
            // setCurrCol(0)
            // setCurrRow(currRow+1)
        } else {
            col = currCol+1
            setCurrCol(col)
        }

        let matrixUpdate = [...matrix];
        matrixUpdate[currRow][col] = currLetter;
        setMatrix = matrixUpdate
        console.log(matrix)
    }

    return (
        <button id='key' value={letter} onClick={handleNewLetter}>
            {letter}
        </button>
    )
}

export default Key;