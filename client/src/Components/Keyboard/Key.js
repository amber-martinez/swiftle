import React, { useEffect, useState } from 'react';

function Key({ letter, setCurrCol, currCol, currRow, matrix, setMatrix, rightPlace, rightLetter }) {
    const [id, setID] = useState('key')
    
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

    // highlight keys on keyboard based on letters guessed
    useEffect(() => {
        if (rightPlace.includes(letter)) {
            setID("rightPlace");
        } else if (rightLetter.includes(letter)) {
            setID("rightLetter");
        } else if (matrix[0].includes(letter) || matrix[1].includes(letter) || matrix[2].includes(letter) || matrix[3].includes(letter) || matrix[4].includes(letter) || matrix[5].includes(letter)) {
            setID("notALetter");
        }
    }, [currRow])

    return (
        <button id={id} value={letter} onClick={handleNewLetter}>
            {letter}
        </button>
    )
}

export default Key;