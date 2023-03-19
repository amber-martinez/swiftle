import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix, rightPlace, rightLetter }) {
    let id = 'key'
    
    function handleNewLetter(e) {
        let currLetter = e.target.value
        let col;

        if (currCol < 4) {
            col = currCol+1
            setCurrCol(col)
        }

        let matrixUpdate = [...matrix];
        matrixUpdate[currRow][col] = currLetter;
        setMatrix = matrixUpdate
    }

    if (rightPlace.includes(letter)) {
        id = 'rightPlace'
    }
    if (rightLetter.includes(letter)) {
        id = 'rightLetter'
    }

    // console.log(rightLetter, rightPlace)

    return (
        <button id={id} value={letter} onClick={handleNewLetter}>
            {letter}
        </button>
    )
}

export default Key;