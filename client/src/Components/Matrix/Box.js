import React, { useState, useEffect } from "react";

function Box({ letter, matrix, currRow, rightPlace, rightLetter, row, col }) {
    const [id, setID] = useState('')

    // highlight boxes on matrix based on guessed letters
    // need to fix all boxes turning. look at right place, right letter arrays
    useEffect(() => {
        if (rightPlace[row].includes(letter) && col == rightPlace[row].indexOf(letter)) {
            console.log(col, rightPlace[row].indexOf(letter))
            setID("rightPlaceBox");
        } else if (rightLetter[row].includes(letter) && col) {
            setID("rightLetterBox");
        }
    }, [currRow, rightPlace, rightLetter])

    return (
        <div class="box" id={id}>
            <p id="letter">{letter}</p>
        </div>
    )
}

export default Box;