import React, { useEffect, useState } from 'react';

function Key({ letter, setCurrCol, currCol, currRow, matrix, setMatrix, rightPlace, rightLetter }: { letter: string, setCurrCol: Function, currCol: number, currRow: number, matrix: string[][], setMatrix: Function, rightPlace: string[][], rightLetter: string[][] }) {
    const [id, setID] = useState("key")
    
    function handleNewLetter(e: Event): void {
        let currLetter: string = (e.target as HTMLInputElement).value;
        let col: number = currCol;

        if (currCol < 4) {
            col = currCol+1
            setCurrCol(col)
        }

        let matrixUpdate: string[][] = [...matrix];
        matrixUpdate[currRow][col] = currLetter;
        setMatrix(matrixUpdate);
        // setMatrix = matrixUpdate
    }

    // highlight keys on keyboard based on letters guessed
    useEffect(() => {
        if (currRow > 0) {
            if (rightPlace[currRow-1].includes(letter)) {
                setID("rightPlace");
            } else if (rightLetter[currRow-1].includes(letter)) {
                setID("rightLetter");
            } else if (matrix[0].includes(letter) || matrix[1].includes(letter) || matrix[2].includes(letter) || matrix[3].includes(letter) || matrix[4].includes(letter) || matrix[5].includes(letter)) {
                let check = [rightPlace.join('').split(''), rightLetter.join('').split('')].join('').split('')
                if (!check.includes(letter)) {
                    setID("notALetter");
                }
            }
        }
    }, [currRow])

    return (
        <button className="key" id={id} value={letter} onClick={() => handleNewLetter}>
            {letter}
        </button>
    )
}

export default Key;